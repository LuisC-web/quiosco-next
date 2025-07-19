import ProductTable from "@/src/components/products/ProductsTable";
import Heading from "@/src/components/ui/Heading";
import { prisma } from "@/src/lib/prisma";
import React from "react";
const getProducts = async () =>
  await prisma.product.findMany({ include: { category: true } });
export type ProductsWithCategory = Awaited<ReturnType<typeof getProducts>>;
async function OrderProducts() {
  const products = await getProducts();
  return (
    <>
      <Heading>Administrar ordenes</Heading>
      <ProductTable products={products}></ProductTable>
    </>
  );
}

export default OrderProducts;
