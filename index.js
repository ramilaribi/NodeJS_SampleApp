import express from "express";
import cors from"cors";
import morgan from "morgan";
import dotenv from "dotenv"
import "./config/DBconnection.js";
import productR from "./routes/productR.js"
const app = express();
dotenv.config()
const port = process.env.port;
app.use(express.json())
app.use(cors());
app.use(morgan("dev"));
app.use("/product",productR);


app.listen(port , ()=> {
    console.log('server is connected at http://localhost:'+port);
});

