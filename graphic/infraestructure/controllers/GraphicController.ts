import { Request, Response } from 'express';
import { GraphicService } from '../../application';

export class GraphicController {
    constructor ( private readonly graphicService: GraphicService) {}

    async execute(req: Request, res: Response): Promise<any> {
        try {
            const { id } = req.params;
            const data = await this.graphicService.execute(id);
            res.status(200).json({ data });
        } catch (error: any) {
            res.status(404).json(error.message)
        }
    }
}