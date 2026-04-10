import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { router } from "expo-router";
import { useLocalSearchParams } from "expo-router";
export default function CheckoutModal() {
  const { total } = useLocalSearchParams();
  return (
    <View style={styles.container}>

      {/* HEADER */}
      <View style={styles.header}>
        <Text style={styles.title}>Checkout</Text>

        <TouchableOpacity onPress={() => router.back()}>
          <Ionicons name="close" size={24} />
        </TouchableOpacity>
      </View>

      {/* LIST OPTIONS */}
      <View style={styles.section}>

        {/* Delivery */}
        <View style={styles.row}>
          <Text style={styles.label}>Delivery</Text>
          <View style={styles.right}>
            <Text style={styles.value}>Select Method</Text>
            <Ionicons name="chevron-forward" size={18} />
          </View>
        </View>

        <View style={styles.divider} />

        {/* Payment */}
        <View style={styles.row}>
          <Text style={styles.label}>Payment</Text>
          <View style={styles.right}>
            <Ionicons name="card-outline" size={20} />
            <Ionicons name="chevron-forward" size={18} />
          </View>
        </View>

        <View style={styles.divider} />

        {/* Promo Code */}
        <View style={styles.row}>
          <Text style={styles.label}>Promo Code</Text>
          <View style={styles.right}>
            <Text style={styles.value}>Pick discount</Text>
            <Ionicons name="chevron-forward" size={18} />
          </View>
        </View>

        <View style={styles.divider} />

        {/* Total */}
        <View style={styles.row}>
          <Text style={styles.label}>Total Cost</Text>
          <View style={styles.right}>
            <Text style={styles.total}>${total}</Text>
            <Ionicons name="chevron-forward" size={18} />
          </View>
        </View>

      </View>

      {/* TERMS */}
      <Text style={styles.terms}>
        By placing an order you agree to our{" "}
        <Text style={{ fontWeight: "600" }}>Terms</Text> And{" "}
        <Text style={{ fontWeight: "600" }}>Conditions</Text>
      </Text>

      {/* BUTTON */}
<TouchableOpacity
  style={styles.button}
  onPress={() => router.push("/order_accepted")}
>
  <Text style={styles.buttonText}>Place Order</Text>
</TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    padding: 20
  },

  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 25
  },

  title: {
    fontSize: 22,
    fontWeight: "bold"
  },

  section: {
    backgroundColor: "#fff",
    borderRadius: 15
  },

  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 18
  },

  label: {
    fontSize: 16,
    color: "#333"
  },

  right: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8
  },

  value: {
    color: "#888"
  },

  total: {
    fontWeight: "bold",
    fontSize: 16
  },

  divider: {
    height: 1,
    backgroundColor: "#eee"
  },

  terms: {
    fontSize: 12,
    color: "#777",
    marginTop: 20,
    lineHeight: 18
  },

  button: {
    marginTop: 20,
    backgroundColor: "#53B175",
    padding: 18,
    borderRadius: 20,
    alignItems: "center"
  },

  buttonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "600"
  }
});