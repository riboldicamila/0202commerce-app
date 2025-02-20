import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { getProducts, deleteProduct } from "../services.js";

const Products = () => {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    getProducts()
      .then((data) => {
        setProducts(data.data);
      })
      .catch((error) => {
        console.error("Error fetching products:", error);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, []);

  const handleDelete = async (id) => {
    const data = await deleteProduct(id);

    if (data.success) {
      setProducts((prevProducts) =>
        prevProducts.filter((product) => product._id !== id)
      );
      console.log(`Product ${id} deleted successfully`);
    } else {
      console.error("Error deleting product:", data.message);
    }
  };

  return (
    <div className="py-20 bg-gray-50" id="products">
      <div className="container mx-auto px-6 md:px-20 lg:px-32">
        <h2 className="text-4xl font-semibold mb-2 text-center">
          Our Products
        </h2>
        <p className="text-gray-600 text-center mb-12">
          Discover authentic Argentinian treasures
        </p>

        {isLoading ? (
          <div className="flex justify-center items-center h-64">
            <div className="w-12 h-12 border-t-4 border-blue-500 border-solid rounded-full animate-spin"></div>
          </div>
        ) : (
          <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, transition: { staggerChildren: 0.1 } }}
          >
            {products.map((product) => (
              <motion.div
                key={product._id}
                className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300"
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
              >
                <div className="relative overflow-hidden group">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <button
                    onClick={() => handleDelete(product._id)}
                    className="absolute top-3 right-3 bg-white bg-opacity-80 hover:bg-opacity-100 rounded-full p-2 shadow-md opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    aria-label={`Delete ${product.name}`}
                  >
                    <svg
                      className="w-4 h-4 text-red-500"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                        clipRule="evenodd"
                      ></path>
                    </svg>
                  </button>
                </div>
                <div className="p-6">
                  <div className="flex justify-between items-start">
                    <h3 className="font-medium text-lg text-gray-900">
                      {product.name}
                    </h3>
                    <span className="text-blue-600 font-semibold">
                      ${product.price.toFixed(2)}
                    </span>
                  </div>
                  <div className="mt-4 flex justify-between items-center">
                    <span className="text-sm text-gray-500">
                      Made in Argentina
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default Products;
