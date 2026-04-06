import {
  View,
  Text,
  StyleSheet,
  TextInput,
  Image,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import { useRouter } from "expo-router";

export default function Explore() {
  const router = useRouter();

  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      {/* TITLE */}
      <Text style={styles.title}>Find Products</Text>

      {/* SEARCH */}
     <TouchableOpacity
  style={styles.searchBox}
  onPress={() => router.push("/search")}
>
  <Text style={{ color: "#999" }}>Search Store</Text>
</TouchableOpacity>

      {/* GRID */}
      <View style={styles.grid}>
        <View style={[styles.card, { backgroundColor: "#E8F5E9", borderColor: "#53B175" }]}>
          <Image source={require("../../assets/fruits.png")} style={styles.image} />
          <Text style={styles.text}>Fresh Fruits & Vegetable</Text>
        </View>

        <View style={[styles.card, { backgroundColor: "#FFF3E0", borderColor: "#F8A44C" }]}>
          <Image source={require("../../assets/oil.png")} style={styles.image} />
          <Text style={styles.text}>Cooking Oil & Ghee</Text>
        </View>

        <View style={[styles.card, { backgroundColor: "#FCE4EC", borderColor: "#F06292" }]}>
          <Image source={require("../../assets/meat.png")} style={styles.image} />
          <Text style={styles.text}>Meat & Fish</Text>
        </View>

        <View style={[styles.card, { backgroundColor: "#F3E5F5", borderColor: "#BA68C8" }]}>
          <Image source={require("../../assets/bakery.png")} style={styles.image} />
          <Text style={styles.text}>Bakery & Snacks</Text>
        </View>

        <View style={[styles.card, { backgroundColor: "#FFFDE7", borderColor: "#FBC02D" }]}>
          <Image source={require("../../assets/dairy.png")} style={styles.image} />
          <Text style={styles.text}>Dairy & Eggs</Text>
        </View>

        {/* 🔥 BEVERAGES - CÓ BUTTON */}
        <TouchableOpacity
          style={[styles.card, { backgroundColor: "#E3F2FD", borderColor: "#64B5F6" }]}
          onPress={() => router.push("/Beverages")}
        >
          <Image
            source={require("../../assets/beverages.png")}
            style={styles.image}
          />
          <Text style={styles.text}>Beverages</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingHorizontal: 20,
  },

  title: {
    fontSize: 22,
    fontWeight: "bold",
    textAlign: "center",
    marginTop: 20,
    marginBottom: 15,
  },

  searchBox: {
    backgroundColor: "#f2f2f2",
    padding: 12,
    borderRadius: 15,
    marginBottom: 20,
  },

  grid: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
  },

  card: {
    width: "48%",
    borderRadius: 20,
    padding: 15,
    marginBottom: 15,
    alignItems: "center",
    borderWidth: 1.5,
  },

  image: {
    width: 90,
    height: 90,
    resizeMode: "contain",
    marginBottom: 10,
  },

  text: {
    textAlign: "center",
    fontWeight: "600",
    marginBottom: 8,
  },

  /* 🔥 BUTTON */
  button: {
    backgroundColor: "#53B175",
    paddingHorizontal: 15,
    paddingVertical: 6,
    borderRadius: 10,
    marginTop: 5,
  },

  buttonText: {
    color: "#fff",
    fontSize: 12,
    fontWeight: "500",
  },
});