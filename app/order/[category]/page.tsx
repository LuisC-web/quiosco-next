import ProductCard from "@/src/components/products/ProductCard";
import Heading from "@/src/components/ui/Heading";
import { prisma } from "@/src/lib/prisma";

async function fetchCategoryData(category: string) {
  try {
    const products = await prisma.product.findMany({
      where: {
        category: {
          slug: category,
        },
      },
    });
    return products;
  } catch (error) {
    console.error("Error fetching category data:", error);
    return [];
  }
}

export default async function OrderPage({
  params,
}: {
  params: { category: string };
}) {
  const products = await fetchCategoryData(params.category);

  return (
    <>
      <Heading>Elige y personaliza tú pedido</Heading>
      <div className="grid grid-cols-1  lg:grid-cols-3 gap-4 2xl:grid-cols-4 items-starts ">
        {products.map((product) => (
          <ProductCard key={product.id} product={product}></ProductCard>
        ))}
      </div>
    </>
  );
}
