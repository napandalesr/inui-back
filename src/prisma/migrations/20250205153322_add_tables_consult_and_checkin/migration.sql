-- CreateTable
CREATE TABLE "Consult" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "diagnostic" TEXT NOT NULL,
    "treatment" TEXT NOT NULL,
    "notes" TEXT NOT NULL,
    "userId" INTEGER,
    CONSTRAINT "Consult_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User" ("id") ON DELETE SET NULL ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "CheckIn" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "date" TEXT NOT NULL,
    "consultId" INTEGER,
    CONSTRAINT "CheckIn_consultId_fkey" FOREIGN KEY ("consultId") REFERENCES "Consult" ("id") ON DELETE SET NULL ON UPDATE CASCADE
);
