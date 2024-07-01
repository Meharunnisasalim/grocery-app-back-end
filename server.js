import dotenv from "dotenv";
//import required modules
import express from 'express';
import morgan from "morgan";
import {dbConnect} from "./config/dbconfig.js";
import userRoutes from './routes/userRoutes.js';
import categoryRoutes from './routes/categoryRoutes.js'
import productRoutes from './routes/productRoutes.js'
import cors from 'cors';

dotenv.config();

const app=express();    //create an express application
const PORT=process.env.PORT || 8080;

//Connect mongodb to server
dbConnect();


// middlewares
app.use(cors());
app.use(express.json());
app.use(morgan('dev'))

//routes
app.use("/api/v1/auth",userRoutes);
app.use("/api/v1/category",categoryRoutes);
app.use("/api/v1/product",productRoutes);

//start the server

app.listen(PORT,()=>{
    console.log(`Server is running on ${process.env.DEV_MODE} mode on port ${PORT}`);
});