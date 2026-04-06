import { View, Text, StyleSheet, Image, FlatList, TouchableOpacity } from "react-native";

const DATA = [
  {
    id: "1",
    name: "Diet Coke",
    size: "355ml",
    price: "$1.99",
    image: require("../assets/diet-coke.png"),
  },
  {
    id: "2",
    name: "Sprite Can",
    size: "325ml",
    price: "$1.50",
    image: require("../assets/sprite.png"), // 
  },
  {
    id: "3",
    name: "Apple Juice",
    size: "2L",
    price: "$15.99",
    image: require("../assets/apple.png"), // 
  },
  {
    id: "4",
    name: "Orange Juice",
    size: "2L",
    price: "$15.99",
    image: require("../assets/orange.png"), // 
  },
  {
    id: "5",
    name: "Coca Cola Can",
    size: "325ml",
    price: "$4.99",
    image: require("../assets/coca.png"), // 
  },
  {
    id: "6",
    name: "Pepsi Can",
    size: "330ml",
    price: "$4.99",
    image: require("../assets/pepsi.png"), //
  },
];

export default function BeveragesScreen() {
  const renderItem = ({ item }) => (
    <View style={styles.card}>
      <Image source={item.image} style={styles.image} />

      <Text style={styles.name}>{item.name}</Text>
      <Text style={styles.size}>{item.size}, Price</Text>

      <View style={styles.bottomRow}>
        <Text style={styles.price}>{item.price}</Text>

        <TouchableOpacity style={styles.addBtn}>
          <Text style={styles.plus}>+</Text>
        </TouchableOpacity>
      </View>
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Beverages</Text>

      <FlatList
        data={DATA}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
        numColumns={2}
        columnWrapperStyle={{ justifyContent: "space-between" }}
        contentContainerStyle={{ padding: 16 }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F5F5F5",
  },
  header: {
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center",
    marginTop: 40,
    marginBottom: 10,
  },
  card: {
    backgroundColor: "#fff",
    borderRadius: 16,
    padding: 12,
    marginBottom: 16,
    width: "48%",
    elevation: 2,
  },
  image: {
    width: 80,
    height: 80,
    resizeMode: "contain",
    alignSelf: "center",
    marginBottom: 10,
  },
  name: {
    fontSize: 14,
    fontWeight: "600",
  },
  size: {
    fontSize: 12,
    color: "#888",
    marginBottom: 8,
  },
  bottomRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  price: {
    fontSize: 16,
    fontWeight: "bold",
  },
  addBtn: {
    backgroundColor: "#4CAF50",
    width: 36,
    height: 36,
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  plus: {
    color: "#fff",
    fontSize: 20,
    fontWeight: "bold",
  },
});