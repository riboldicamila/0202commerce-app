import logo from "../assets/logo.png";

function Navbar() {
  return (
    <div className="absolute top-0 left-0 w-full z-10">
      <div className="container mx-auto flex justify-between items-center py-4 px-6 md:px-20 lg:px-32 bg-transparent">
        <img src={logo} alt="logo" />
        <div>
          <ul className="hidden md:flex gap-7 text-white">
            <a href="#Header" className="cursor-pointer hover:text-gray-400">
              Patagonia Home
            </a>
            <a href="#Header" className="cursor-pointer hover:text-gray-400">
              Products
            </a>
            <a href="#Header" className="cursor-pointer hover:text-gray-400">
              Add Products
            </a>
            <a href="#Header" className="cursor-pointer hover:text-gray-400">
              Testimonials
            </a>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
