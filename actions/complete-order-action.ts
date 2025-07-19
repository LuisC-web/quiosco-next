"use server";

import { prisma } from "@/src/lib/prisma";
import { orderIdSchema } from "@/src/schema";
import { revalidatePath } from "next/cache";
export default async function completeOrder(formData: FormData) {
  try {
    console.log("Prueba", formData.get("order_id"));

    const data = { orderId: formData.get("order_id") };
    const result = orderIdSchema.safeParse(data);
    console.log("Prueba", result);
    if (result.success) {
      console.log(result);

      await prisma.order.update({
        where: { id: result.data.orderId },
        data: { status: true, orderReadyAt: new Date(Date.now()) },
      });
    }
    revalidatePath("/admin/orders");
  } catch (error) {
    console.log(error);
  }
}
