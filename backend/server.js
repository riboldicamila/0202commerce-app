import express from "express";
import dotenv from "dotenv";
import { connectDB } from "./config/db.js";

import productRoutes from "./routes/product.route.js"

dotenv.config();

const app = express();

app.use(express.json()); //middleware function to allow json

app.use("/api/products", productRoutes); //avoid repeting /api/products in product.route.js. Is the prefix route. 


app.listen(5002, () => {
  connectDB();
  console.log("Server started at... port 5000 ");
});
