import { Product } from "@prisma/client";

type ProductCardProps = {
  product: Product;
};
export default function ProductCard({ product }: ProductCardProps) {
  return <div>ProductCard</div>;
}
