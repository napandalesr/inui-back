/*
  Warnings:

  - Added the required column `reason` to the `Consult` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Consult" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "diagnostic" TEXT NOT NULL,
    "reason" TEXT NOT NULL,
    "treatment" TEXT NOT NULL,
    "status" TEXT NOT NULL,
    "date" TEXT NOT NULL,
    "type" TEXT NOT NULL,
    "userId" INTEGER,
    CONSTRAINT "Consult_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User" ("id") ON DELETE SET NULL ON UPDATE CASCADE
);
INSERT INTO "new_Consult" ("date", "diagnostic", "id", "status", "treatment", "type", "userId") SELECT "date", "diagnostic", "id", "status", "treatment", "type", "userId" FROM "Consult";
DROP TABLE "Consult";
ALTER TABLE "new_Consult" RENAME TO "Consult";
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
