import { Context } from "hono";
import { PrismaClient } from "@prisma/client";

async function createResep(c: Context) {
  const prisma = new PrismaClient();
  try {
    const createResep = await prisma.resep.create({
      data: {
        makananId: 1,
        bahan: [
          "5 buah Pisang Tanduk",
          "50gr Tepung beras",
          "25gr Tepung sagu",
          "100ml Santan",
          "1/2 butir Kelapa",
        ],
        bumbu: ["1/2sdt Garam", "125gr Gula merah"],
      },
    });
    return c.json({
      success: true,
      message: "Success creating",
      data: createResep,
    });
  } catch (err) {
    return c.json({
      success: false,
      message: "Failed on creating, error : " + err,
      data: {},
    });
  }
}
export default createResep;
