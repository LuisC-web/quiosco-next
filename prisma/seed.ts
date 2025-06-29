import { PrismaClient } from "@prisma/client";
import { categories } from "./data/categories";
import { products } from "./data/products";
const prisma = new PrismaClient();
const seed = async () => {
  try {
    await prisma.category.createMany({ data: categories });
    await prisma.product.createMany({ data: products });
  } catch (error) {
    console.log(error);
  }
};
seed()
  .then(async () => {
    console.log("Seeding completed successfully");
    prisma.$disconnect();
  })
  .catch((error) => {
    console.error("Error during seeding:", error);
    prisma.$disconnect();
    process.exit(1);
  });
