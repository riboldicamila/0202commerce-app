import Product from "../models/product.models.js";


export const getProducts = async (req, res) => {
  try {
    const products = await Product.find({});
    res.status(200).json({ sucess: true, data: products });
  } catch (error) {
    console.log("Error in fetch of product.", error.message);
    res.status(500).json({ success: false, message: "Server Error" });
  }
};