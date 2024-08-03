import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import routes from "./router/routes.js";
import cors from "cors"
dotenv.config();
const app=express();

const PORT=process.env.PORT || 2000;
const DB=process.env.MONGO;
console.log(DB);

async function connectDB(){
    mongoose.connect(DB)
    .then(()=>{console.log("MongoDB connected succesfully")})
    .catch((err)=>{console.log("Error in connecting:",err)});
}

app.use(express.urlencoded({extended:false}));
app.use(express.json());
app.use(cors());

const startServer = async () => {
    await connectDB();

    app.listen(PORT, "0.0.0.0", () => {
        console.log(`Server running on port ${PORT}`);
    });

    routes(app);
};

startServer();

