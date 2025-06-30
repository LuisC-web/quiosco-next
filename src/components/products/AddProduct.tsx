"use client";

import { useStore } from "@/src/store";
import { Product } from "@prisma/client";

type AddProductProps = {
  product: Product;
};
function AddProduct({ product }: AddProductProps) {
  const { addToOrder } = useStore();
  return (
    <button
      type="button"
      className="bg-indigo-600 hover:bg-indigo-500 p-2 w-full text-white uppercase font-bold mt-5 rounded-sm cursor-pointer"
      onClick={() => addToOrder(product)}
    >
      Agregar
    </button>
  );
}

export default AddProduct;
