-- CreateTable
CREATE TABLE "Contest" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "admin" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "date" TEXT,
    "memo" TEXT NOT NULL
);
