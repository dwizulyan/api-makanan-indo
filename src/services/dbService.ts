import { Prisma, PrismaClient, Makanan } from "@prisma/client";
import { MakananDTO } from "../types";

/**
 * Database Service, this class are responsible to interact with database using prisma ORM
 */
class DbService {
    prisma = new PrismaClient();
    constructor() { }
    /**
     * Get record from makanan table.
     * If where param leaved empty, will get whole makanan table records
     * 
     * @param where - Prisma.MakananWhereInput - specify which data to get
     * @returns 
     * 
     */
    async getMakanan(where?: Prisma.MakananWhereInput) {
        try {
            if (where) {
                return await this.prisma.makanan.findMany({
                    where: where
                })
            } else {
                return await this.prisma.makanan.findMany()
            }
        }
        catch (err) {
            return err as Prisma.PrismaClientKnownRequestError
        }
    }

    /**
     * Create new makanan record
     * 
     * @param data - data to be inserted into database
     */
    async createMakanan(data: MakananDTO): Promise<Makanan | Prisma.PrismaClientKnownRequestError> {
        try {
            const createMakanan: Makanan = await this.prisma.makanan.create({
                data: data
            })
            return createMakanan;
        } catch (err) {
            return err as Prisma.PrismaClientKnownRequestError
        }
    }

    /**
     * Delete a record from makanan table
     * 
     * @param where - Prisma.MakananWhereUniqueInput - Where clause, shows which one to delete
     * @returns 
     */
    async deleteMakanan(where: Prisma.MakananWhereUniqueInput) {
        try {
            const deleteMakanan = await this.prisma.makanan.delete({
                where: where
            })
            return deleteMakanan
        } catch (err) {
            return err as Prisma.PrismaClientKnownRequestError
        }
    }
}
export default DbService 