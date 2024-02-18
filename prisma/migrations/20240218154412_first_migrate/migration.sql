-- CreateTable
CREATE TABLE "Makanan" (
    "id" SERIAL NOT NULL,
    "nama" TEXT,
    "deskripsi" TEXT,
    "daerahId" INTEGER NOT NULL,

    CONSTRAINT "Makanan_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Resep" (
    "id" SERIAL NOT NULL,
    "makananId" INTEGER NOT NULL,
    "bahan" TEXT[],

    CONSTRAINT "Resep_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Daerah" (
    "id" SERIAL NOT NULL,
    "nama" TEXT,

    CONSTRAINT "Daerah_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Resep_makananId_key" ON "Resep"("makananId");

-- AddForeignKey
ALTER TABLE "Makanan" ADD CONSTRAINT "Makanan_daerahId_fkey" FOREIGN KEY ("daerahId") REFERENCES "Daerah"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Resep" ADD CONSTRAINT "Resep_makananId_fkey" FOREIGN KEY ("makananId") REFERENCES "Makanan"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
