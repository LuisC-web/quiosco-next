import { create } from "zustand";
import { OrderItem } from "./types";
import { Product } from "@prisma/client";

interface store {
  order: OrderItem[];
  addToOrder: (product: Product) => void;
}
export const useStore = create<store>((set) => ({
  order: [],
  addToOrder: (product) => {
    const { categoryId, image, ...newProduct } = product;
    set((state) => ({
      order: [
        ...state.order,
        {
          ...newProduct,
          quantity: 1,
          subtotal: 1 * newProduct.price,
        },
      ],
    }));
  },
}));
