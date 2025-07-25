import { ArrowLeft, ArrowRight } from "lucide-react";
import Link from "next/link";
type ProductsPaginationProps = {
  page: number;
  totalPages: number;
};
function ProductsPagination({ page, totalPages }: ProductsPaginationProps) {
  const pages = Array.from({ length: totalPages }, (_, i) => i + 1);
  return (
    <nav className="flex justify-center py-10 gap-1 items-center">
      <Link
        href={`/admin/products?page=${page > 1 ? page - 1 : 1}`}
        className="cursor-pointer"
      >
        <ArrowLeft></ArrowLeft>
      </Link>
      {pages.map((pageArray) => (
        <Link
          href={`/admin/products?page=${pageArray}`}
          key={pageArray}
          className={`cursor-pointer  p-2  transition-colors rounded ${
            pageArray === page
              ? "bg-gray-300 font-black"
              : "bg-white hover:bg-gray-300"
          }`}
        >
          {pageArray}
        </Link>
      ))}
      <Link
        href={`/admin/products?page=${
          page < totalPages ? page + 1 : totalPages
        }`}
        className="cursor-pointer"
      >
        <ArrowRight></ArrowRight>
      </Link>
    </nav>
  );
}

export default ProductsPagination;
