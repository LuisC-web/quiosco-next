import OrderSidebar from "@/src/components/order/OrderSidebar";
import OrderSummary from "@/src/components/order/OrderSummary";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <div className="md:flex">
        <OrderSidebar></OrderSidebar>
        <main className="md:flex-1 md:h-screen md:overflow-y-scroll p-5">
          {children}
        </main>
        <OrderSummary></OrderSummary>
      </div>
    </>
  );
}
