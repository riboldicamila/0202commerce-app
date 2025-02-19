import express from "express";
import dotenv from "dotenv";
import { connectDB } from "./config/db.js";
import Product from "./models/product.models.js";

dotenv.config();

const app = express();

app.use(express.json()); //middleware function to allow json

app.get("/", (req, res) => {
  res.send("Server ready.");
});

app.post("/api/products", async (req, res) => {
  const product = req.body;

  if (!product.name || !product.price || !product.image) {
    return res
      .status(400)
      .json({ sucess: false, message: "Provide all fields." });
  }

  const newProduct = new Product(product);

  try {
    await newProduct.save();
    res.status(201).json({ sucess: true, data: newProduct });
  } catch (error) {
    console.log("Error in creation of product.", error.message);
    res.status(500).json({ success: false, message: "Server Error" });
  }
});


console.log(process.env.MONGO_URL);

app.listen(5001, () => {
  connectDB();
  console.log("Server started at... port 5000 ");
});
