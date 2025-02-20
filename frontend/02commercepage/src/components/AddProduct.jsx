import { useState } from 'react';
import { motion } from 'framer-motion';
import { addProduct } from '../services';

const AddProduct = () => {
  const [formData, setFormData] = useState({
    name: '',
    price: '',
    image: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      await addProduct(formData); 
      console.log("Product added:", formData);

      setFormData({
        name: "",
        price: "",
        image: "",
      });

      setShowSuccess(true);
      setTimeout(() => setShowSuccess(false), 3000);
    } catch (error) {
      console.error("Error adding product:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const pageVariants = {
    initial: { opacity: 0 },
    animate: { 
      opacity: 1,
      transition: { 
        duration: 0.8,
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    initial: { y: 20, opacity: 0 },
    animate: { 
      y: 0, 
      opacity: 1,
      transition: { 
        type: "spring",
        stiffness: 100, 
        damping: 12 
      }
    }
  };

  return (
    <div className="py-24 bg-blue-50" id="add-products">
      <div className="container mx-auto px-6 md:px-20 lg:px-32">
        <motion.div
          className="mb-16 text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-xs uppercase tracking-widest mb-3">EXPAND OUR COLLECTION</h2>
          <h1 className="text-7xl md:text-8xl font-normal mb-2">ADD PRODUCT</h1>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
          <motion.div 
            className="order-2 md:order-1"
            variants={pageVariants}
            initial="initial"
            animate="animate"
          >
            <motion.form 
              onSubmit={handleSubmit}
              className="space-y-8"
            >
              <motion.div variants={itemVariants}>
                <label className="block text-xs uppercase tracking-widest mb-2" htmlFor="name">
                  Product Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full border-b border-gray-300 py-2 bg-transparent focus:border-black transition-colors duration-300 outline-none"
                  placeholder="Enter product name"
                />
              </motion.div>

              <motion.div variants={itemVariants}>
                <label className="block text-xs uppercase tracking-widest mb-2" htmlFor="price">
                  Price (USD)
                </label>
                <input
                  type="number"
                  id="price"
                  name="price"
                  value={formData.price}
                  onChange={handleChange}
                  required
                  min="0"
                  step="0.01"
                  className="w-full border-b border-gray-300 py-2 bg-transparent focus:border-black transition-colors duration-300 outline-none"
                  placeholder="0.00"
                />
              </motion.div>

              <motion.div variants={itemVariants}>
                <label className="block text-xs uppercase tracking-widest mb-2" htmlFor="image">
                  Image URL
                </label>
                <input
                  type="url"
                  id="image"
                  name="image"
                  value={formData.image}
                  onChange={handleChange}
                  required
                  className="w-full border-b border-gray-300 py-2 bg-transparent focus:border-black transition-colors duration-300 outline-none"
                  placeholder="https://example.com/image.jpg"
                />
              </motion.div>

              <motion.div variants={itemVariants} className="pt-6">
                <motion.button
                  type="submit"
                  disabled={isSubmitting}
                  className="px-8 py-3 border border-black hover:bg-black hover:text-white transition-colors duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  {isSubmitting ? 'ADDING PRODUCT...' : 'ADD PRODUCT'}
                </motion.button>
                
                {showSuccess && (
                  <motion.div
                    className="mt-4 text-green-600"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0 }}
                  >
                    Product added successfully!
                  </motion.div>
                )}
              </motion.div>
            </motion.form>
          </motion.div>

          <motion.div 
            className="order-1 md:order-2 flex flex-col justify-center"
            variants={pageVariants}
            initial="initial"
            animate="animate"
          >
            <motion.div 
              variants={itemVariants}
              className="relative mb-8"
            >
              <div className="w-full h-64 md:h-96 bg-gray-100 rounded-sm overflow-hidden">
                {formData.image ? (
                  <img 
                    src={formData.image} 
                    alt="Product preview" 
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      e.target.onerror = null;
                      e.target.src = "/api/placeholder/800/600";
                    }}
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center text-gray-400">
                    <span>Image Preview</span>
                  </div>
                )}
              </div>
            </motion.div>

            <motion.div variants={itemVariants}>
              <h3 className="text-2xl mb-2">
                {formData.name || "Product Name"}
              </h3>
              {formData.price && (
                <div className="text-xl">${parseFloat(formData.price).toFixed(2)}</div>
              )}
            </motion.div>
          </motion.div>
        </div>

        <motion.div 
          className="mt-24 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
        >
          <p className="text-sm text-gray-600 max-w-2xl mx-auto">
            Our curated collection showcases the finest products from Argentina. 
            Every addition undergoes careful review to ensure it meets our quality standards.
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default AddProduct;
