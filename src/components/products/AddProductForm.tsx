"use client";
import { createProduct } from "@/actions/create-product-action";
import { ProductSchema } from "@/src/schema";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";
export default function AddProductForm({
  children,
}: {
  children: React.ReactNode;
}) {
  const router = useRouter();
  const handleSubmit = async (formData: FormData) => {
    const data = {
      name: formData.get("name"),
      price: formData.get("price"),
      categoryId: formData.get("categoryId"),
      image: formData.get("image-url"),
    };

    const result = ProductSchema.safeParse(data);
    console.log(result, data);

    if (!result.success) {
      result.error.issues.forEach((issue) => {
        toast.error(issue.message);
      });
      return;
    }
    const response = await createProduct(result.data);
    if (response?.errors) {
      response.errors.forEach((error) => {
        toast.error(error.message);
      });
      return;
    }
    router.push("/admin/products");
  };
  return (
    <div className="bg-white mt-10 px-5 py-10 rounded-md shadow-md max-w-3xl mx-auto">
      <form action={handleSubmit} className="space-y-5">
        {children}
        <input
          type="submit"
          value="Crear producto"
          className="p-2 bg-amber-400 text-white font-bold text-center text-xl w-full rounded"
        />
      </form>
    </div>
  );
}
