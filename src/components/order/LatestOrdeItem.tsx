import { OrdeWithProducts } from "@/src/types";

type LatestOrdeItem = {
  order: OrdeWithProducts;
};
function LatestOrdeItem({ order }: LatestOrdeItem) {
  return (
    <div className="bg-white shadow-md p-5 space-y-5 rounded-lg">
      <p className="font-bold text-2xl">Cliente: {order.name}</p>
      <ul
        role="list"
        className="divide-y divide-gray-200 border-t text-sm botder-gray-200 font-medium text-gray-500"
      >
        {order.orderProducts.map((product) => (
          <li key={product.id} className="flex py-5">
            <span className="font-bold">({product.quantity}) </span>{" "}
            <p>{product.product.name}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default LatestOrdeItem;
