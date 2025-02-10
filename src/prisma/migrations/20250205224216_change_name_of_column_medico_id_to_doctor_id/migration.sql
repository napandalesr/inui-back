/*
  Warnings:

  - You are about to drop the column `medicoId` on the `CheckIn` table. All the data in the column will be lost.

*/
-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_CheckIn" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "date" TEXT NOT NULL,
    "observation" TEXT,
    "consultId" INTEGER,
    "doctorId" INTEGER,
    CONSTRAINT "CheckIn_consultId_fkey" FOREIGN KEY ("consultId") REFERENCES "Consult" ("id") ON DELETE SET NULL ON UPDATE CASCADE,
    CONSTRAINT "CheckIn_doctorId_fkey" FOREIGN KEY ("doctorId") REFERENCES "User" ("id") ON DELETE SET NULL ON UPDATE CASCADE
);
INSERT INTO "new_CheckIn" ("consultId", "date", "id", "observation") SELECT "consultId", "date", "id", "observation" FROM "CheckIn";
DROP TABLE "CheckIn";
ALTER TABLE "new_CheckIn" RENAME TO "CheckIn";
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
