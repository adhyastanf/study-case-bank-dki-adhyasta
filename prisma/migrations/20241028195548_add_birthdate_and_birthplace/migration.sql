/*
  Warnings:

  - Added the required column `birthDate` to the `User` table without a default value. This is not possible if the table is not empty.
  - Added the required column `birthPlace` to the `User` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `user` ADD COLUMN `birthDate` DATETIME(3) NOT NULL,
    ADD COLUMN `birthPlace` VARCHAR(191) NOT NULL;
