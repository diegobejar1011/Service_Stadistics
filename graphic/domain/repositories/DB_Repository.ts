import { Format } from "../entities";

export interface DB_Repository {
    getData(id: string, date: Date): Promise<Format[]>;
}