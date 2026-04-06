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
import { addToFavorite } from "./favouriteStore.js";

export default function ProductDetail() {

  const router = useRouter();

  const [qty, setQty] = useState(1);
  const [liked, setLiked] = useState(false);

  const product = {
    id: 1,
    name: "Naturel Red Apple",
    price: 4.99,
    image: require("../assets/apple.png"),
  };

  const toggleFavorite = () => {

    setLiked(!liked);

    if (!liked) {
      addToFavorite(product);
    }

  };

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
          source={product.image}
          style={styles.image}
        />
      </View>

      {/* NAME */}
      <View style={styles.rowBetween}>

        <View>
          <Text style={styles.title}>
            {product.name}
          </Text>

          <Text style={styles.sub}>
            1kg, Price
          </Text>
        </View>

        {/* HEART */}
        <TouchableOpacity onPress={toggleFavorite}>
          <Text
            style={[
              styles.heart,
              { color: liked ? "red" : "#999" }
            ]}
          >
            ♥
          </Text>
        </TouchableOpacity>

      </View>

      {/* QUANTITY */}
      <View style={styles.qtyRow}>

        <View style={styles.qtyBox}>

          <TouchableOpacity
            onPress={() => setQty(Math.max(1, qty - 1))}
          >
            <Text style={styles.qtyBtn}>−</Text>
          </TouchableOpacity>

          <Text style={styles.qtyText}>
            {qty}
          </Text>

          <TouchableOpacity
            onPress={() => setQty(qty + 1)}
          >
            <Text style={[styles.qtyBtn,{color:"#53B175"}]}>
              +
            </Text>
          </TouchableOpacity>

        </View>

        <Text style={styles.price}>
          ${(product.price * qty).toFixed(2)}
        </Text>

      </View>

      {/* DESCRIPTION */}
      <View style={styles.section}>

        <Text style={styles.sectionTitle}>
          Product Detail
        </Text>

        <Text style={styles.desc}>
          Apples are nutritious. Apples may be good for weight loss.
          Apples may be good for your heart.
        </Text>

      </View>

      {/* BUTTON */}
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>
          Add To Basket
        </Text>
      </TouchableOpacity>

    </ScrollView>

  );
}

const styles = StyleSheet.create({

  container:{
    flex:1,
    backgroundColor:"#fff",
    padding:20
  },

  header:{
    flexDirection:"row",
    justifyContent:"space-between",
    marginBottom:10
  },

  icon:{
    fontSize:22
  },

  imageBox:{
    backgroundColor:"#f5f5f5",
    borderRadius:20,
    padding:20,
    marginBottom:20
  },

  image:{
    width:"100%",
    height:200,
    resizeMode:"contain"
  },

  rowBetween:{
    flexDirection:"row",
    justifyContent:"space-between",
    alignItems:"center"
  },

  title:{
    fontSize:22,
    fontWeight:"bold"
  },

  sub:{
    color:"#999",
    marginTop:5
  },

  heart:{
    fontSize:26
  },

  qtyRow:{
    flexDirection:"row",
    justifyContent:"space-between",
    alignItems:"center",
    marginVertical:20
  },

  qtyBox:{
    flexDirection:"row",
    alignItems:"center",
    gap:15
  },

  qtyBtn:{
    fontSize:22
  },

  qtyText:{
    fontSize:18,
    borderWidth:1,
    paddingHorizontal:15,
    paddingVertical:5,
    borderRadius:10
  },

  price:{
    fontSize:22,
    fontWeight:"bold"
  },

  section:{
    marginBottom:20
  },

  sectionTitle:{
    fontWeight:"bold",
    fontSize:16,
    marginBottom:5
  },

  desc:{
    color:"#666",
    lineHeight:20
  },

  button:{
    backgroundColor:"#53B175",
    padding:18,
    borderRadius:20,
    marginTop:30,
    alignItems:"center"
  },

  buttonText:{
    color:"#fff",
    fontSize:16,
    fontWeight:"bold"
  }

});