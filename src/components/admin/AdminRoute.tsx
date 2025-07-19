"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
type AdminRouteProp = {
  link: { url: string; text: string; blank: boolean };
};
function AdminRoute({ link }: AdminRouteProp) {
  const pathname = usePathname();
  const isActive = pathname.startsWith(link.url);
  return (
    <Link
      href={link.url}
      className={`${
        isActive ? "bg-amber-400" : ""
      } font-bold text-2xl p-3 border-t border-gray-200 last-of-type:border-b  `}
      target={link.blank ? "_blank" : ""}
    >
      {link.text}
    </Link>
  );
}

export default AdminRoute;
