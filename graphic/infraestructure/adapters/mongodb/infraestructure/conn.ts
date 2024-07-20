import mongoose from "mongoose";
import { url } from "../domain/config";

export const conn = async () => {
    try {
        await mongoose.connect(url)
        console.log("Database is connected")
    } catch (error) {
        console.error(error)
    }
}