import { create } from "zustand";
import { OrderItem } from "./types";

interface store {
  order: OrderItem[];
}
export const useStore = create<store>(() => ({
  order: [],
}));
