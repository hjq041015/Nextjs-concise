-- CreateTable
CREATE TABLE "User" (
    "id" SERIAL NOT NULL,
    "text" TEXT NOT NULL,
    "complete" BOOLEAN NOT NULL,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);
