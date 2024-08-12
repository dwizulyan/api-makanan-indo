import { Hono, Context } from "hono";
import DbService from "../services/dbService";
import { Prisma } from "@prisma/client";
import { validateMakanan } from "../middleware/makanan";
import { MakananDTO } from "../types";

const api = new Hono();
const db = new DbService();

api.get("/", async (c: Context) => {
    const where = c.req.query()
    try {
        const getMakanan = await db.getMakanan(where)
        return c.json({
            success: true,
            message: `Found records`,
            searchParam: where,
            data: getMakanan
        })

    } catch (err) {
        if (err instanceof Prisma.PrismaClientKnownRequestError)
            return c.json({
                success: true,
                message: err.toString(),
                data: {}
            })
    }
})

api.post("/", validateMakanan, async (c: Context) => {
    const data = await c.req.json()
    try {
        if (data.length > 0) {
            const createMakanan = await db.createManyMakanan(data)
            return c.json({
                success: true,
                message: "Successfully create new batch record",
                data: createMakanan,
            })


        }
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
            }, 400)
    }
})

api.delete("/", async (c: Context) => {
    const { id } = c.req.query()
    try {
        const deleteMakanan = await db.deleteMakanan({ id: Number(id) })
        return c.json({
            success: true,
            message: `Success delete : ${deleteMakanan.name}`,
            data: {}
        })
    }
    catch (err) {
        if (err instanceof Prisma.PrismaClientKnownRequestError)
            return c.json({
                success: false,
                message: err.toString(),
                data: {}
            }, 400)
    }
})

export default api;