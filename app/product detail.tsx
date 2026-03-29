import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import { useRouter } from "expo-router";
import { useState } from "react";

export default function ProductDetail() {
  const router = useRouter();
  const [qty, setQty] = useState(1);

  return (
    <ScrollView style={styles.container}>
      {/* HEADER */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => router.back()}>
          <Text style={styles.icon}>‹</Text>
        </TouchableOpacity>

        <TouchableOpacity>
          <Text style={styles.icon}>⤴</Text>
        </TouchableOpacity>
      </View>

      {/* IMAGE */}
      <View style={styles.imageBox}>
        <Image
          source={require("../assets/apple.png")}
          style={styles.image}
        />
      </View>

      {/* NAME */}
      <View style={styles.rowBetween}>
        <View>
          <Text style={styles.title}>Naturel Red Apple</Text>
          <Text style={styles.sub}>1kg, Price</Text>
        </View>

        <Text style={styles.heart}>♡</Text>
      </View>

      {/* QUANTITY */}
      <View style={styles.qtyRow}>
        <View style={styles.qtyBox}>
          <TouchableOpacity onPress={() => setQty(Math.max(1, qty - 1))}>
            <Text style={styles.qtyBtn}>−</Text>
          </TouchableOpacity>

          <Text style={styles.qtyText}>{qty}</Text>

          <TouchableOpacity onPress={() => setQty(qty + 1)}>
            <Text style={[styles.qtyBtn, { color: "#53B175" }]}>+</Text>
          </TouchableOpacity>
        </View>

        <Text style={styles.price}>$4.99</Text>
      </View>

      {/* DESCRIPTION */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Product Detail</Text>
        <Text style={styles.desc}>
          Apples are nutritious. Apples may be good for weight loss. Apples may
          be good for your heart. As part of a healthful and varied diet.
        </Text>
      </View>

      {/* NUTRITION */}
      <View style={styles.lineRow}>
        <Text style={styles.sectionTitle}>Nutritions</Text>
        <Text style={styles.gray}>100gr ›</Text>
      </View>

      {/* REVIEW */}
      <View style={styles.lineRow}>
        <Text style={styles.sectionTitle}>Review</Text>
        <Text style={styles.star}>★★★★★</Text>
      </View>

      {/* BUTTON */}
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Add To Basket</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    padding: 20,
  },

  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 10,
  },

  icon: {
    fontSize: 22,
  },

  imageBox: {
    backgroundColor: "#f5f5f5",
    borderRadius: 20,
    padding: 20,
    marginBottom: 20,
  },

  image: {
    width: "100%",
    height: 200,
    resizeMode: "contain",
  },

  rowBetween: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },

  title: {
    fontSize: 22,
    fontWeight: "bold",
  },

  sub: {
    color: "#999",
    marginTop: 5,
  },

  heart: {
    fontSize: 24,
  },

  qtyRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginVertical: 20,
  },

  qtyBox: {
    flexDirection: "row",
    alignItems: "center",
    gap: 15,
  },

  qtyBtn: {
    fontSize: 22,
  },

  qtyText: {
    fontSize: 18,
    borderWidth: 1,
    paddingHorizontal: 15,
    paddingVertical: 5,
    borderRadius: 10,
  },

  price: {
    fontSize: 22,
    fontWeight: "bold",
  },

  section: {
    marginBottom: 20,
  },

  sectionTitle: {
    fontWeight: "bold",
    fontSize: 16,
    marginBottom: 5,
  },

  desc: {
    color: "#666",
    lineHeight: 20,
  },

  lineRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingVertical: 15,
    borderTopWidth: 1,
    borderColor: "#eee",
  },

  gray: {
    color: "#999",
  },

  star: {
    color: "orange",
  },

  button: {
    backgroundColor: "#53B175",
    padding: 18,
    borderRadius: 20,
    marginTop: 30,
    alignItems: "center",
  },

  buttonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
});