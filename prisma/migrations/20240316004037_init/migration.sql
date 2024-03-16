/*
  Warnings:

  - Added the required column `membershipId` to the `Member` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Member" ADD COLUMN     "membershipId" INTEGER NOT NULL;

-- AddForeignKey
ALTER TABLE "Member" ADD CONSTRAINT "Member_membershipId_fkey" FOREIGN KEY ("membershipId") REFERENCES "MemberShip"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
