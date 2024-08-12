import { Context } from "hono";
import { zValidator } from "@hono/zod-validator";
import { z, ZodError } from "zod";

const makananSchema = z.object({
    name: z.string(),
    asal: z.string(),
    bahan: z.array(z.string()),
    caraMembuat: z.array(z.string())
})

const final = makananSchema.or(z.array(makananSchema))

const validateMakanan = zValidator("json", final, (result, c: Context) => {
    if (!result.success) {
        if (result.error instanceof ZodError)
            return c.json({
                success: false,
                message: result.error,
                data: {}
            })
    }
})
export { validateMakanan }