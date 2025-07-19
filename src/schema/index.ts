import { array, number, object, string } from "zod";

export const OrderSchema = object({
  name: string().min(1, "El nombre es obligatorio"),
  total: number().min(1, "Hay errores en el pedido"),
  order: array(
    object({
      id: number(),
      name: string(),
      price: number(),
      quantity: number(),
      subtotal: number(),
    })
  ),
});
