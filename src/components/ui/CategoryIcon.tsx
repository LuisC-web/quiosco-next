"use client";
import { Category } from "@prisma/client";
import Image from "next/image";
import Link from "next/link";
import { useParams } from "next/navigation";

type CategoryIconProps = {
  category: Category;
};
function CategoryIcon({ category }: CategoryIconProps) {
  const params = useParams<{ category: string }>();
  return (
    <div
      className={`${
        params.category === category.slug ? "bg-amber-400" : ""
      } flex items-center gap-4 w-full border-t border-gray-100 p-3 last-of-type:border-b`}
    >
      <div className="w-16 h-16 relative">
        <Image src={`/icon_${category.slug}.svg`} alt={category.name} fill />
      </div>
      <Link className="text-xl font-bold" href={"/order/" + category.slug}>
        {category.name}
      </Link>
    </div>
  );
}

export default CategoryIcon;
