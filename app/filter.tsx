import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity
} from "react-native";
import { useState } from "react";
import { useRouter } from "expo-router";

export default function Filter() {
  const router = useRouter();
  const [selected, setSelected] = useState("");

  const categories = ["Egg", "Pasta", "Fruit"];

  return (
    <View style={styles.container}>

      <Text style={styles.title}>Filters</Text>

      <Text style={styles.section}>Categories</Text>

      {categories.map((item) => (
        <TouchableOpacity
          key={item}
          style={styles.option}
          onPress={() => setSelected(item)}
        >
          <View style={[
            styles.checkbox,
            selected === item && styles.checked
          ]} />

          <Text style={styles.text}>{item}</Text>
        </TouchableOpacity>
      ))}

      <TouchableOpacity
        style={styles.btn}
        onPress={() =>
          router.push({
            pathname: "/search",
            params: { category: selected }
          })
        }
      >
        <Text style={styles.btnText}>Apply Filter</Text>
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

  title: {
    fontSize: 22,
    fontWeight: "bold",
    marginBottom: 20
  },

  section: {
    fontSize: 18,
    marginBottom: 10
  },

  option: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 15
  },

  checkbox: {
    width: 20,
    height: 20,
    borderWidth: 1,
    borderColor: "#ccc",
    marginRight: 10,
    borderRadius: 5
  },

  checked: {
    backgroundColor: "#53B175"
  },

  text: {
    fontSize: 16
  },

  btn: {
    marginTop: 30,
    backgroundColor: "#53B175",
    padding: 15,
    borderRadius: 15,
    alignItems: "center"
  },

  btnText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold"
  }
});