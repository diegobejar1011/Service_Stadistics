import { Format } from "../entities";

export interface DB_Repository {
    getData(id: number, date: Date): Promise<Format[]>;
}