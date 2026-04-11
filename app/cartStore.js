import AsyncStorage from '@react-native-async-storage/async-storage';

export let cart = [];

const CART_KEY = 'cart_items';

// Load cart từ AsyncStorage khi app khởi động
export const loadCart = async () => {
  try {
    const savedCart = await AsyncStorage.getItem(CART_KEY);
    if (savedCart) {
      cart = JSON.parse(savedCart);
    }
  } catch (error) {
    console.error('Error loading cart:', error);
  }
};

// Lưu cart vào AsyncStorage
const saveCartToStorage = async () => {
  try {
    await AsyncStorage.setItem(CART_KEY, JSON.stringify(cart));
  } catch (error) {
    console.error('Error saving cart:', error);
  }
};

export const addToCart = (product) => {
  const existing = cart.find((item) => item.id === product.id);

  if (existing) {
    existing.qty += 1;
  } else {
    cart.push({ ...product, qty: 1 });
  }
  saveCartToStorage();
};

export const getCart = () => {
  return cart;
};

export const removeFromCart = (index) => {
  cart.splice(index, 1);
  saveCartToStorage();
};

export const clearCart = () => {
  cart.length = 0;
  saveCartToStorage();
};