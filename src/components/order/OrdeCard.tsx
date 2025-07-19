import completeOrder from "@/actions/complete-order-action";
import { OrdeWithProducts } from "@/src/types";
import { formatCurrency } from "@/src/utils";
type OrderCardProps = {
  order: OrdeWithProducts;
};
export default function OrderCard({ order }: OrderCardProps) {
  return (
    <section
      aria-labelledby="summary-heading"
      className="mt-16 rounded-lg bg-gray-50 px-4 py-6 sm:p-6  lg:mt-0 lg:p-8 space-y-4 flex flex-col justify-between h-full"
    >
      <div>
        <p className="text-2xl font-medium text-gray-900">
          Cliente: {order.name}
        </p>
        <p className="text-lg font-medium text-gray-900">
          Productos Ordenados:
        </p>
        <dl className="mt-6 space-y-4">
          {order.orderProducts.map((product) => (
            <div
              key={product.productId}
              className="flex items-center gap-2 border-t border-gray-200 pt-4"
            >
              <dt className="flex items-center text-sm text-gray-600">
                <span className="font-black">{product.quantity}</span>
              </dt>
              <dd className="text-sm text-gray-900 font-medium">
                {product.product.name}
              </dd>
            </div>
          ))}
          <div className="flex items-center justify-between border-t border-gray-200 pt-4">
            <dt className="text-base font-medium text-gray-900">
              Total a Pagar:
            </dt>
            <dd className="text-base font-medium text-gray-900">
              {formatCurrency(order.total)}
            </dd>
          </div>
        </dl>
      </div>

      <form action={completeOrder}>
        <input
          type="hidden"
          className="hidden"
          name="order_id"
          value={order.id}
        />
        <input
          type="submit"
          className="bg-amber-400 hover:bg-amber-400/80 transition-colors text-gray-900 w-full mt-5 p-3 uppercase font-semibold cursor-pointer rounded-xl"
          value="Marcar Orden Completada"
        />
      </form>
    </section>
  );
}
