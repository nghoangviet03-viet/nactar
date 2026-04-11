import { useRouter } from "expo-router";
import { useState } from "react";
import {
  KeyboardAvoidingView,
  Platform,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { authStore } from "./authStore";

export default function VerificationScreen() {
  const router = useRouter();
  const [code, setCode] = useState("");

  const handleVerification = async () => {
    // Giả lập verification thành công (code = "1234")
    if (code === "1234") {
      try {
        // Tạo user data mẫu
        const userData = {
          id: "user_123",
          name: "Afsar Hossen",
          email: "Imshuvo97@gmail.com",
          phone: "+84",
          avatar: "../../assets/avatar.png"
        };

        // Tạo token mẫu
        const token = "auth_token_" + Date.now();

        // Lưu user data và token
        await authStore.saveUser(userData, token);

        // Navigate đến select location
        router.replace("/select location");
      } catch (error) {
        console.error("Error saving user data:", error);
        // Vẫn navigate nếu có lỗi lưu data
        router.replace("/select location");
      }
    } else {
      alert("Mã xác thực không đúng. Vui lòng thử lại!");
    }
  };

  return (
    <KeyboardAvoidingView
      style={{ flex: 1 }}
      behavior={Platform.OS === "ios" ? "padding" : "height"}
    >
      <View style={styles.container}>
        {/* BACK */}
        <TouchableOpacity onPress={() => router.back()}>
          <Text style={styles.back}>←</Text>
        </TouchableOpacity>

        {/* TITLE */}
        <Text style={styles.title}>Enter your 4-digit code</Text>

        {/* LABEL */}
        <Text style={styles.label}>Code</Text>

        {/* CODE INPUT */}
        <View style={styles.codeContainer}>
          <Text style={styles.codeText}>
            {code.padEnd(4, "-").split("").join(" ")}
          </Text>

          <TextInput
            value={code}
            onChangeText={(text) =>
              setCode(text.replace(/[^0-9]/g, "").slice(0, 4))
            }
            keyboardType="number-pad"
            style={styles.hiddenInput}
            autoFocus
          />
        </View>

        {/* RESEND */}
        <Text style={styles.resend}>Resend Code</Text>

        {/* BUTTON */}
        <TouchableOpacity
          style={styles.nextBtn}
          onPress={handleVerification}
        >
          <Text style={styles.nextText}>›</Text>
        </TouchableOpacity>
      </View>
    </KeyboardAvoidingView>
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
    marginBottom: 20,
  },

  title: {
    fontSize: 22,
    fontWeight: "bold",
    marginBottom: 20,
  },

  label: {
    color: "#999",
  },

  codeContainer: {
    borderBottomWidth: 1,
    borderColor: "#ccc",
    paddingBottom: 10,
    marginTop: 20,
  },

  codeText: {
    fontSize: 28,
    letterSpacing: 10,
  },

  hiddenInput: {
    position: "absolute",
    opacity: 0,
  },

  resend: {
    color: "#53B175",
    marginTop: 30,
  },

  nextBtn: {
    position: "absolute",
    bottom: 20,
    right: 20,
    backgroundColor: "#53B175",
    width: 60,
    height: 60,
    borderRadius: 30,
    justifyContent: "center",
    alignItems: "center",
  },

  nextText: {
    color: "#fff",
    fontSize: 30,
  },
});