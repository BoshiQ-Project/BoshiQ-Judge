-- CreateTable
CREATE TABLE "Contest" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "admin" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "date" TEXT,
    "memo" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "Section" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "contestId" INTEGER NOT NULL,
    "name" TEXT NOT NULL,
    "danceType" TEXT NOT NULL,
    CONSTRAINT "Section_contestId_fkey" FOREIGN KEY ("contestId") REFERENCES "Contest" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
