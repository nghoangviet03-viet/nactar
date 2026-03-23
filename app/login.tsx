import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Image,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useState } from "react";
import { useRouter } from "expo-router";
export default function LoginScreen() {
  const [showPassword, setShowPassword] = useState(false);
  const router = useRouter();

  return (
 
    <View style={styles.container}>
      {/* LOGO */}
      <Image
        source={require("../assets/carrot.png")} 
        style={styles.logo}
        resizeMode="contain"
      />

      {/* TITLE */}
      <Text style={styles.title}>Loging</Text>
      <Text style={styles.subtitle}>
        Enter your emails and password
      </Text>

      {/* EMAIL */}
      <Text style={styles.label}>Email</Text>
      <TextInput
        style={styles.input}
        defaultValue="nghoangviet03@gmail.com"
      />

    <View style={styles.passwordRow}>
  <TextInput
    style={{ flex: 1 }}
    secureTextEntry={!showPassword}
    defaultValue="tưởng tày nhưng không"  />

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
      <TouchableOpacity style={styles.button}>
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