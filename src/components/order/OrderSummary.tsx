"use client";
import { useStore } from "@/src/store";
import ProductDetails from "../products/ProductDetails";
import { useMemo } from "react";
import { createOrder } from "@/actions/create-order-actions";
import { toast } from "react-toastify";

function OrderSummary() {
  const { order, clearOrder } = useStore();
  const total = useMemo(
    () => order.reduce((total, item) => total + item.price * item.quantity, 0),
    [order]
  );
  const handleCreateOrder = async (formData: FormData) => {
    const data = {
      name: formData.get("name"),
      total,
      order,
    };
    const response = await createOrder(data);
    if (response?.errors) {
      response.errors.forEach((issue) => {
        console.log(issue);

        toast.error(issue.message);
      });
      return;
    }
    toast.success("Pedido agregado correctamente");
    clearOrder();
  };
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
      <p className="text-2xl mt-10 font-medium">Total a pagar: {total}</p>
      <form className="w-full mt-10 space-y-5" action={handleCreateOrder}>
        <input
          type="text"
          placeholder="Escribe tu nombre"
          className="bg-white w-full p-2.5 rounded"
          name="name"
          id="name"
        />
        <input
          type="submit"
          className="py-2 rounded uppercase text-white bg-black w-full text-center font-medium cursor-pointer hover:bg-black/90"
          value="Confirmar pedido"
        />
      </form>
    </aside>
  );
}

export default OrderSummary;
