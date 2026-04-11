import { useRouter } from "expo-router";
import { useEffect } from "react";
import { Image, StyleSheet, View } from "react-native";
import { authStore } from "./authStore";
import { loadCart } from "./cartStore";

export default function Splash() {
  const router = useRouter();

  useEffect(() => {
    const initializeApp = async () => {
      try {
        // Load cart data
        await loadCart();

        // Check authentication status
        const isLoggedIn = await authStore.isLoggedIn();
        const isRegistered = await authStore.isRegistered();

        // Wait for splash screen animation
        setTimeout(() => {
          if (isLoggedIn) {
            // User đã login, redirect trực tiếp đến main app
            router.replace("/(tabs)");
          } else if (isRegistered) {
            // User đã đăng ký nhưng chưa login, vào login
            router.replace("/login");
          } else {
            // User chưa đăng ký, vào sign up flow
            router.replace("/onboarding");
          }
        }, 2000);
      } catch (error) {
        console.error("Error initializing app:", error);
        // Nếu có lỗi, mặc định vào onboarding
        setTimeout(() => {
          router.replace("/onboarding");
        }, 2000);
      }
    };

    initializeApp();
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