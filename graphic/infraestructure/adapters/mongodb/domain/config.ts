import { config } from "dotenv";

config();

export const url = process.env.MONGO_URL || "mongodb+srv://admin:Ii8fCl7CX7R9yiJG@terrariums.i56lffp.mongodb.net/Terrariums"
