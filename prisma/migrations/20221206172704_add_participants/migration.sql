/*
  Warnings:

  - The primary key for the `Section` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `id` on the `Section` table. All the data in the column will be lost.
  - Added the required column `sectionNumber` to the `Section` table without a default value. This is not possible if the table is not empty.

*/
-- CreateTable
CREATE TABLE "Round" (
    "contestId" INTEGER NOT NULL,
    "sectionNumber" INTEGER NOT NULL,
    "roundNumber" INTEGER NOT NULL,
    "heatCount" INTEGER NOT NULL,
    "upCount" INTEGER NOT NULL,
    "judgeType" TEXT NOT NULL,

    PRIMARY KEY ("contestId", "sectionNumber", "roundNumber"),
    CONSTRAINT "Round_contestId_sectionNumber_fkey" FOREIGN KEY ("contestId", "sectionNumber") REFERENCES "Section" ("contestId", "sectionNumber") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "Dancer" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "ContestParticipant" (
    "contestId" INTEGER NOT NULL,
    "participantNumber" INTEGER NOT NULL,
    "dancerId" INTEGER NOT NULL,
    "name" TEXT NOT NULL,
    "isLeader" BOOLEAN NOT NULL,
    "isPartner" BOOLEAN NOT NULL,

    PRIMARY KEY ("contestId", "participantNumber"),
    CONSTRAINT "ContestParticipant_contestId_fkey" FOREIGN KEY ("contestId") REFERENCES "Contest" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "ContestParticipant_dancerId_fkey" FOREIGN KEY ("dancerId") REFERENCES "Dancer" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "SectionParticipation" (
    "leaderParticipantNumber" INTEGER NOT NULL,
    "followerParticipantNumber" INTEGER NOT NULL,
    "contestId" INTEGER NOT NULL,
    "sectionNumber" INTEGER NOT NULL,

    PRIMARY KEY ("sectionNumber", "leaderParticipantNumber"),
    CONSTRAINT "SectionParticipation_contestId_leaderParticipantNumber_fkey" FOREIGN KEY ("contestId", "leaderParticipantNumber") REFERENCES "ContestParticipant" ("contestId", "participantNumber") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "SectionParticipation_contestId_followerParticipantNumber_fkey" FOREIGN KEY ("contestId", "followerParticipantNumber") REFERENCES "ContestParticipant" ("contestId", "participantNumber") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "SectionParticipation_contestId_sectionNumber_fkey" FOREIGN KEY ("contestId", "sectionNumber") REFERENCES "Section" ("contestId", "sectionNumber") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Section" (
    "contestId" INTEGER NOT NULL,
    "sectionNumber" INTEGER NOT NULL,
    "name" TEXT NOT NULL,
    "danceType" TEXT NOT NULL,
    "memo" TEXT NOT NULL,

    PRIMARY KEY ("contestId", "sectionNumber"),
    CONSTRAINT "Section_contestId_fkey" FOREIGN KEY ("contestId") REFERENCES "Contest" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_Section" ("contestId", "danceType", "memo", "name") SELECT "contestId", "danceType", "memo", "name" FROM "Section";
DROP TABLE "Section";
ALTER TABLE "new_Section" RENAME TO "Section";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;

-- CreateIndex
CREATE UNIQUE INDEX "ContestParticipant_contestId_dancerId_key" ON "ContestParticipant"("contestId", "dancerId");

-- CreateIndex
CREATE UNIQUE INDEX "SectionParticipation_sectionNumber_followerParticipantNumber_key" ON "SectionParticipation"("sectionNumber", "followerParticipantNumber");
