"use client";
import { useRouter } from "next/navigation";
import React from "react";

function GoToBack({ children }: { children: React.ReactNode }) {
  const router = useRouter();
  return (
    <button
      onClick={() => router.back()}
      className="bg-amber-400 p-2 text-white rounded font-black w-full  lg:w-fit cursor-pointer"
    >
      {children}
    </button>
  );
}

export default GoToBack;
