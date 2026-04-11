import { Ionicons } from "@expo/vector-icons";
import { router } from "expo-router";
import { useState } from "react";
import {
  Alert,
  Image,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { authStore } from "./authStore";

export default function SignUpScreen() {
  const [showPassword, setShowPassword] = useState(false);
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSignUp = async () => {
    // Validation
    if (!username.trim() || !email.trim() || !password.trim()) {
      Alert.alert("Lỗi", "Vui lòng điền đầy đủ thông tin");
      return;
    }

    if (password.length < 6) {
      Alert.alert("Lỗi", "Mật khẩu phải có ít nhất 6 ký tự");
      return;
    }

    try {
      // Tạo user data
      const userData = {
        id: "user_" + Date.now(),
        name: username.trim(),
        email: email.trim().toLowerCase(),
        avatar: "../../assets/avatar.png",
        createdAt: new Date().toISOString(),
      };

      // Tạo token
      const token = "auth_token_" + Date.now();

      // Lưu user data, mật khẩu và token
      await authStore.saveUser(userData, password, token);

      Alert.alert(
        "Thành công",
        "Đăng ký thành công!",
        [
          {
            text: "OK",
            onPress: () => router.replace("/(tabs)"),
          },
        ]
      );
    } catch (error) {
      console.error("Error during signup:", error);
      Alert.alert("Lỗi", "Có lỗi xảy ra khi đăng ký. Vui lòng thử lại.");
    }
  };

  return (
    <View style={styles.container}>
      {/* LOGO */}
      <Image
        source={require("../assets/carrot.png")}
        style={styles.logo}
        resizeMode="contain"
      />

      {/* TITLE */}
      <Text style={styles.title}>Sign Up</Text>
      <Text style={styles.subtitle}>
        Enter your credentials to continue
      </Text>

      {/* USERNAME */}
      <Text style={styles.label}>Username</Text>
      <TextInput
        style={styles.input}
        value={username}
        onChangeText={setUsername}
        placeholder="Enter your username"
      />

      {/* EMAIL */}
      <Text style={styles.label}>Email</Text>
      <View style={styles.inputRow}>
        <TextInput
          style={{ flex: 1 }}
          value={email}
          onChangeText={setEmail}
          placeholder="Enter your email"
          keyboardType="email-address"
          autoCapitalize="none"
        />
        <Ionicons name="checkmark" size={22} color="#53B175" />
      </View>

      {/* PASSWORD */}
      <Text style={styles.label}>Password</Text>
      <View style={styles.inputRow}>
        <TextInput
          style={{ flex: 1 }}
          value={password}
          onChangeText={setPassword}
          placeholder="Enter your password"
          secureTextEntry={!showPassword}
        />

        <TouchableOpacity onPress={() => setShowPassword(!showPassword)}>
          <Ionicons
            name={showPassword ? "eye-outline" : "eye-off-outline"}
            size={22}
            color="#888"
          />
        </TouchableOpacity>
      </View>

      {/* TERMS */}
      <Text style={styles.terms}>
        By continuing you agree to our{" "}
        <Text style={styles.link}>Terms of Service</Text> and{" "}
        <Text style={styles.link}>Privacy Policy</Text>.
      </Text>

      {/* BUTTON */}
      <TouchableOpacity
        style={styles.button}
        onPress={handleSignUp}
      >
        <Text style={styles.buttonText}>Sign Up</Text>
      </TouchableOpacity>

      {/* LOGIN LINK */}
      <Text style={styles.login}>
        Already have an account?{" "}
        <Text style={styles.loginLink} onPress={() => router.push("/login")}>
          Login
        </Text>
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#fff",
  },

  logo: {
    width: 50,
    height: 50,
    alignSelf: "center",
    marginTop: 40,
    marginBottom: 30,
  },

  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 5,
  },

  subtitle: {
    color: "#888",
    marginBottom: 30,
  },

  label: {
    color: "#999",
    marginBottom: 8,
  },

  input: {
    borderBottomWidth: 1,
    borderColor: "#ddd",
    paddingVertical: 10,
    marginBottom: 20,
  },

  inputRow: {
    flexDirection: "row",
    alignItems: "center",
    borderBottomWidth: 1,
    borderColor: "#ddd",
    marginBottom: 20,
    paddingVertical: 10,
  },

  terms: {
    color: "#777",
    marginTop: 10,
    lineHeight: 20,
  },

  link: {
    color: "#53B175",
  },

  button: {
    backgroundColor: "#53B175",
    padding: 16,
    borderRadius: 12,
    alignItems: "center",
    marginTop: 30,
  },

  buttonText: {
    color: "#fff",
    fontWeight: "600",
    fontSize: 16,
  },

  login: {
    textAlign: "center",
    marginTop: 20,
    color: "#777",
  },

  loginLink: {
    color: "#53B175",
    fontWeight: "600",
  },
});