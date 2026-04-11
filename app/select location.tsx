import { useRouter } from "expo-router";
import {
    Image,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
} from "react-native";

export default function SelectLocationScreen() {
  const router = useRouter();

  return (
    <View style={styles.container}>
      {/* BACK */}
      <TouchableOpacity onPress={() => router.back()}>
        <Text style={styles.back}>←</Text>
      </TouchableOpacity>

      {/* IMAGE */}
      <Image
        source={require("../assets/map.png")}
        style={styles.image}
        resizeMode="contain"
      />

      {/* TITLE */}
      <Text style={styles.title}>Select Your Location</Text>

      {/* DESC */}
      <Text style={styles.desc}>
        Switch on your location to stay in tune with{"\n"}
        what’s happening in your area
      </Text>

      {/* FORM */}
      <View style={styles.form}>
        {/* ZONE */}
        <Text style={styles.label}>Your Zone</Text>
        <TouchableOpacity style={styles.input}>
          <Text style={styles.inputText}>Hà Nội</Text>
          <Text>⌄</Text>
        </TouchableOpacity>

        {/* AREA */}
        <Text style={styles.label}>Your Area</Text>
        <TouchableOpacity style={styles.input}>
          <Text style={styles.placeholder}>cầu giấy</Text>
          <Text>⌄</Text>
        </TouchableOpacity>
      </View>

      {/* BUTTON */}
      <TouchableOpacity style={styles.button} onPress={() => router.replace("/(tabs)")}>
        <Text style={styles.buttonText}>Submit</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#fff",
  },

  back: {
    fontSize: 22,
    marginBottom: 10,
  },

  image: {
    width: "100%",
    height: 180,
    marginVertical: 20,
  },

  title: {
    fontSize: 22,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 10,
  },

  desc: {
    textAlign: "center",
    color: "#888",
    marginBottom: 30,
  },

  form: {
    marginTop: 10,
  },

  label: {
    color: "#999",
    marginBottom: 8,
  },

  input: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    borderBottomWidth: 1,
    borderColor: "#ddd",
    paddingVertical: 12,
    marginBottom: 20,
  },

  inputText: {
    fontSize: 16,
  },

  placeholder: {
    fontSize:16,
  },

  button: {
    backgroundColor: "#53B175",
    padding: 16,
    borderRadius: 12,
    alignItems: "center",
    marginTop: "auto",
  },

  buttonText: {
    color: "#fff",
    fontWeight: "600",
    fontSize: 16,
  },
});