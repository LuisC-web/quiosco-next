import Link from "next/link";

function notFound() {
  return (
    <div className="w-full flex justify-center flex-col items-center gap-3">
      <h1 className="text-2xl font-bold">No existe el producto</h1>
      <Link
        className="bg-amber-400 p-2 text-white font-bold"
        href="/admin/products"
      >
        Ir a productos
      </Link>
    </div>
  );
}

export default notFound;
