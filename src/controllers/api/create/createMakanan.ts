import { Context } from "hono";
import { PrismaClient } from "@prisma/client";

async function createMakanan(c: Context) {
  const prisma = new PrismaClient();
  try {
    const createMakanan = await prisma.makanan.create({
      data: {
        nama: "Getuk Pisang",
        deskripsi: `Ada kuliner khas Kediri berbahan dasar pisang yang manit legit. Berbeda dengan jenis getuk pada umumnya, getuk pisang ini dibuat dengan mencampurkan tepung beras, tepung sagu, dan santan. 

`,
        daerahId: 1,
      },
    });
    return c.json({
      success: true,
      message: "Success Creating...",
      data: createMakanan,
    });
  } catch (err) {
    return c.json({
      success: false,
      message: "Failed to create : " + err,
      data: {},
    });
  }
}
export default createMakanan;
