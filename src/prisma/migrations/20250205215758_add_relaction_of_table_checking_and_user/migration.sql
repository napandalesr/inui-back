-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_CheckIn" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "date" TEXT NOT NULL,
    "observation" TEXT,
    "consultId" INTEGER,
    "medicoId" INTEGER,
    CONSTRAINT "CheckIn_consultId_fkey" FOREIGN KEY ("consultId") REFERENCES "Consult" ("id") ON DELETE SET NULL ON UPDATE CASCADE,
    CONSTRAINT "CheckIn_medicoId_fkey" FOREIGN KEY ("medicoId") REFERENCES "User" ("id") ON DELETE SET NULL ON UPDATE CASCADE
);
INSERT INTO "new_CheckIn" ("consultId", "date", "id", "observation") SELECT "consultId", "date", "id", "observation" FROM "CheckIn";
DROP TABLE "CheckIn";
ALTER TABLE "new_CheckIn" RENAME TO "CheckIn";
CREATE TABLE "new_User" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "lastName" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "document" TEXT NOT NULL,
    "phone" TEXT NOT NULL,
    "address" TEXT NOT NULL,
    "status" TEXT NOT NULL,
    "eps" TEXT NOT NULL,
    "birthdate" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "enable" BOOLEAN NOT NULL DEFAULT true,
    "roleId" INTEGER,
    CONSTRAINT "User_roleId_fkey" FOREIGN KEY ("roleId") REFERENCES "Role" ("id") ON DELETE SET NULL ON UPDATE CASCADE
);
INSERT INTO "new_User" ("address", "birthdate", "document", "email", "enable", "eps", "id", "lastName", "name", "password", "phone", "roleId", "status") SELECT "address", "birthdate", "document", "email", "enable", "eps", "id", "lastName", "name", "password", "phone", "roleId", "status" FROM "User";
DROP TABLE "User";
ALTER TABLE "new_User" RENAME TO "User";
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");
CREATE UNIQUE INDEX "User_document_key" ON "User"("document");
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
