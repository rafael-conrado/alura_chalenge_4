import mongoose from "mongoose";
import { } from 'dotenv/config'

mongoose.connect(process.env.DB);
let connectionDb = mongoose.connection;

export default connectionDb;