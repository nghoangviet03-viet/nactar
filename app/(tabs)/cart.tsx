import {
  View,
  Text,
  FlatList,
  StyleSheet,
  Image,
  TouchableOpacity
} from "react-native";

import { useState, useCallback } from "react";
import { useFocusEffect } from "expo-router";
import { getCart } from "../cartStore";
import { router } from "expo-router";

export default function Cart() {

  const [items, setItems] = useState([]);
  const [showCheckout, setShowCheckout] = useState(false);

  useFocusEffect(
    useCallback(() => {
      setItems([...getCart()]);
    }, [])
  );

  const increase = (index: number) => {
    const newCart = [...items];
    newCart[index].qty += 1;
    setItems(newCart);
  };

  const decrease = (index: number) => {
    const newCart = [...items];
    if (newCart[index].qty > 1) {
      newCart[index].qty -= 1;
    }
    setItems(newCart);
  };

  const removeItem = (index: number) => {
    const newCart = [...items];
    newCart.splice(index, 1);
    setItems(newCart);
  };

  const getTotal = () => {
    if (!items || items.length === 0) return 0;
    return items.reduce((sum, item) => {
      return sum + item.price * item.qty;
    }, 0);
  };

  return (
    <View style={styles.container}>

      <Text style={styles.title}>My Cart</Text>

      <FlatList
        data={items}
        contentContainerStyle={{ paddingBottom: 140 }}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item, index }) => (

          <View style={styles.card}>

            <Image source={item.image} style={styles.image} />

            <View style={styles.info}>

              <View style={styles.row}>
                <Text style={styles.name}>{item.name}</Text>

                <TouchableOpacity onPress={() => removeItem(index)}>
                  <Text style={styles.remove}>✕</Text>
                </TouchableOpacity>
              </View>

              <Text style={styles.desc}>1kg, Price</Text>

              <View style={styles.bottom}>

                <View style={styles.qtyBox}>

                  <TouchableOpacity
                    style={styles.qtyBtn}
                    onPress={() => decrease(index)}
                  >
                    <Text>-</Text>
                  </TouchableOpacity>

                  <Text style={styles.qty}>{item.qty}</Text>

                  <TouchableOpacity
                    style={styles.qtyBtn}
                    onPress={() => increase(index)}
                  >
                    <Text>+</Text>
                  </TouchableOpacity>

                </View>

                <Text style={styles.price}>
                  ${(item.price * item.qty).toFixed(2)}
                </Text>

              </View>

            </View>

          </View>

        )}
      />

      {/* BUTTON */}
      <View style={styles.checkoutBox}>
        <TouchableOpacity
          style={[
            styles.checkoutBtn,
            items.length === 0 && { opacity: 0.5 }
          ]}
          disabled={items.length === 0}
          onPress={() => setShowCheckout(true)}
        >
          <Text style={styles.checkoutText}>
            Go To Checkout
          </Text>

          <View style={styles.priceBox}>
            <Text style={styles.checkoutPrice}>
              ${getTotal().toFixed(2)}
            </Text>
          </View>
        </TouchableOpacity>
      </View>

      {/* 🔥 BOTTOM SHEET */}
      {showCheckout && (
        <View style={styles.overlay}>

          {/* click ra ngoài để đóng */}
          <TouchableOpacity
            style={{ flex: 1 }}
            onPress={() => setShowCheckout(false)}
          />

          <View style={styles.sheet}>

            {/* header */}
            <View style={styles.sheetHeader}>
              <Text style={styles.sheetTitle}>Checkout</Text>

              <TouchableOpacity onPress={() => setShowCheckout(false)}>
                <Text style={{ fontSize: 22 }}>✕</Text>
              </TouchableOpacity>
            </View>

            {/* content */}
            <View style={styles.sheetRow}>
              <Text>Delivery</Text>
              <Text style={styles.gray}>Select Method</Text>
            </View>

            <View style={styles.divider} />

            <View style={styles.sheetRow}>
              <Text>Payment</Text>
              <Image source={require("../../assets/card.png")} style={{ width: 25, height: 20 }} />
            </View>

            <View style={styles.divider} />

            <View style={styles.sheetRow}>
              <Text>Promo Code</Text>
              <Text style={styles.gray}>Pick discount</Text>
            </View>

            <View style={styles.divider} />

            <View style={styles.sheetRow}>
              <Text style={{ fontWeight: "600" }}>Total Cost</Text>
              <Text style={{ fontWeight: "bold" }}>
                ${getTotal().toFixed(2)}
              </Text>
            </View>

            {/* button */}
            <TouchableOpacity style={styles.placeBtn}
             onPress={() => {
  const isSuccess = Math.random() < 0.5; // 50%

  if (isSuccess) {
    router.push("/order_accepted");
  } else {
    router.push("/error");
  }
}}
             >
              <Text style={{ color: "#fff", fontWeight: "600" }}>
                Place Order
              </Text>
            </TouchableOpacity>
            

          </View>
        </View>
      )}

    </View>
  );
}

const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: "#fff",
    padding: 20
  },

  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20
  },

  card: {
    flexDirection: "row",
    marginBottom: 20
  },

  image: {
    width: 70,
    height: 70,
    resizeMode: "contain",
    marginRight: 15
  },

  info: {
    flex: 1
  },

  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center"
  },

  name: {
    fontSize: 16,
    fontWeight: "600"
  },

  remove: {
    fontSize: 18,
    color: "#999"
  },

  desc: {
    color: "#888",
    marginVertical: 4
  },

  bottom: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center"
  },

  qtyBox: {
    flexDirection: "row",
    alignItems: "center"
  },

  qtyBtn: {
    width: 35,
    height: 35,
    borderWidth: 1,
    borderColor: "#ddd",
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center"
  },

  qty: {
    marginHorizontal: 15,
    fontSize: 16
  },

  price: {
    fontSize: 18,
    fontWeight: "bold"
  },

  checkoutBox: {
    position: "absolute",
    bottom: 20,
    left: 20,
    right: 20
  },

  checkoutBtn: {
    backgroundColor: "#53B175",
    padding: 20,
    borderRadius: 20,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center"
  },

  checkoutText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "600"
  },

  priceBox: {
    position: "absolute",
    right: 20,
    backgroundColor: "#489E67",
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 10
  },

  checkoutPrice: {
    color: "#fff",
    fontWeight: "bold"
  },

  /* BOTTOM SHEET */
  overlay: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: "rgba(0,0,0,0.3)"
  },

  sheet: {
    backgroundColor: "#fff",
    padding: 20,
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    minHeight: "50%"
  },

  sheetHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 20
  },

  sheetTitle: {
    fontSize: 18,
    fontWeight: "bold"
  },

  sheetRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingVertical: 15
  },

  divider: {
    height: 1,
    backgroundColor: "#eee"
  },

  gray: {
    color: "#888"
  },

  placeBtn: {
    marginTop: 20,
    backgroundColor: "#53B175",
    padding: 18,
    borderRadius: 20,
    alignItems: "center"
  }

});