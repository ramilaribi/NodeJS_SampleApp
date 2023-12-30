import dotenv from 'dotenv';
import mongoose from 'mongoose';

dotenv.config();

const MONGO_URL = process.env.MONGO_URL;


const connection = mongoose.createConnection(MONGO_URL).on('open', () => {
    console.log("Mongo connected");
}).on('error', () => {
    console.log("Mongo connection error");
});





export default connection;