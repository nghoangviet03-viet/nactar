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

export default function SignUpScreen() {
  const [showPassword, setShowPassword] = useState(false);

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
        defaultValue="Afsar Hossen Shuvo"
      />

      {/* EMAIL */}
      <Text style={styles.label}>Email</Text>
      <View style={styles.inputRow}>
        <TextInput
          style={{ flex: 1 }}
          defaultValue="imshuvo97@gmail.com"
        />
        <Ionicons name="checkmark" size={22} color="#53B175" />
      </View>

      {/* PASSWORD */}
      <Text style={styles.label}>Password</Text>
      <View style={styles.inputRow}>
        <TextInput
          style={{ flex: 1 }}
          secureTextEntry={!showPassword}
          defaultValue="12345678"
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
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Sing Up</Text>
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
});