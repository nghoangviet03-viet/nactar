import {
  View,
  Text,
  TextInput,
  FlatList,
  StyleSheet,
  Image,
  TouchableOpacity
} from "react-native";
import { useState } from "react";
import { products } from "./data.js";
import { addToCart } from "./cartStore.js";
import { useRouter, useLocalSearchParams } from "expo-router";

export default function Search() {
  const [keyword, setKeyword] = useState("");
  const router = useRouter();
  const params = useLocalSearchParams();

  const category = params.category || "";

  // 🔥 FILTER LOGIC
  const filtered = products.filter((item) => {
    const matchKeyword = item.name
      .toLowerCase()
      .includes(keyword.toLowerCase());

    const matchCategory = category
      ? item.category === category
      : true;

    return matchKeyword && matchCategory;
  });

  return (
    <View style={styles.container}>

      <Text style={styles.title}>Search</Text>

      {/* SEARCH + FILTER */}
      <View style={{ flexDirection: "row", marginBottom: 20 }}>
        <TextInput
          placeholder="Search product..."
          style={[styles.search, { flex: 1 }]}
          value={keyword}
          onChangeText={setKeyword}
        />

        {/* 🔥 BUTTON FILTER */}
        <TouchableOpacity
  style={styles.filterBtn}
  onPress={() => router.push("/filter")}
>
  <Image
    source={require("../assets/filter.png")}
    style={{ width: 20, height: 20 }}
  />
</TouchableOpacity>
      </View>

      <FlatList
        data={filtered}
        keyExtractor={(item) => item.id.toString()}
        numColumns={2}
        columnWrapperStyle={{ justifyContent: "space-between" }}
        showsVerticalScrollIndicator={false}
        renderItem={({ item }) => (
          <View style={styles.card}>

            <Image source={item.image} style={styles.image} />

            <Text style={styles.name}>{item.name}</Text>

            <Text style={styles.weight}>Category: {item.category}</Text>

            <View style={styles.bottom}>
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
    </View>
  );
}

const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingHorizontal: 20,
    paddingTop: 10
  },

  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 15
  },

  search: {
    backgroundColor: "#F2F3F2",
    padding: 12,
    borderRadius: 15
  },

  filterBtn: {
    marginLeft: 10,
    backgroundColor: "#F2F3F2",
    padding: 12,
    borderRadius: 15,
    justifyContent: "center",
    alignItems: "center"
  },

  card: {
    width: "48%",
    backgroundColor: "#fff",
    borderRadius: 20,
    padding: 15,
    marginBottom: 20,
    borderWidth: 1,
    borderColor: "#E2E2E2"
  },

  image: {
    width: "100%",
    height: 90,
    resizeMode: "contain",
    marginBottom: 10
  },

  name: {
    fontSize: 15,
    fontWeight: "600"
  },

  weight: {
    fontSize: 13,
    color: "#7C7C7C",
    marginVertical: 5
  },

  bottom: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 5
  },

  price: {
    fontSize: 16,
    fontWeight: "bold"
  },

  addBtn: {
    width: 35,
    height: 35,
    backgroundColor: "#53B175",
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center"
  },

  plus: {
    color: "#fff",
    fontSize: 20,
    fontWeight: "bold"
  }

});