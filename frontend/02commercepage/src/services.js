import axios from "axios";

const API_URL = "http://localhost:5002/api/products";

export const getProducts = async () => {
  try {
    const response = await axios.get(API_URL);
    return response.data; 
  } catch (error) {
    console.error("Error fetching products:", error.response?.data || error.message);
    return { success: false, message: "Error fetching products" };
  }
};

export const deleteProduct = async (id) => {
  try {
    const response = await axios.delete(`${API_URL}/${id}`);
    return response.data;
  } catch (error) {
    console.error("Error deleting product:", error.response?.data || error.message);
    return { success: false, message: "Error deleting product" };
  }
};

export const addProduct = async (productData) => {
  try {
    const response = await axios.post(`${API_URL}`, productData, {
      headers: {
        "Content-Type": "application/json",
      },
    });
    return response.data; 
  } catch (error) {
    console.error("Error adding product:", error);
    throw error;
  }
};

