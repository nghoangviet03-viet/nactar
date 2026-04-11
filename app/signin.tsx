import { useRouter } from "expo-router";
import {
    Image,
    StyleSheet,
    Text,
    TouchableOpacity,
    View
} from "react-native";

export default function SignIn() {
  const router = useRouter();

  return (
    
    <View style={styles.content}>
        
      {/* TITLE */}
      <Text style={styles.title}>
        Get your groceries{"\n"}with nectar
      </Text>

      {/* INPUT */}
      <TouchableOpacity
        style={styles.inputContainer}
        onPress={() => router.push("/number")}
      >
        <View style={styles.leftInput}>
          <Text style={styles.flag}>🇻🇳</Text>
          <Text style={styles.code}>+84</Text>
        </View>

        <Text style={styles.arrow}>›</Text>
      </TouchableOpacity>

      {/* OR */}
      <View style={styles.orContainer}>
        <View style={styles.line} />
        <Text style={styles.orText}>Or connect with social media</Text>
        <View style={styles.line} />
      </View>

      {/* GOOGLE (ẢNH = BUTTON) */}
      <TouchableOpacity
        style={styles.socialBtn}
        onPress={() => console.log("Google login")}
      >
        <Image
          source={require("../assets/google.png")}
          style={styles.fullImage}
        />
      </TouchableOpacity>

      {/* FACEBOOK (ẢNH = BUTTON) */}
      <TouchableOpacity
        style={styles.socialBtn}
        onPress={() => console.log("Facebook login")}
      >
        <Image
          source={require("../assets/facebook.png")}
          style={styles.fullImage}
        />
      </TouchableOpacity>

      {/* ALTERNATIVE LOGIN */}
      <View style={styles.alternativeContainer}>
        <Text style={styles.alternativeText}>Or use email login</Text>
        <TouchableOpacity
          style={styles.altBtn}
          onPress={() => router.push("/login")}
        >
          <Text style={styles.altBtnText}>Login with Email</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
content: {
  flex: 1,
  padding: 25,
  backgroundColor: "#fff",
  justifyContent: "center",
},
  title: {
    fontSize: 26,
    fontWeight: "bold",
    marginBottom: 30,
    lineHeight: 34,
  },

  /* INPUT */
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    borderBottomWidth: 1,
    borderColor: "#ddd",
    paddingVertical: 15,
    marginBottom: 30,
  },

  leftInput: {
    flexDirection: "row",
    alignItems: "center",
  },

  flag: {
    fontSize: 18,
    marginRight: 10,
  },

  code: {
    fontSize: 16,
    color: "#000",
  },

  arrow: {
    fontSize: 22,
    color: "#ccc",
  },

  /* OR */
  orContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 25,
  },

  line: {
    flex: 1,
    height: 1,
    backgroundColor: "#eee",
  },

  orText: {
    marginHorizontal: 10,
    color: "#999",
    fontSize: 13,
  },

  /* SOCIAL BUTTON = IMAGE */
  socialBtn: {
    marginBottom: 15,
    borderRadius: 15,
    overflow: "hidden",
    elevation: 3, // shadow Android
  },

  fullImage: {
    width: "100%",
    height: 60,
    resizeMode: "cover", // đổi thành "contain" nếu bị cắt
  },

  /* ALTERNATIVE LOGIN */
  alternativeContainer: {
    marginTop: 20,
    alignItems: "center",
  },

  alternativeText: {
    color: "#999",
    fontSize: 14,
    marginBottom: 15,
  },

  altBtn: {
    backgroundColor: "#53B175",
    paddingHorizontal: 30,
    paddingVertical: 12,
    borderRadius: 25,
  },

  altBtnText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "600",
  },
});