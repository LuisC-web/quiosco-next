"use client";
import { useStore } from "@/src/store";
import ProductDetails from "../products/ProductDetails";

function OrderSummary() {
  const order = useStore((state) => state.order);
  return (
    <aside className="lg:h-screen lg:overflow-y-scroll md:w-64 lg:w-96 p-5">
      <h1 className="text-2xl font-semibold text-center">Mi pedido</h1>
      {order.length === 0 ? (
        <p className="text-center my-10">No hay productos en el pedido</p>
      ) : (
        <div className="space-y-2">
          {order.map((productItem) => (
            <ProductDetails
              item={productItem}
              key={productItem.id}
            ></ProductDetails>
          ))}
        </div>
      )}
    </aside>
  );
}

export default OrderSummary;
