"use client";
import { searchSchema } from "@/src/schema";
import { useRouter } from "next/navigation";
import React from "react";
import { toast } from "react-toastify";

function ProductSearchForm() {
  const router = useRouter();
  const handleSearchForm = (formData: FormData) => {
    const data = {
      search: formData.get("search"),
    };
    const result = searchSchema.safeParse(data);
    if (!result.success) {
      result.error.issues.map((issue) => {
        toast.error(issue.message);
      });
      return;
    }
    const encodedQuery = encodeURIComponent(result.data.search);
    router.push(`/admin/products/search?query=${encodedQuery}`);
  };
  return (
    <form className="flex gap-0.5 h-full" action={handleSearchForm}>
      <input
        type="text"
        className="p-2 placeholder-gray-400 bg-white rounded w-full"
        placeholder="Cafe, chocolota, pizza"
        name="search"
      />
      <input
        type="submit"
        className="p-2 font-bold bg-amber-400 text-white rounded"
        value="Buscar"
      />
    </form>
  );
}

export default ProductSearchForm;
