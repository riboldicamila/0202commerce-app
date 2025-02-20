import express from "express";
import mongoose from "mongoose";

import {
  deleteProduct,
  getProducts,
  postProduct,
  updateProduct,
} from "../controllers/product.controller.js";

const router = express.Router();

router.get("/", getProducts);
//structure with controllers, to more complex code

router.post("/", postProduct);

router.put("/:id", updateProduct);

router.delete("/:id", deleteProduct);

console.log(process.env.MONGO_URL);

export default router;
