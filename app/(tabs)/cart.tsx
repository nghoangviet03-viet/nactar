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

export default function Cart() {

  const [items, setItems] = useState([]);

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
  return items.reduce((sum, item) => {
    return sum + item.price * item.qty;
  }, 0);
};

  return (
    <View style={styles.container}>

      <Text style={styles.title}>My Cart</Text>

      <FlatList
        data={items}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item, index }) => (

          <View style={styles.card}>

            <Image
              source={item.image}
              style={styles.image}
            />

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
<View style={styles.checkoutBox}>

  <TouchableOpacity style={styles.checkoutBtn}>

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
    </View>
  );
}

const styles = StyleSheet.create({
  checkoutBox:{
  position:"absolute",
  bottom:20,
  left:20,
  right:20
},

checkoutBtn:{
  backgroundColor:"#53B175",
  padding:20,
  borderRadius:20,
  flexDirection:"row",
  justifyContent:"center",
  alignItems:"center"
},

checkoutText:{
  color:"#fff",
  fontSize:18,
  fontWeight:"600"
},

priceBox:{
  position:"absolute",
  right:20,
  backgroundColor:"#489E67",
  paddingHorizontal:10,
  paddingVertical:5,
  borderRadius:10
},

checkoutPrice:{
  color:"#fff",
  fontWeight:"bold"
},

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
  }

});