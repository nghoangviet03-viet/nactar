import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import React, { useEffect, useState } from 'react';
import {
  Alert,
  Image,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { authStore } from '../authStore';
import { clearCart } from '../cartStore';

const menuItems = [
  { icon: 'bag-outline', label: 'Orders' },
  { icon: 'card-outline', label: 'My Details' },
  { icon: 'location-outline', label: 'Delivery Address' },
  { icon: 'wallet-outline', label: 'Payment Methods' },
  { icon: 'pricetag-outline', label: 'Promo Code' },
  { icon: 'notifications-outline', label: 'Notifications' },
  { icon: 'help-circle-outline', label: 'Help' },
  { icon: 'information-circle-outline', label: 'About' },
];

export default function AccountScreen() {
  const router = useRouter();
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    const loadUserData = async () => {
      try {
        const user = await authStore.getUser();
        setUserData(user);
      } catch (error) {
        console.error("Error loading user data:", error);
      }
    };

    loadUserData();
  }, []);

  const handleMenuPress = (label) => {
    if (label === 'Orders') {
      router.push('/orders');
    }
    // Add other menu handlers as needed
  };

  const handleLogout = async () => {
    Alert.alert(
      "Đăng xuất",
      "Bạn có chắc chắn muốn đăng xuất?",
      [
        {
          text: "Hủy",
          style: "cancel"
        },
        {
          text: "Đăng xuất",
          style: "destructive",
          onPress: async () => {
            try {
              // Xóa toàn bộ dữ liệu authentication
              await authStore.logout();

              // Xóa cart data
              clearCart();

              // Navigate về signin screen
              router.replace('/signin');
            } catch (error) {
              console.error("Error during logout:", error);
              Alert.alert("Lỗi", "Có lỗi xảy ra khi đăng xuất. Vui lòng thử lại.");
            }
          }
        }
      ]
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={{ paddingBottom: 30 }}>
        
        {/* PROFILE */}
        <View style={styles.profileRow}>
          <View style={styles.avatarContainer}>
            <Image
              source={require('../../assets/avatar.png')}
              style={styles.avatar}
            />
          </View>

          <View style={styles.profileInfo}>
            <View style={styles.nameRow}>
              <Text style={styles.name}>{userData?.name || "User"}</Text>
              <TouchableOpacity>
                <Ionicons name="pencil" size={14} color="#53B175" />
              </TouchableOpacity>
            </View>

            <Text style={styles.email}>{userData?.email || "user@example.com"}</Text>
          </View>
        </View>

        <View style={styles.studentInfo}>
          <Text style={styles.studentTitle}>Sinh viên thực hiện</Text>
          <Text style={styles.studentName}>Nguyễn Hoàng Việt</Text>
          <Text style={styles.studentId}>MSSV: 23810310438</Text>
        </View>

        <View style={styles.divider} />

        {/* MENU */}
        {menuItems.map((item, index) => (
          <View key={index}>
            <TouchableOpacity 
              style={styles.menuItem}
              onPress={() => handleMenuPress(item.label)}
            >
              <View style={styles.menuLeft}>
                <Ionicons name={item.icon as any} size={24} color="#333" />
                <Text style={styles.menuLabel}>{item.label}</Text>
              </View>

              <Ionicons name="chevron-forward" size={18} color="#999" />
            </TouchableOpacity>

            <View style={styles.divider} />
          </View>
        ))}

        <View style={styles.divider} />

        {/* LOGOUT */}
        <TouchableOpacity style={styles.logoutBtn} onPress={handleLogout}>
          <Ionicons name="log-out-outline" size={20} color="#53B175" />
          <Text style={styles.logoutText}>Log Out</Text>
        </TouchableOpacity>

      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },

  profileRow: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingVertical: 20,
    paddingTop: 50,
    gap: 16,
  },

  avatarContainer: {
    width: 70,
    height: 70,
    borderRadius: 35,
    overflow: 'hidden',
    backgroundColor: '#E8F5F0',
  },

  avatar: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },

  profileInfo: {
    flex: 1,
    gap: 4,
  },

  nameRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },

  name: {
    fontSize: 18,
    fontWeight: '700',
    color: '#1A1A1A',
  },

  email: {
    fontSize: 13,
    color: '#888',
  },

  divider: {
    height: 1,
    backgroundColor: '#F0F0F0',
  },

  menuItem: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    paddingVertical: 18,
  },

  menuLeft: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 16,
  },

  menuLabel: {
    fontSize: 16,
    fontWeight: '500',
    color: '#1A1A1A',
  },

  logoutBtn: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 10,
    marginHorizontal: 20,
    marginVertical: 30,
    paddingVertical: 16,
    borderRadius: 18,
    backgroundColor: '#F2F9F5',
  },

  logoutText: {
    fontSize: 16,
    fontWeight: '600',
    color: '#53B175',
  },

  studentInfo: {
    marginHorizontal: 20,
    marginTop: 16,
    padding: 14,
    backgroundColor: '#F8F8F8',
    borderRadius: 12,
  },

  studentTitle: {
    fontSize: 14,
    fontWeight: '600',
    color: '#666',
    marginBottom: 8,
  },

  studentName: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 4,
  },

  studentId: {
    fontSize: 14,
    color: '#666',
  },
});