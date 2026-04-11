import AsyncStorage from '@react-native-async-storage/async-storage';

const ORDERS_KEY = 'orders_list';

export const saveOrder = async (cartItems, total) => {
  try {
    // Create order object with timestamp
    const order = {
      id: Date.now().toString(),
      items: cartItems,
      total: total,
      timestamp: new Date().toISOString(),
      status: 'Processing',
    };

    // Get existing orders
    const existingOrders = await getOrders();
    
    // Add new order to the beginning of the array
    const updatedOrders = [order, ...existingOrders];
    
    // Save to AsyncStorage
    await AsyncStorage.setItem(ORDERS_KEY, JSON.stringify(updatedOrders));
    
    return order;
  } catch (error) {
    console.error('Error saving order:', error);
    throw error;
  }
};

export const getOrders = async () => {
  try {
    const ordersJson = await AsyncStorage.getItem(ORDERS_KEY);
    return ordersJson ? JSON.parse(ordersJson) : [];
  } catch (error) {
    console.error('Error retrieving orders:', error);
    return [];
  }
};

export const getOrderById = async (orderId) => {
  try {
    const orders = await getOrders();
    return orders.find(order => order.id === orderId);
  } catch (error) {
    console.error('Error retrieving order:', error);
    return null;
  }
};

export const deleteOrder = async (orderId) => {
  try {
    const orders = await getOrders();
    const filteredOrders = orders.filter(order => order.id !== orderId);
    await AsyncStorage.setItem(ORDERS_KEY, JSON.stringify(filteredOrders));
  } catch (error) {
    console.error('Error deleting order:', error);
    throw error;
  }
};

export const clearAllOrders = async () => {
  try {
    await AsyncStorage.removeItem(ORDERS_KEY);
  } catch (error) {
    console.error('Error clearing orders:', error);
    throw error;
  }
};
