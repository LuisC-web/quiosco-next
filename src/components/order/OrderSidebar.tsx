import { prisma } from "@/src/lib/prisma";
import CategoryIcon from "../ui/CategoryIcon";
import Logo from "../ui/Logo";
async function getCategories() {
  try {
    const categories = await prisma.category.findMany();
    return categories;
  } catch (error) {
    console.error("Error fetching categories:", error);
    return [];
  } finally {
    await prisma.$disconnect();
  }
}
async function OrderSidebar() {
  const categories = await getCategories();
  console.log(categories);

  return (
    <aside className="md:w-72 md:h-screen bg-white">
      <Logo></Logo>
      <nav className="mt-10">
        {categories.map((category) => (
          <CategoryIcon key={category.id} category={category}></CategoryIcon>
        ))}
      </nav>
    </aside>
  );
}

export default OrderSidebar;
