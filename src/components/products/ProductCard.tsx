import { formatCurrency, getImagePaht } from "@/src/utils";
import { Product } from "@prisma/client";
import Image from "next/image";
import AddProduct from "./AddProduct";

type ProductCardProps = {
  product: Product;
};
export default function ProductCard({ product }: ProductCardProps) {
  return (
    <div className="border bg-white">
      <Image
        src={getImagePaht(product.image)}
        alt={product.name}
        width={400}
        height={300}
      />

      <div className="p-5">
        <h3 className="text-2xl font-bold">{product.name}</h3>
        <p className=" mt-5 font-black text-4xl text-amber-500">
          {formatCurrency(product.price)}
        </p>
        <AddProduct product={product} />
      </div>
    </div>
  );
}
