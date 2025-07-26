import AddProductForm from "@/src/components/products/AddProductForm";
import ProductForm from "@/src/components/products/ProductForm";
import Heading from "@/src/components/ui/Heading";
import React from "react";

export default function CreateNewProduct() {
  return (
    <>
      <Heading>Crear producto</Heading>
      <AddProductForm>
        <ProductForm></ProductForm>
      </AddProductForm>
    </>
  );
}
