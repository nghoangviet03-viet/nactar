import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
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

export default function LoginScreen() {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

  const handleLogin = async () => {
    // Validation
    if (!email.trim() || !password.trim()) {
      Alert.alert("Lỗi", "Vui lòng nhập email và mật khẩu");
      return;
    }

    try {
      // Lấy user data đã lưu
      const savedUser = await authStore.getUser();

      if (!savedUser) {
        Alert.alert("Lỗi", "Tài khoản chưa được đăng ký. Vui lòng đăng ký trước.");
        return;
      }

      const savedPassword = await authStore.getPassword();

      // Check email và password (đơn giản - trong thực tế nên verify với server)
      if (savedUser.email === email.trim().toLowerCase() && password === savedPassword) {
        // Tạo token mới cho session này
        const token = "auth_token_" + Date.now();

        // Lưu token
        await authStore.saveToken(token);

        Alert.alert(
          "Thành công",
          "Đăng nhập thành công!",
          [
            {
              text: "OK",
              onPress: () => router.replace("/(tabs)"),
            },
          ]
        );
      } else {
        Alert.alert("Lỗi", "Email hoặc mật khẩu không đúng");
      }
    } catch (error) {
      console.error("Error during login:", error);
      Alert.alert("Lỗi", "Có lỗi xảy ra khi đăng nhập. Vui lòng thử lại.");
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
      <Text style={styles.title}>Login</Text>
      <Text style={styles.subtitle}>
        Enter your emails and password
      </Text>

      {/* EMAIL */}
      <Text style={styles.label}>Email</Text>
      <TextInput
        style={styles.input}
        value={email}
        onChangeText={setEmail}
        placeholder="Enter your email"
        keyboardType="email-address"
        autoCapitalize="none"
      />

      {/* PASSWORD */}
      <Text style={styles.label}>Password</Text>
      <View style={styles.passwordRow}>
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

      {/* FORGOT */}
      <TouchableOpacity>
        <Text style={styles.forgot}>Forgot Password?</Text>
      </TouchableOpacity>

      {/* BUTTON */}
      <TouchableOpacity style={styles.button} onPress={handleLogin}>
        <Text style={styles.buttonText}>Log In</Text>
      </TouchableOpacity>

      {/* SIGNUP */}
      <Text style={styles.signup}>
        Don’t have an account?
        <Text> </Text>
        <Text style={styles.signupLink} onPress={() => router.push("/signup")}>
          Signup
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

  passwordRow: {
    flexDirection: "row",
    alignItems: "center",
    borderBottomWidth: 1,
    borderColor: "#ddd",
    marginBottom: 10,
  },

  eye: {
    fontSize: 18,
    color: "#888",
  },

  forgot: {
    textAlign: "right",
    marginBottom: 30,
    color: "#555",
  },

  button: {
    backgroundColor: "#53B175",
    padding: 16,
    borderRadius: 12,
    alignItems: "center",
    marginBottom: 20,
  },

  buttonText: {
    color: "#fff",
    fontWeight: "600",
    fontSize: 16,
  },

 signup: {
  textAlign: "center",
  color: "#333",
  marginTop: 20,
},

signupLink: {
  color: "#53B175",
  fontWeight: "600",
},
});