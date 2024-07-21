import { LinealService, BarsService } from "./index";
import { Graphic } from "../domain/entities";

export class GraphicService {
    constructor(
        private readonly linealService: LinealService,
        private readonly barsService: BarsService,
    ) {}
    
    async execute(id: number): Promise<Graphic> {
        try {

            const lineal = await this.linealService.execute(id)
            const bars = await this.barsService.execute(id)

            return { lineal, bars };

        } catch (error: any) {
            
            throw new Error(error.message);
        }

    }
}