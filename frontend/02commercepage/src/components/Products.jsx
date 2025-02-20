import { useState, useEffect } from "react";
import { motion } from "framer-motion";

const Products = () => {
  const initialProducts = [
    {
      id: 1,
      name: "Argentinian Leather Bag",
      price: 249.99,
      image: "https://images.unsplash.com/photo-1590874103328-eac38a683ce7?auto=format&fit=crop&q=80&w=500",
    },
    {
      id: 2,
      name: "Malbec Red Wine",
      price: 89.99,
      image: "https://images.unsplash.com/photo-1586370434639-0fe27570ab31?auto=format&fit=crop&q=80&w=500",
    },
    {
      id: 3,
      name: "Chimichurri Sauce",
      price: 14.99,
      image: "https://images.unsplash.com/photo-1627308595171-d1b5d67129c4?auto=format&fit=crop&q=80&w=500",
    },
    {
      id: 4,
      name: "Alpaca Wool Blanket",
      price: 179.99,
      image: "https://images.unsplash.com/photo-1594125674956-61a9b49c8eeb?auto=format&fit=crop&q=80&w=500",
    },
    {
      id: 5,
      name: "Argentinian Mate Set",
      price: 39.99,
      image: "https://images.unsplash.com/photo-1624358005230-cb07c8d95bfc?auto=format&fit=crop&q=80&w=500",
    },
    {
      id: 6,
      name: "Dulce de Leche",
      price: 12.99,
      image: "https://images.unsplash.com/photo-1539109146466-1cf76ea702c1?auto=format&fit=crop&q=80&w=500",
    },
  ];

  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchProducts = async () => {
        //remove later, add real service
      setTimeout(() => {
        setProducts(initialProducts);
        setIsLoading(false);
      }, 800);
    };

    fetchProducts();
  }, []);

  const handleDelete = async (id) => {
    try {
      // Simulate API call
     //remove later, add real service
      setProducts(products.filter(product => product.id !== id));
      
      console.log(`Product ${id} deleted successfully`);
    } catch (error) {
      console.error("Error deleting product:", error);
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 12
      }
    },
    exit: {
      scale: 0.8,
      opacity: 0,
      transition: {
        duration: 0.3
      }
    }
  };

  return (
    <div className="py-20 bg-gray-50" id="products">
      <div className="container mx-auto px-6 md:px-20 lg:px-32">
        <h2 className="text-4xl font-semibold mb-2 text-center">Our Products</h2>
        <p className="text-gray-600 text-center mb-12">Discover authentic Argentinian treasures</p>

        {isLoading ? (
          <div className="flex justify-center items-center h-64">
            <div className="w-12 h-12 border-t-4 border-blue-500 border-solid rounded-full animate-spin"></div>
          </div>
        ) : (
          <motion.div 
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {products.map((product) => (
              <motion.div
                key={product.id}
                className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300"
                variants={itemVariants}
                layout
                exit="exit"
              >
                <div className="relative overflow-hidden group">
                  <img 
                    src={product.image} 
                    alt={product.name} 
                    className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <button
                    onClick={() => handleDelete(product.id)}
                    className="absolute top-3 right-3 bg-white bg-opacity-80 hover:bg-opacity-100 rounded-full p-2 shadow-md opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    aria-label={`Delete ${product.name}`}
                  >
                    <svg className="w-4 h-4 text-red-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                      <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd"></path>
                    </svg>
                  </button>
                </div>
                <div className="p-6">
                  <div className="flex justify-between items-start">
                    <h3 className="font-medium text-lg text-gray-900">{product.name}</h3>
                    <span className="text-blue-600 font-semibold">${product.price.toFixed(2)}</span>
                  </div>
                  <div className="mt-4 flex justify-between items-center">
                    <span className="text-sm text-gray-500">Made in Argentina</span>
                    <motion.button 
                      className="px-4 py-2 rounded text-sm bg-blue-50 text-blue-700 hover:bg-blue-100 transition-colors duration-300"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      View Details
                    </motion.button>
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