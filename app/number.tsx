import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  KeyboardAvoidingView,
  Platform,
} from "react-native";
import { useRouter } from "expo-router";

export default function NumberScreen() {
  const router = useRouter();

  return (
    <KeyboardAvoidingView
      style={{ flex: 1 }}
      behavior={Platform.OS === "ios" ? "padding" : "height"}
    >
      <View style={styles.container}>
        {/* HEADER */}
        <TouchableOpacity onPress={() => router.back()}>
          <Text style={styles.back}>←</Text>
        </TouchableOpacity>

        {/* TITLE */}
        <Text style={styles.title}>Enter your mobile number</Text>

        {/* LABEL */}
        <Text style={styles.label}>Mobile Number</Text>

        {/* INPUT */}
        <View style={styles.inputContainer}>
          <Text style={styles.flag}>🇻🇳</Text>
          <Text style={styles.code}>+84</Text>
          <TextInput
            keyboardType="phone-pad"
            style={styles.input}
            autoFocus
          />
        </View>

        {/* BUTTON */}
        <TouchableOpacity
          style={styles.nextBtn}
          onPress={() => router.push("/verification")}
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
    marginBottom: 10,
  },

  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    borderBottomWidth: 1,
    borderColor: "#ccc",
    paddingBottom: 10,
  },

  flag: {
    fontSize: 18,
    marginRight: 8,
  },

  code: {
    marginRight: 10,
    fontSize: 16,
  },

  input: {
    flex: 1,
    fontSize: 16,
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