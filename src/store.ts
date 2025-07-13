import { create } from "zustand";
import { OrderItem } from "./types";
import { Product } from "@prisma/client";

interface store {
  order: OrderItem[];
  addToOrder: (product: Product) => void;
  increaseQuanty: (id: Product["id"]) => void;
  decreaseQuanty: (id: Product["id"]) => void;
  removeItem: (id: Product["id"]) => void;
}
export const useStore = create<store>((set, get) => ({
  order: [],
  addToOrder: (product) => {
    const { categoryId, image, ...newProduct } = product;
    let items: OrderItem[] = [];
    if (get().order.find((item) => item.id === newProduct.id)) {
      items = get().order.map((item) =>
        item.id === newProduct.id
          ? {
              ...item,
              quantity: item.quantity + 1,
              subtotal: item.price * (item.quantity + 1),
            }
          : item
      );
    } else {
      items = [
        ...get().order,
        {
          ...newProduct,
          quantity: 1,
          subtotal: 1 * newProduct.price,
        },
      ];
    }
    set(() => ({
      order: items,
    }));
  },
  increaseQuanty(id) {
    set((state) => ({
      order: state.order.map((item) =>
        item.id === id
          ? {
              ...item,
              quantity: item.quantity + 1,
              subtotal: item.price * (item.quantity + 1),
            }
          : item
      ),
    }));
  },
  decreaseQuanty(id) {
    const order = get().order.map((item) =>
      item.id === id
        ? {
            ...item,
            quantity: item.quantity - 1,
            subtotal: item.price * (item.quantity - 1),
          }
        : item
    );
    set(() => ({
      order,
    }));
  },
  removeItem(id) {
    const orderFiltre = get().order.filter((item) => item.id !== id);

    set(() => ({
      order: orderFiltre,
    }));
  },
}));
