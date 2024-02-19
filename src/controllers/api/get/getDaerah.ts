import { Context } from "hono";
import { PrismaClient } from "@prisma/client";

async function getDaerah(c: Context) {
  const prisma = new PrismaClient();

  const getDaerah = await prisma.daerah.findMany();

  return c.json({
    success: true,
    message: "Data successfully fetched",
    data: getDaerah,
  });
}

export default getDaerah;
