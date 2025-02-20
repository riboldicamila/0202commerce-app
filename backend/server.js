import express from "express";
import dotenv from "dotenv";
import path from "path";
import cors from "cors";

import { connectDB } from "./config/db.js";

import productRoutes from "./routes/product.route.js"

dotenv.config();


const app = express();
app.use(cors({
  origin: process.env.NODE_ENV === "production" 
    ? process.env.CLIENT_URL 
    : "http://localhost:5179"
}));

const PORT = process.env.PORT || 5000;

const __dirname= path.resolve(); //deployment for back and front

app.use(express.json()); //middleware function to allow json

app.use("/api/products", productRoutes); //avoid repeting /api/products in product.route.js. Is the prefix route. 


//deployment for back and front
if(process.env.NODE_ENV === "production"){
  app.use(express.static(path.join(__dirname, "../frontend/02commercepage/dist")));
  
  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "../frontend", "02commercepage", "dist", "index.html"));
  })
}

app.listen(PORT, () => {
  connectDB();
  console.log("Server started at port ", PORT);
});
