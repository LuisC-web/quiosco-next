import OrdeCard from "@/src/components/order/OrdeCard";
import Heading from "@/src/components/ui/Heading";
import { prisma } from "@/src/lib/prisma";
import { revalidatePath } from "next/cache";
async function getPendingOrdess() {
  return await prisma.order.findMany({
    where: { status: false },
    include: { orderProducts: { include: { product: true } } },
  });
}
async function OrdersPage() {
  const orders = await getPendingOrdess();
  return (
    <>
      <Heading>Administrar ordenes</Heading>
      <button
        className="bg-amber-400 p-2 text-white rounded font-black w-full  lg:w-fit cursor-pointer"
        onClick={async () => {
          "use server";
          revalidatePath("/admin/orders");
        }}
      >
        Actualizar ordenes
      </button>
      {orders.length ? (
        <div className="grid grid-cols-1 lg:grid-cols-2 2xl:grid-cols-3 gap-5 mt-5 ">
          {orders.map((order) => (
            <OrdeCard order={order} key={order.id} />
          ))}
        </div>
      ) : (
        <p className="text-2xl text-amber-500 font-semibold">
          No hay ordenes pendientes
        </p>
      )}
    </>
  );
}

export default OrdersPage;
