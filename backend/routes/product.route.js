import express from "express";
import mongoose from "mongoose";

import Product from "./../models/product.models.js";
import { getProducts } from "../controllers/product.controller.js";

const router = express.Router();


router.get("/", getProducts);
//structure with controllers, to more complex code


router.post("/", async (req, res) => {
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

router.put("//:id", async (req, res) => {
  const { id } = req.params;

  const product = req.body;

//   if (!mongoose.Types.ObjectId.isValid(id)) {
//     return res
//       .status(404)
//       .json({ success: false, message: "Invalid PRoduct Id" });
//   }

  try {
    const updatedProduct = await Product.findByIdAndUpdate(id, product, {
      new: true,
    });
    res.status(200).json({ success: true, data: updatedProduct });
  } catch (error) {
    res.status(500).json({ success: false, message: "Server Error" });
  }
});

router.delete("//:id", async (req, res) => {
  const { id } = req.params;
  console.log("id:", id);

  try {
    await Product.findByIdAndDelete(id);
    res.status(200).json({ success: true, message: "Product deleted" });
  } catch (error) {
    res
      .status(400)
      .json({ success: false, message: "Error deleting. Product not found." });
  }
});

console.log(process.env.MONGO_URL);


export default router;
