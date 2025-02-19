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

app.get("/api/products", async (req, res) => {
    try {
        const products= await Product.find({});
        res.status(200).json({ sucess: true, data: products });
      } catch (error) {
        console.log("Error in fetch of product.", error.message);
        res.status(500).json({ success: false, message: "Server Error" });
      }
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

app.delete("/api/products/:id", async (req, res) => {
    
    const {id} = req.params;
    console.log("id:", id);

    try {
        await Product.findByIdAndDelete(id);
        res.status(200).json({ success: true, message: "Product deleted"})
    }
    catch (error){
        res.status(400).json({ success: false, message: "Error deleting. Product not found."})
    }
})


console.log(process.env.MONGO_URL);

app.listen(5001, () => {
  connectDB();
  console.log("Server started at... port 5000 ");
});
