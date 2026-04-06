import {
  View,
  Text,
  FlatList,
  StyleSheet,
  Image,
  TouchableOpacity
} from "react-native";

import { useEffect, useState } from "react";
import { getFavorites, subscribe } from "../favouriteStore.js";
import { addToCart } from "../cartStore";

export default function Favourite() {

  const [list, setList] = useState(getFavorites());

  useEffect(() => {
    subscribe(setList);
  }, []);

  return (

    <View style={styles.container}>

      <Text style={styles.title}>Favourite</Text>

      <FlatList
        data={list}
        keyExtractor={(item) => item.id.toString()}
        showsVerticalScrollIndicator={false}

        renderItem={({ item }) => (

          <View style={styles.item}>

            <Image
              source={item.image}
              style={styles.image}
            />

            <View style={styles.info}>
              <Text style={styles.name}>{item.name}</Text>
              <Text style={styles.sub}>1kg, Price</Text>
            </View>

            <View style={styles.right}>

              <Text style={styles.price}>${item.price}</Text>

              <TouchableOpacity
                style={styles.addBtn}
                onPress={() => addToCart({ ...item, qty: 1 })}
              >
                <Text style={styles.plus}>+</Text>
              </TouchableOpacity>

            </View>

          </View>

        )}
      />

      {/* ADD ALL TO CART */}

      <View style={styles.checkoutBox}>

        <TouchableOpacity style={styles.checkoutBtn}>

          <Text style={styles.checkoutText}>
            Add All To Cart
          </Text>

        </TouchableOpacity>

      </View>

    </View>

  );
}

const styles = StyleSheet.create({

  container:{
    flex:1,
    backgroundColor:"#fff",
    padding:20
  },

  title:{
    fontSize:24,
    fontWeight:"bold",
    marginBottom:20
  },

  item:{
    flexDirection:"row",
    alignItems:"center",
    paddingVertical:18,
    borderBottomWidth:1,
    borderColor:"#eee"
  },

  image:{
    width:70,
    height:70,
    resizeMode:"contain"
  },

  info:{
    flex:1,
    marginLeft:15
  },

  name:{
    fontSize:16,
    fontWeight:"600"
  },

  sub:{
    color:"#888",
    marginTop:4
  },

  right:{
    alignItems:"center"
  },

  price:{
    fontSize:16,
    fontWeight:"bold"
  },

  addBtn:{
    width:35,
    height:35,
    backgroundColor:"#53B175",
    borderRadius:10,
    justifyContent:"center",
    alignItems:"center",
    marginTop:8
  },

  plus:{
    color:"#fff",
    fontSize:18,
    fontWeight:"bold"
  },

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
    alignItems:"center"
  },

  checkoutText:{
    color:"#fff",
    fontSize:18,
    fontWeight:"600"
  }

});