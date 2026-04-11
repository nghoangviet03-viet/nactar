import { Ionicons } from "@expo/vector-icons";
import { useFocusEffect, useRouter } from "expo-router";
import React, { useCallback, useState } from "react";
import {
    FlatList,
    SafeAreaView,
    StatusBar,
    StyleSheet,
    Text,
    TouchableOpacity,
    View
} from "react-native";
import { getOrders } from "./ordersStore";

export default function OrdersScreen() {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  useFocusEffect(
    useCallback(() => {
      loadOrders();
    }, [])
  );

  const loadOrders = async () => {
    try {
      setLoading(true);
      const allOrders = await getOrders();
      setOrders(allOrders);
    } catch (error) {
      console.error("Error loading orders:", error);
    } finally {
      setLoading(false);
    }
  };

  const formatDate = (isoString) => {
    const date = new Date(isoString);
    return date.toLocaleDateString("en-US", {
      year: "numeric",
      month: "short",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    });
  };

  const renderOrderCard = ({ item: order }) => (
    <View style={styles.orderCard}>
      {/* Header */}
      <View style={styles.orderHeader}>
        <View>
          <Text style={styles.orderId}>#{order.id.slice(0, 8)}</Text>
          <Text style={styles.orderDate}>{formatDate(order.timestamp)}</Text>
        </View>
        <View style={styles.statusBadge}>
          <Text style={styles.statusText}>{order.status}</Text>
        </View>
      </View>

      <View style={styles.divider} />

      {/* Items */}
      <View style={styles.itemsContainer}>
        <Text style={styles.itemsTitle}>Items ({order.items.length})</Text>
        {order.items.map((item, index) => (
          <View key={index} style={styles.itemRow}>
            <View style={styles.itemInfo}>
              <Text style={styles.itemName}>{item.name}</Text>
              <Text style={styles.itemQty}>Qty: {item.qty}</Text>
            </View>
            <Text style={styles.itemPrice}>
              ${(item.price * item.qty).toFixed(2)}
            </Text>
          </View>
        ))}
      </View>

      <View style={styles.divider} />

      {/* Total */}
      <View style={styles.totalRow}>
        <Text style={styles.totalLabel}>Total Amount</Text>
        <Text style={styles.totalPrice}>${parseFloat(order.total).toFixed(2)}</Text>
      </View>

      {/* Track Button */}
      <TouchableOpacity style={styles.trackBtn}>
        <Ionicons name="location" size={16} color="#53B175" />
        <Text style={styles.trackBtnText}>Track Order</Text>
      </TouchableOpacity>
    </View>
  );

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor="#FFF" />

      {/* Header */}
      <View style={styles.headerContainer}>
        <TouchableOpacity onPress={() => router.back()}>
          <Ionicons name="chevron-back" size={24} color="#333" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Order History</Text>
        <View style={{ width: 24 }} />
      </View>

      {/* Content */}
      {loading ? (
        <View style={styles.centerContainer}>
          <Text>Loading...</Text>
        </View>
      ) : orders.length === 0 ? (
        <View style={styles.centerContainer}>
          <Ionicons name="bag-outline" size={80} color="#DDD" />
          <Text style={styles.emptyText}>No Orders Yet</Text>
          <Text style={styles.emptySubText}>
            Your orders will appear here
          </Text>
        </View>
      ) : (
        <FlatList
          data={orders}
          contentContainerStyle={styles.listContainer}
          keyExtractor={(item) => item.id}
          renderItem={renderOrderCard}
          showsVerticalScrollIndicator={false}
        />
      )}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFF",
  },

  headerContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 20,
    paddingTop: 16,
    paddingBottom: 20,
  },

  headerTitle: {
    fontSize: 18,
    fontWeight: "600",
    color: "#333",
  },

  centerContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },

  emptyText: {
    fontSize: 18,
    fontWeight: "600",
    marginTop: 16,
    color: "#333",
  },

  emptySubText: {
    fontSize: 14,
    color: "#999",
    marginTop: 8,
  },

  listContainer: {
    paddingHorizontal: 16,
    paddingVertical: 12,
  },

  orderCard: {
    backgroundColor: "#FFF",
    borderWidth: 1,
    borderColor: "#E8E8E8",
    borderRadius: 12,
    padding: 16,
    marginBottom: 16,
  },

  orderHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-start",
  },

  orderId: {
    fontSize: 14,
    fontWeight: "600",
    color: "#333",
  },

  orderDate: {
    fontSize: 12,
    color: "#999",
    marginTop: 4,
  },

  statusBadge: {
    backgroundColor: "#E8F5F0",
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 12,
  },

  statusText: {
    fontSize: 12,
    fontWeight: "600",
    color: "#53B175",
  },

  divider: {
    height: 1,
    backgroundColor: "#E8E8E8",
    marginVertical: 12,
  },

  itemsContainer: {
    marginBottom: 4,
  },

  itemsTitle: {
    fontSize: 13,
    fontWeight: "600",
    color: "#666",
    marginBottom: 8,
  },

  itemRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 8,
  },

  itemInfo: {
    flex: 1,
  },

  itemName: {
    fontSize: 13,
    fontWeight: "500",
    color: "#333",
  },

  itemQty: {
    fontSize: 12,
    color: "#999",
    marginTop: 2,
  },

  itemPrice: {
    fontSize: 13,
    fontWeight: "600",
    color: "#333",
  },

  totalRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 12,
  },

  totalLabel: {
    fontSize: 14,
    fontWeight: "600",
    color: "#333",
  },

  totalPrice: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#53B175",
  },

  trackBtn: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F5F5F5",
    paddingVertical: 10,
    borderRadius: 8,
    gap: 8,
  },

  trackBtnText: {
    fontSize: 13,
    fontWeight: "600",
    color: "#53B175",
  },
});
