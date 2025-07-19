import OrdeCard from "@/src/components/order/OrdeCard";
import Heading from "@/src/components/ui/Heading";
import { prisma } from "@/src/lib/prisma";
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
