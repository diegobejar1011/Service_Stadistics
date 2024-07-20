import express from "express";
import cors from "cors";
import { config } from "dotenv";

import { conn } from "./graphic/infraestructure/adapters/mongodb/infraestructure/conn";
import { graphicRouter } from "./graphic/infraestructure/graphicRoutes";

config();

const app = express();

app.use(cors());
app.use(express.json());

app.set('PORT', process.env.PORT || 4000);

app.use('/graphic', graphicRouter);

app.listen(app.get('PORT'), ()=> {
    console.log(`Server is running`);
})


conn();