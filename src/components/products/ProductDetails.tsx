import { OrderItem } from "@/src/types";
import { formatCurrency } from "@/src/utils";
import { MinusIcon, PlusIcon, XCircleIcon } from "lucide-react";

type ProductDetailsProps = {
  item: OrderItem;
};
function ProductDetails({ item }: ProductDetailsProps) {
  return (
    <div className="shadow  py-4 px-2.5 bg-white  border-t border-gray-100 rounded-sm ">
      <div className="space-y-4">
        <div className="flex justify-between items-start">
          <p className="font-bold">{item.name} </p>

          <button type="button" onClick={() => {}}>
            <XCircleIcon className="text-red-600 h-5 w-5" />
          </button>
        </div>
        <div className="flex  p-1.5 gap-2   rounded-lg w-full justify-between">
          <p className="text-2xl text-amber-500 font-black items-center">
            {formatCurrency(item.price)}
          </p>
          <div className="flex gap-2 justify-evenly bg-gray-100 p-1 rounded-sm">
            <button type="button" onClick={() => {}}>
              <MinusIcon className="h-4 w-4 cursor-pointer hover:text-black/50" />
            </button>
            <p className="  ">{item.quantity}</p>
            <button type="button" onClick={() => {}}>
              <PlusIcon className="h-4 w-4 cursor-pointer hover:text-black/50" />
            </button>
          </div>
        </div>
        <p className="text-xl font-black text-gray-700">
          Subtotal: {""}
          <span className="font-normal"></span>
        </p>
      </div>
    </div>
  );
}

export default ProductDetails;
