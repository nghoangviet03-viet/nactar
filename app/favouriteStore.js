let favorites = [];

let listeners = [];

export function addToFavorite(product) {
  const exist = favorites.find((p) => p.id === product.id);

  if (!exist) {
    favorites.push(product);
    notify();
  }
}

export function removeFavorite(id) {
  favorites = favorites.filter((p) => p.id !== id);
  notify();
}

export function getFavorites() {
  return favorites;
}

export function subscribe(listener) {
  listeners.push(listener);
}

function notify() {
  listeners.forEach((l) => l([...favorites]));
}
import { addToCart } from "./cartStore";

export function addAllToCart() {
  favorites.forEach((item) => {
    addToCart({ ...item, qty: 1 });
  });
}