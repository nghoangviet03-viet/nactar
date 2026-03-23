import { View, Text, StyleSheet, Image } from "react-native";
import { useEffect } from "react";
import { useRouter } from "expo-router";

export default function Splash() {
  const router = useRouter();

  useEffect(() => {
    const timer = setTimeout(() => {
      router.replace("/onboarding");
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.overlay}>
        <View style={styles.overlay}>
  <Image
    source={require("../assets/Group 1.png")}
  />
</View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#53B175",
    justifyContent: "center",
    alignItems: "center",
  },

  overlay: {
    alignItems: "center",
  },

  carrot: {
    width: 50,
    height: 50,
    marginBottom: 10,
    tintColor: "#fff", // nếu muốn icon trắng
  },

  logo: {
    fontSize: 40,
    color: "#fff",
    fontWeight: "bold",
  },

  sub: {
    color: "#fff",
    letterSpacing: 2,
  },
});