import { Hono, Context } from "hono";
import DbService from "../services/dbService";
import { Prisma } from "@prisma/client";

const api = new Hono();
const db = new DbService();

api.post("/", async (c: Context) => {
    const data = {
        name: "Ayam Geprek",
        asal: "Jogjakarta",
        bahan: ["Unknown"],
        caraMembuat: ["Unknown"]
    }
    try {
        const createMakanan = await db.createMakanan(data)
        return c.json({
            success: true,
            message: "Successfully create new record",
            data: createMakanan,
        })

    } catch (err) {
        if (err instanceof Prisma.PrismaClientKnownRequestError)
            return c.json({
                success: false,
                message: err.toString(),
            })
    }
})

export default api;