import { Context } from "hono";
import { PrismaClient } from "@prisma/client";

async function getMakanan(c: Context) {
  const prisma = new PrismaClient();
  try {
    const getMakanan = await prisma.makanan.findMany({
      include: {
        asal: true,
        resep: true,
      },
    });

    return c.json({
      success: true,
      message: "Success getting data",
      data: getMakanan,
    });
  } catch (err) {
    return c.json({
      success: false,
      message: "Failed to get data",
      data: {},
    });
  }
}
export default getMakanan;
