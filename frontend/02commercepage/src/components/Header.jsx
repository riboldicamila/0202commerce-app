import backgroundHeader from "../assets/background-header.jpg";
import Navbar from "./Navbar";

const Header = () => {
    return (
        <div 
            className='min-h-screen mb-4 bg-cover bg-center flex flex-col items-center w-full overflow-hidden relative' 
            style={{backgroundImage: `url(${backgroundHeader})`}} 
            id='Header'
        >
            <Navbar/>
            <div className='container text-center mx-auto py-4 px-6 md:px-20 lg:px-32 text-white flex-grow flex flex-col justify-center'>
                <h2 className='text-5xl sm:text-6xl md:text-[82px] inline-block max-w-3xl font-semibold'>Explore argentinian products</h2>
                <div className="space-x-6 mt-16">
                    <a href="#products" className="border border-white px-8 py-3 rounded hover:bg-white hover:text-blue-900 transition-colors">Products</a> 
                    <a href="#about" className="bg-blue-500 border-white px-8 py-3 rounded hover:bg-blue-600 transition-colors">About Us</a> 
                </div>
            </div>
        </div>
    )
}

export default Header