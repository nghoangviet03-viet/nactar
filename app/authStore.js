import AsyncStorage from '@react-native-async-storage/async-storage';

const USER_KEY = 'user_data';
const PASSWORD_KEY = 'user_password';
const TOKEN_KEY = 'auth_token';

export const authStore = {
  // Lưu thông tin user, password và token khi đăng ký thành công
  saveUser: async (userData, password, token) => {
    try {
      await AsyncStorage.setItem(USER_KEY, JSON.stringify(userData));
      await AsyncStorage.setItem(PASSWORD_KEY, password);
      await AsyncStorage.setItem(TOKEN_KEY, token);
      console.log('User data saved successfully');
    } catch (error) {
      console.error('Error saving user data:', error);
      throw error;
    }
  },

  // Lấy thông tin user đã lưu
  getUser: async () => {
    try {
      const userData = await AsyncStorage.getItem(USER_KEY);
      return userData ? JSON.parse(userData) : null;
    } catch (error) {
      console.error('Error getting user data:', error);
      return null;
    }
  },

  // Lấy token đã lưu
  getToken: async () => {
    try {
      return await AsyncStorage.getItem(TOKEN_KEY);
    } catch (error) {
      console.error('Error getting token:', error);
      return null;
    }
  },

  // Lưu token để đăng nhập lại
  saveToken: async (token) => {
    try {
      await AsyncStorage.setItem(TOKEN_KEY, token);
    } catch (error) {
      console.error('Error saving token:', error);
      throw error;
    }
  },

  // Lấy mật khẩu đã lưu
  getPassword: async () => {
    try {
      return await AsyncStorage.getItem(PASSWORD_KEY);
    } catch (error) {
      console.error('Error getting password:', error);
      return null;
    }
  },

  // Kiểm tra xem user đã login chưa
  isLoggedIn: async () => {
    try {
      const token = await AsyncStorage.getItem(TOKEN_KEY);
      const user = await AsyncStorage.getItem(USER_KEY);
      return !!(token && user);
    } catch (error) {
      console.error('Error checking login status:', error);
      return false;
    }
  },

  // Kiểm tra xem user đã đăng ký chưa (có user data không)
  isRegistered: async () => {
    try {
      const user = await AsyncStorage.getItem(USER_KEY);
      return !!user;
    } catch (error) {
      console.error('Error checking registration status:', error);
      return false;
    }
  },

  // Logout: chỉ xóa token, giữ lại thông tin user để login lại bằng email/mật khẩu cũ
  logout: async () => {
    try {
      await AsyncStorage.removeItem(TOKEN_KEY);
      console.log('User logged out successfully');
    } catch (error) {
      console.error('Error during logout:', error);
      throw error;
    }
  },

  // Xóa toàn bộ dữ liệu liên quan (cart, orders, etc.)
  clearAllData: async () => {
    try {
      const keys = await AsyncStorage.getAllKeys();
      await AsyncStorage.multiRemove(keys);
      console.log('All data cleared');
    } catch (error) {
      console.error('Error clearing all data:', error);
      throw error;
    }
  }
};