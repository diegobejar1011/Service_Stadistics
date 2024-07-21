import { getOne } from "../../utils";
import { Format, Bars } from "../domain/entities";
import { DB_Repository } from "../domain/repositories/DB_Repository";

export class BarsService {
    constructor(private readonly db: DB_Repository) {}

    async execute(id: number): Promise<Bars[]> {
        try {
            const today = new Date();

            const documents: Format[] = await this.db.getData(id, today);

            const closeDoc: Format = getOne(documents, today);

            const { soil } = closeDoc;

            return [
                {
                    name: "Potasio",
                    level: soil.potassium
                },
                {
                    name: "Fósforo",
                    level: soil.phosphorous
                },
                {
                    name: "Nitrógeno",
                    level: soil.nitrogen
                }
            ];
            
        } catch (error: any) {
            throw new Error(error.message)
        }        
    }
}