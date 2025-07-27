import ProductSearchForm from "@/src/components/products/ProductSearchForm";
import ProductTable from "@/src/components/products/ProductsTable";
import Heading from "@/src/components/ui/Heading";
import { prisma } from "@/src/lib/prisma";
import Link from "next/link";
import React from "react";

const getProducts = async (query: string) =>
  await prisma.product.findMany({
    include: { category: true },
    where: { name: { contains: query, mode: "insensitive" } },
  });

async function SearchPage({
  searchParams,
}: {
  searchParams: Promise<{ query: string }>;
}) {
  const searchPage = await searchParams;
  const query = searchPage.query ?? "";

  const products = await getProducts(query);

  return (
    <>
      <Heading>Resultados de busqueda</Heading>
      <div className="font-semibold text-xl cursor-pointer flex flex-col min-w-full lg:flex-row gap-2 lg:justify-between">
        <Link
          href="/admin/products/new"
          className="bg-amber-400 p-2 text-white rounded font-black w-full  lg:w-fit"
        >
          Crear producto
        </Link>

        <ProductSearchForm></ProductSearchForm>
      </div>
      {products.length === 0 ? (
        <ProductTable products={products}></ProductTable>
      ) : (
        <p className="text-amber-400 text-2xl">No hay productos disponibles</p>
      )}
    </>
  );
}

export default SearchPage;
