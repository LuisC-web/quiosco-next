import ProductsPagination from "@/src/components/products/ProductsPagination";
import ProductTable from "@/src/components/products/ProductsTable";
import Heading from "@/src/components/ui/Heading";
import { prisma } from "@/src/lib/prisma";
import { redirect } from "next/navigation";
import React from "react";
const PAGE_SIZE = 10;
const getProducts = async (page: number, pageSize: number = 10) =>
  await prisma.product.findMany({
    take: pageSize,
    skip: (page - 1) * pageSize,
    include: { category: true },
  });
  const prdouctCount = async () =>
    await prisma.product.count()
export type ProductsWithCategory = Awaited<ReturnType<typeof getProducts>>;
async function OrderProducts({
  searchParams,
}: {
  searchParams: Promise<{ page: string }>;
}) {
  const searchPage = await searchParams;
  const page = +searchPage.page || 1;
  if(page<0) redirect("/admin/products")
  const [products, totalProducts] = await Promise.all([getProducts(page,PAGE_SIZE), prdouctCount()])
  const totalPages = Math.ceil(totalProducts / PAGE_SIZE)
  if (page > totalPages) {
    redirect("/admin/products")
  }
  return (
    <>
      <Heading>Administrar ordenes</Heading>
      <ProductTable products={products}></ProductTable>
      <ProductsPagination page={page} totalPages={totalPages}/> 
    </>
  );
}

export default OrderProducts;
