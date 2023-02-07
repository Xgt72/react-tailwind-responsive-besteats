import { AiOutlineClose, AiOutlineMenu, AiOutlineSearch } from "react-icons/ai";
import { BsFillCartFill } from "react-icons/bs";

export default function Navbar() {
    return (
        <header className="max-w-[1640px] mx-auto flex justify-between items-center p-4">
            {/* Left side */}
            <nav className="flex items-center">
                <button type="button" className="border-none p-0">
                    <AiOutlineMenu size={30} />
                </button>
                <h1 className="text-2xl sm:text-3xl lg:text-4xl px-2">
                    Best <span className="font-bold">Eats</span>
                </h1>
                <div className="hidden lg:flex items-center bg-gray-200 rounded-full p-1 text-[14px]">
                    <p className="bg-black text-white rounded-full p-2">
                        Delivery
                    </p>
                    <p className="p-2">Pickup</p>
                </div>
            </nav>

            {/* Search Input */}
            <div className="bg-gray-200 rounded-full flex items-center px-2 w-[200px] sm:w-[400px] lg:w-[500px]">
                <AiOutlineSearch size={25} />
                <input
                    type="text"
                    placeholder="Search foods"
                    className="bg-transparent p-2 focus:outline-none w-full"
                />
            </div>

            {/* Cart button */}
            <button
                type="button"
                className="bg-black text-white hidden md:flex items-center py-2 rounded-full"
            >
                <BsFillCartFill size={20} className="mr-2" />
                Cart
            </button>
            {/* Mobile Menu */}
            <nav className="bg-black/80 fixed w-full h-screen z-10 top-0 left-0"></nav>

            {/* Side drawer menu */}
            <div className="fixed top-0 left-0 w-[300px] h-screen bg-white z-10 duration-300">
                <button
                    type="button"
                    className="border-none p-0 absolute right-4 top-4"
                >
                    <AiOutlineClose size={30} className="" />
                </button>
            </div>
        </header>
    );
}
