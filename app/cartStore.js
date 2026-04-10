export const cart = [];

export const addToCart = (product) => {
  const existing = cart.find((item) => item.id === product.id);

  if (existing) {
    existing.qty += 1;
  } else {
    cart.push({ ...product, qty: 1 });
  }
};

export const getCart = () => {
  return cart;
};

export const clearCart = () => {
  cart.length = 0;
};