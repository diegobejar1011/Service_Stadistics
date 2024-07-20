import { graphicController } from "./graphicDependencies";
import { Router } from "express";

export const graphicRouter = Router();

graphicRouter.get('/:id', graphicController.execute.bind(graphicController));

