import EditProductForm from "@/src/components/products/EditProductForm";
import ProductForm from "@/src/components/products/ProductForm";
import GoToBack from "@/src/components/ui/GoToBack";
import Heading from "@/src/components/ui/Heading";
import { prisma } from "@/src/lib/prisma";
import { notFound } from "next/navigation";
import React from "react";
const getProductById = async (id: number) => {
  const product = await prisma.product.findUnique({ where: { id } });
  if (!product) {
    console.log("Not found");
    notFound();
  }
  return product;
};
async function EditProductPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const product = await getProductById(+id);
  return (
    <>
      <Heading>
        Editar producto: <span className="font-bold">{product.name}</span>{" "}
      </Heading>
      <div className="font-semibold text-xl cursor-pointer flex flex-col min-w-full lg:flex-row gap-2 lg:justify-between">
        <GoToBack>Regresar a productos</GoToBack>
      </div>
      <EditProductForm>
        <ProductForm product={product}></ProductForm>
      </EditProductForm>
    </>
  );
}

export default EditProductPage;
