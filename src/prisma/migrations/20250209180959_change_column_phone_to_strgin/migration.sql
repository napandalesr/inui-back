-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_User" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "lastName" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "document" TEXT NOT NULL,
    "typeDocument" TEXT NOT NULL,
    "phone" TEXT NOT NULL,
    "age" INTEGER NOT NULL,
    "address" TEXT NOT NULL,
    "occupation" TEXT NOT NULL,
    "eps" TEXT NOT NULL,
    "birthdate" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "enable" BOOLEAN NOT NULL DEFAULT true,
    "roleId" INTEGER,
    CONSTRAINT "User_roleId_fkey" FOREIGN KEY ("roleId") REFERENCES "Role" ("id") ON DELETE SET NULL ON UPDATE CASCADE
);
INSERT INTO "new_User" ("address", "age", "birthdate", "document", "email", "enable", "eps", "id", "lastName", "name", "occupation", "password", "phone", "roleId", "typeDocument") SELECT "address", "age", "birthdate", "document", "email", "enable", "eps", "id", "lastName", "name", "occupation", "password", "phone", "roleId", "typeDocument" FROM "User";
DROP TABLE "User";
ALTER TABLE "new_User" RENAME TO "User";
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");
CREATE UNIQUE INDEX "User_document_key" ON "User"("document");
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
