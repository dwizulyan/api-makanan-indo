import { Context } from "hono";
import { PrismaClient } from "@prisma/client";

async function getResep(c: Context) {
  const prisma = new PrismaClient();
  try {
    const getResep = await prisma.resep.findMany();
    return c.json({
      success: true,
      message: "Getting resep....",
      data: getResep,
    });
  } catch (err) {
    return c.json({
      success: false,
      message: "Failed to get the recipe",
      data: {},
    });
  }
}
export default getResep;
