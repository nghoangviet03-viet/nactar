import { router } from "expo-router";
import { useEffect, useState } from "react";
import {
    Image,
    SafeAreaView,
    StatusBar,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
} from "react-native";
import { clearCart } from "./cartStore";

export default function OrderAccepted() {
  const [showTrackSheet, setShowTrackSheet] = useState(false);

  useEffect(() => {
    // Clear cart when order is accepted successfully
    clearCart();
  }, []);

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <StatusBar barStyle="dark-content" backgroundColor="#F5F5F5" />

      {/* ================= MAIN SCREEN ================= */}
      {!showTrackSheet && (
        <View style={styles.container}>
          <View style={styles.card}>
            <Image
              source={require("../assets/tick.png")}
              style={styles.tickImage}
            />

            <Text style={styles.title}>
              Your Order has been accepted
            </Text>

            <Text style={styles.description}>
              Your items has been placed and is on its way to being processed
            </Text>

            <TouchableOpacity
              style={styles.trackButton}
              onPress={() => setShowTrackSheet(true)}
            >
              <Text style={styles.trackButtonText}>
                Track Order
              </Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.secondaryButton}
              onPress={() => router.push("/")}
              activeOpacity={0.7}
            >
              <Text style={styles.secondaryButtonText}>
                Back to home
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      )}

      {/* ================= FULL SCREEN TRACK ================= */}
      {showTrackSheet && (
        <View style={styles.fullScreen}>
          
          {/* Header */}
          <View style={styles.sheetHeader}>
            <Text style={styles.sheetTitle}>Track Order</Text>

            <TouchableOpacity onPress={() => setShowTrackSheet(false)}>
              <Text style={{ fontSize: 22 }}>✕</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.divider} />

          {/* Content */}
          <View style={styles.sheetRow}>
            <Text style={styles.sheetLabel}>Order Status</Text>
            <Text style={styles.sheetValueGreen}>Processing</Text>
          </View>

          <View style={styles.divider} />

          <View style={styles.sheetRow}>
            <Text style={styles.sheetLabel}>Order ID</Text>
            <Text style={styles.sheetValue}>#ORD-1024-9F2K</Text>
          </View>

          <View style={styles.divider} />

          <View style={styles.sheetRow}>
            <Text style={styles.sheetLabel}>Estimated Delivery</Text>
            <Text style={styles.sheetValue}>3 - 5 business days</Text>
          </View>

          {/* Button */}
          <TouchableOpacity
            style={styles.viewDetailsBtn}
            onPress={() => alert("📦 Chi tiết đơn hàng")}
          >
            <Text style={styles.viewDetailsText}>
              View Details
            </Text>
          </TouchableOpacity>

        </View>
      )}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F5F5F5",
    padding: 20,
  },

  card: {
    width: "100%",
    backgroundColor: "#fff",
    borderRadius: 24,
    padding: 30,
    alignItems: "center",
  },

  tickImage: {
    width: 100,
    height: 100,
    marginBottom: 28,
  },

  title: {
    fontSize: 22,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 12,
  },

  description: {
    fontSize: 14,
    color: "#888",
    textAlign: "center",
    marginBottom: 30,
  },

  trackButton: {
    backgroundColor: "#53B175",
    paddingVertical: 15,
    paddingHorizontal: 50,
    borderRadius: 30,
    marginBottom: 15,
  },

  trackButtonText: {
    color: "#fff",
    fontWeight: "600",
  },

  backHomeText: {
    color: "#999",
  },

  secondaryButton: {
    paddingVertical: 12,
  },
  secondaryButtonText: {
    color: "#2F3D4A",
    fontSize: 15,
    fontWeight: "600",
  },

  // 🔥 FULL SCREEN
  fullScreen: {
    flex: 1,
    backgroundColor: "#fff",
    padding: 20,
  },

  sheetHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 20,
  },

  sheetTitle: {
    fontSize: 20,
    fontWeight: "bold",
  },

  sheetRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingVertical: 16,
  },

  sheetLabel: {
    color: "#666",
  },

  sheetValue: {
    color: "#000",
  },

  sheetValueGreen: {
    color: "#53B175",
    fontWeight: "600",
  },

  divider: {
    height: 1,
    backgroundColor: "#eee",
  },

  viewDetailsBtn: {
    marginTop: 30,
    backgroundColor: "#53B175",
    padding: 16,
    borderRadius: 25,
    alignItems: "center",
  },

  viewDetailsText: {
    color: "#fff",
    fontWeight: "600",
  },
});