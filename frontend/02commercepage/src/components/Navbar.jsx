import { useState } from "react";
import logo from "../assets/logo.png";

function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <div className="w-full z-10 pt-4">
      <div className="container mx-auto flex justify-between items-center py-4 px-6 md:px-20 lg:px-32">
        <img src={logo} alt="logo" className="h-16 md:h-20" />
        
        {/* Desktop Navigation */}
        <div className="hidden md:block">
          <ul className="flex gap-7 text-white">
            <li>
              <a href="#Header" className="cursor-pointer hover:text-gray-300 transition-colors">
                Patagonia Home
              </a>
            </li>
            <li>
              <a href="#products" className="cursor-pointer hover:text-gray-300 transition-colors">
                Products
              </a>
            </li>
            <li>
              <a href="#add-products" className="cursor-pointer hover:text-gray-300 transition-colors">
                Add Products
              </a>
            </li>
            <li>
              <a href="#testimonials" className="cursor-pointer hover:text-gray-300 transition-colors">
                Testimonials
              </a>
            </li>
          </ul>
        </div>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-white z-20"
          onClick={toggleMobileMenu}
          aria-label="Toggle mobile menu"
        >
          {mobileMenuOpen ? (
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
              <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd"></path>
            </svg>
          ) : (
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
              <path fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd"></path>
            </svg>
          )}
        </button>
        
        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden fixed inset-0 bg-gray-900 bg-opacity-90 z-10 overflow-y-auto">
            <div className="flex justify-between items-center p-6 border-b border-gray-700">
              <img src={logo} alt="logo" className="h-12" />
              <button 
                onClick={toggleMobileMenu}
                aria-label="Close menu"
                className="text-white"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd"></path>
                </svg>
              </button>
            </div>
            <ul className="flex flex-col items-center gap-8 mt-16 px-5 text-xl font-medium text-white">
              <li>
                <a 
                  href="#Header" 
                  className="px-4 py-2 block w-full text-center hover:text-gray-300 transition-colors"
                  onClick={toggleMobileMenu}
                >
                  Patagonia Home
                </a>
              </li>
              <li>
                <a 
                  href="#products" 
                  className="px-4 py-2 block w-full text-center hover:text-gray-300 transition-colors"
                  onClick={toggleMobileMenu}
                >
                  Products
                </a>
              </li>
              <li>
                <a 
                  href="#add-products" 
                  className="px-4 py-2 block w-full text-center hover:text-gray-300 transition-colors"
                  onClick={toggleMobileMenu}
                >
                  Add Products
                </a>
              </li>
              <li>
                <a 
                  href="#testimonials" 
                  className="px-4 py-2 block w-full text-center hover:text-gray-300 transition-colors"
                  onClick={toggleMobileMenu}
                >
                  Testimonials
                </a>
              </li>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
}

export default Navbar;