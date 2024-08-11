-- CreateTable
CREATE TABLE "Makanan" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "asal" TEXT NOT NULL,
    "bahan" TEXT[],
    "caraMembuat" TEXT[],

    CONSTRAINT "Makanan_pkey" PRIMARY KEY ("id")
);
