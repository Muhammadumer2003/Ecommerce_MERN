import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import mongoose from "mongoose";    
import cookieParser from "cookie-parser";

dotenv.config();

const app = express();


//mongo db connection
const Mongo_uri=process.env.Mongo;

if(!Mongo_uri) throw new Error("MongoDB connection string is not found");

mongoose.connect(Mongo_uri).then(()=>console.log("MongoDB connected"))
.catch((err)=>console.log(err));


app.use(cors({
    origin: "http://localhost:5173",
    methods: ["GET", "POST", "PUT", "DELETE"],
    allowedHeaders: ["Content-Type", "Authorization"],
}));

app.use(express.json());
app.use(cookieParser());

const PORT = process.env.PORT || 5000;

app.listen(PORT,()=>console.log(`server is running on port : ${PORT}` ));
