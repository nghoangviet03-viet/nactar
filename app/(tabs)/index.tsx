import {
  View,
  Text,
  StyleSheet,
  TextInput,
  Image,
  ScrollView,
  TouchableOpacity,
  Dimensions,
} from "react-native";
import { useRouter } from "expo-router";
import { useState } from "react";

const { width } = Dimensions.get("window");

const SLIDER = [
  require("../../assets/banner.png"),
  require("../../assets/banner.png"),
  require("../../assets/banner.png"),
];

export default function HomeScreen() {
  const router = useRouter();
  const [activeIndex, setActiveIndex] = useState(0);

  const onScroll = (event) => {
    const slide = Math.round(
      event.nativeEvent.contentOffset.x / (width - 40)
    );
    setActiveIndex(slide);
  };

  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      {/* HEADER */}
      <View style={styles.header}>
        <Image
          source={require("../../assets/carrot.png")}
          style={styles.logo}
        />
        <Text style={styles.location}>Dhaka, Banassre</Text>
      </View>

      {/* SEARCH */}
       <TouchableOpacity
        style={styles.searchBox}
        onPress={() => router.push("/search")}
      >
        <Text style={{ color: "#999" }}>Search Store</Text>
      </TouchableOpacity>

      {/* 🔥 SLIDER */}
      <ScrollView
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        onScroll={onScroll}
        scrollEventThrottle={16}
      >
        {SLIDER.map((img, index) => (
          <Image key={index} source={img} style={styles.banner} />
        ))}
      </ScrollView>

      {/* DOT */}
      <View style={styles.dots}>
        {SLIDER.map((_, index) => (
          <View
            key={index}
            style={[
              styles.dot,
              activeIndex === index && styles.activeDot,
            ]}
          />
        ))}
      </View>

      {/* EXCLUSIVE */}
      <View style={styles.sectionHeader}>
        <Text style={styles.sectionTitle}>Exclusive Offer</Text>
        <Text style={styles.seeAll}>See all</Text>
      </View>

      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {/* BANANA */}
        <View style={styles.card}>
          <Image
            source={require("../../assets/banana.png")}
            style={styles.cardImg}
          />
          <Text style={styles.cardTitle}>Organic Bananas</Text>
          <Text style={styles.cardSub}>1kg, Price</Text>

          <View style={styles.cardBottom}>
            <Text style={styles.price}>$4.99</Text>
            <TouchableOpacity style={styles.addBtn}>
              <Text style={styles.addText}>+</Text>
            </TouchableOpacity>
          </View>
        </View>

        {/* APPLE */}
        <TouchableOpacity
          style={styles.card}
          onPress={() => router.push("/product detail")}
        >
          <Image
            source={require("../../assets/apple.png")}
            style={styles.cardImg}
          />
          <Text style={styles.cardTitle}>Red Apple</Text>
          <Text style={styles.cardSub}>1kg, Price</Text>

          <View style={styles.cardBottom}>
            <Text style={styles.price}>$4.99</Text>
            <TouchableOpacity style={styles.addBtn}>
              <Text style={styles.addText}>+</Text>
            </TouchableOpacity>
          </View>
        </TouchableOpacity>
      </ScrollView>

      {/* GROCERIES */}
      <View style={styles.sectionHeader}>
        <Text style={styles.sectionTitle}>Groceries</Text>
        <Text style={styles.seeAll}>See all</Text>
      </View>

      <View style={styles.groceryRow}>
        <View style={styles.groceryCard}>
          <Image
            source={require("../../assets/Pulses.png")}
            style={styles.groceryImg}
          />
          <Text>Pulses</Text>
        </View>

        <View style={styles.groceryCard}>
          <Image
            source={require("../../assets/Rice.png")}
            style={styles.groceryImg}
          />
          <Text>Rice</Text>
        </View>
      </View>

      {/* GRID */}
      <View style={styles.grid}>
        <View style={styles.card}>
          <Image
            source={require("../../assets/beef-bone.png")}
            style={styles.cardImg}
          />
          <Text style={styles.cardTitle}>Beef Bone</Text>
          <Text style={styles.cardSub}>1kg, Price</Text>

          <View style={styles.cardBottom}>
            <Text style={styles.price}>$4.99</Text>
            <TouchableOpacity style={styles.addBtn}>
              <Text style={styles.addText}>+</Text>
            </TouchableOpacity>
          </View>
        </View>

        <View style={styles.card}>
          <Image
            source={require("../../assets/chicken.png")}
            style={styles.cardImg}
          />
          <Text style={styles.cardTitle}>Broiler Chicken</Text>
          <Text style={styles.cardSub}>1kg, Price</Text>

          <View style={styles.cardBottom}>
            <Text style={styles.price}>$4.99</Text>
            <TouchableOpacity style={styles.addBtn}>
              <Text style={styles.addText}>+</Text>
            </TouchableOpacity>
          </View>
        </View>
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

  header: {
    alignItems: "center",
    marginTop: 10,
  },

  logo: {
    width: 30,
    height: 30,
  },

  location: {
    marginTop: 5,
    fontWeight: "500",
  },

  searchBox: {
    backgroundColor: "#f2f2f2",
    padding: 12,
    borderRadius: 12,
    marginVertical: 15,
  },

  banner: {
    width: width - 40,
    height: 130,
    borderRadius: 15,
    marginRight: 10,
  },

  dots: {
    flexDirection: "row",
    justifyContent: "center",
    marginBottom: 20,
  },

  dot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: "#ccc",
    marginHorizontal: 4,
  },

  activeDot: {
    backgroundColor: "#53B175",
    width: 12,
  },

  sectionHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 10,
  },

  sectionTitle: {
    fontSize: 18,
    fontWeight: "bold",
  },

  seeAll: {
    color: "#53B175",
  },

  card: {
    width: 160,
    backgroundColor: "#fff",
    borderRadius: 15,
    padding: 12,
    marginRight: 15,
    borderWidth: 1,
    borderColor: "#eee",
  },

  cardImg: {
    width: "100%",
    height: 90,
    resizeMode: "contain",
    alignSelf: "center",
  },

  cardTitle: {
    fontWeight: "600",
    marginTop: 10,
  },

  cardSub: {
    color: "#999",
    fontSize: 12,
  },

  cardBottom: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 10,
  },

  price: {
    fontWeight: "bold",
  },

  addBtn: {
    backgroundColor: "#53B175",
    width: 32,
    height: 32,
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
  },

  addText: {
    color: "#fff",
    fontSize: 18,
  },

  groceryRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 20,
  },

  groceryCard: {
    width: "48%",
    backgroundColor: "#f5e6d8",
    padding: 15,
    borderRadius: 15,
    alignItems: "center",
  },

  groceryImg: {
    width: 60,
    height: 60,
    resizeMode: "contain",
    marginBottom: 10,
  },

  grid: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
});