import { Order, OrderProducts, Product } from "@prisma/client";

export type OrderItem = Pick<Product, "id" | "name" | "price"> & {
  quantity: number;
  subtotal: number;
};
export type OrdeWithProducts = Order & {
  orderProducts: (OrderProducts & { product: Product })[];
};
