/*
  Warnings:

  - You are about to drop the column `sprice` on the `Product` table. All the data in the column will be lost.
  - Added the required column `price` to the `Product` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Product" DROP COLUMN "sprice",
ADD COLUMN     "price" DOUBLE PRECISION NOT NULL;
