import { DB_Repository } from "../../../../domain/repositories/DB_Repository";
import TerrariumModel from "./models/TerrariumModel";
import { Format } from "../../../../domain/entities";

export class MongoRepository implements DB_Repository {
    async getData(id: string, date: Date): Promise<Format[]> {
        try {

            const data: Format[] = await TerrariumModel.find({
                id: id,
                date: {
                     $regex: `^${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, '0')}-${date.getDate()}`
                }
            });

            return data;
            
        } catch (error: any) {
            console.error('Error fetching data:', error);
            throw error;
        }
        
    }
}