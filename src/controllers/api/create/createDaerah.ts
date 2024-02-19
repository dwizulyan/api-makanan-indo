import { Context } from "hono";
import { PrismaClient } from "@prisma/client";

async function createDaerah(c: Context) {
  const prisma = new PrismaClient();

  try {
    const create = await prisma.daerah.create({
      data: {
        nama: "Kediri",
      },
    });

    return c.json({
      success: true,
      message: "Creating file",
      data: create,
    });
  } catch (err) {
    return c.json({
      success: false,
      message: err,
      data: {},
    });
  }
}

export default createDaerah;
