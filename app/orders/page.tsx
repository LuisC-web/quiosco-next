"use client";
import LatestOrdeItem from "@/src/components/order/LatestOrdeItem";
import Logo from "@/src/components/ui/Logo";
import { OrdeWithProducts } from "@/src/types";
import React from "react";
import { PropagateLoader } from "react-spinners";
import useSWR from "swr";

function OrderView() {
  const url = "/orders/api";
  const fetcher = () =>
    fetch(url)
      .then((res) => res.json())
      .then((data) => data);
  const { isLoading, data } = useSWR<OrdeWithProducts[]>(url, fetcher, {
    refreshInterval: 30000,
    revalidateOnFocus: false,
  });

  return (
    <>
      <h1 className="mt-20 text-center text-6xl font-black">Ordenes listas</h1>
      <Logo></Logo>
      <div className="grid grid-cols-1 gap-5 max-w-5xl mx-auto mt-10">
        {isLoading ? (
          <PropagateLoader className="mx-auto" />
        ) : (
          <>
            {data?.length ? (
              <>
                {data.map((item) => (
                  <LatestOrdeItem key={item.id} order={item}></LatestOrdeItem>
                ))}
              </>
            ) : (
              <p className="text-center py-10">No hay ordenes listas</p>
            )}
          </>
        )}
      </div>
    </>
  );
}

export default OrderView;
