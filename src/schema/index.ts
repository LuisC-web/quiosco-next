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
export const orderIdSchema = object({
  orderId: string()
    .transform((value) => parseInt(value))
    .refine((value) => value > 0, { message: "Hay un error con el id" }),
});
export const searchSchema = object({
  search: string().min(1, { message: "La busqueda no puede ir vacia" }),
});
