import { Prisma, PrismaClient, Makanan } from "@prisma/client";
import { MakananDTO } from "../types";

/**
 * Database Service, this class are responsible to interact with database using prisma ORM
 */
class DbService {
    prisma = new PrismaClient();
    constructor() { }

    /**
     * Create new makanan record
     * 
     * @param data - data to be inserted into database
     */
    async createMakanan(data: MakananDTO): Promise<Makanan | Error> {
        try {
            const createMakanan: Makanan = await this.prisma.makanan.create({
                data: data
            })
            return createMakanan;
        } catch (err) {
            return new Error("Unknown Error")
        }
    }
}
export default DbService 