import { getOne, getAverage, getPercentage } from "../../utils"; 
import { Format, Lineal } from "../domain/entities";
import { DB_Repository } from "../domain/repositories/DB_Repository";

export class LinealService {
    constructor(private db: DB_Repository) {}

    async execute(id: number): Promise<Lineal[]> {
        try {
            let results = [];

            for(let i = 9; i > 0; i--) {

                const today = new Date();

                const current = today.setDate(today.getDate() - i);
                const currentDate = new Date(current);

                // Obtenemos todos los registros del día basado en el id
                const documents: Format[] = await this.db.getData(id, currentDate);

                // Encontramos el último registrado 
                const closeDoc = getOne(documents, today);

                // Extraemos el objeto
                const {temperature, humidity, uv}  = closeDoc;
                
                // Obtenemos ambos promedios
                const {avgTemperature, avgHumidity, avgUV} = getAverage(documents);

                // Obtenemos los procentajes
                const temperaturePercentage = getPercentage(temperature.t_max, temperature.t_min, avgTemperature);
                const humidityPercentage = getPercentage(humidity.h_max, humidity.h_min, avgHumidity);
                const uvPercentage = getPercentage(uv.uv_max, uv.uv_min, avgUV);

                // Agregamos el objeto al array
                results.push({
                    date: currentDate.toISOString(),
                    temperature: temperaturePercentage,
                    humidity: humidityPercentage,
                    uv: uvPercentage
                })

            }
            
            return results;
            
        } catch (error: any) {
            throw new Error(error.message)
        }
    }
}