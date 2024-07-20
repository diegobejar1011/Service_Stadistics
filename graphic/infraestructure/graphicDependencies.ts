// Technologies
import { MongoRepository } from "./adapters/mongodb/infraestructure/MongoRepository";

// Services
import { GraphicService, BarsService, LinealService } from "../application";

// Controllers
import { GraphicController } from "./controllers/GraphicController";

const mongodb = new MongoRepository();

const linealService = new LinealService(mongodb);
const barsService = new BarsService(mongodb);

const graphicService = new GraphicService(linealService, barsService);

export const graphicController = new GraphicController(graphicService);

