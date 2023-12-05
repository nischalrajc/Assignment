import express from "express";
import dotenv from "dotenv";
import connectDB from './config/db.js';
import userRoutes from './routes/userRouters.js';
import cookieParser from "cookie-parser";
import cors from 'cors';


dotenv.config()

const port=process.env.PORT || 5000

connectDB();

const app = express();

app.use(cors());

app.use(cookieParser());

app.use(express.json());
app.use(express.urlencoded({extended:true}));

app.use('/api/users',userRoutes);

app.listen(port,()=>console.log(`server listening to localhost:${port} `))   


