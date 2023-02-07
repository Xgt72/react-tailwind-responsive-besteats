import { useState } from "react";
import {
    AiOutlineClose,
    AiOutlineMenu,
    AiOutlineSearch,
    AiFillTag,
} from "react-icons/ai";
import { BsFillCartFill, BsFillSaveFill } from "react-icons/bs";
import { TbTruckDelivery } from "react-icons/tb";
import { FaUserFriends, FaWallet } from "react-icons/fa";
import { MdFavorite, MdHelp } from "react-icons/md";

export default function Navbar() {
    const [nav, setNav] = useState(false);

    return (
        <header className="max-w-[1640px] mx-auto flex justify-between items-center p-4">
            {/* Left side */}
            <nav className="flex items-center">
                <button
                    type="button"
                    className="border-none p-0"
                    onClick={() => setNav(!nav)}
                >
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
            {nav && (
                <div className="bg-black/80 fixed w-full h-screen z-10 top-0 left-0"></div>
            )}

            {/* Side drawer menu */}
            <div
                className={
                    nav
                        ? "fixed top-0 left-0 w-[300px] h-screen bg-white z-10 duration-300"
                        : "fixed top-0 left-[-100%] w-[300px] h-screen bg-white z-10 duration-300"
                }
            >
                <button
                    type="button"
                    className="border-none p-0 absolute right-4 top-4"
                    onClick={() => setNav(!nav)}
                >
                    <AiOutlineClose size={30} className="" />
                </button>
                <h2 className="text-2xl p-4">
                    Best <span className="font-bold">Eats</span>
                </h2>
                <nav>
                    <ul>
                        <li className="text-xl py-4 flex">
                            <TbTruckDelivery className="mr-4" size={25} />{" "}
                            Orders
                        </li>
                        <li className="text-xl py-4 flex">
                            <MdFavorite className="mr-4" size={25} /> Favorites
                        </li>{" "}
                        <li className="text-xl py-4 flex">
                            <FaWallet className="mr-4" size={25} /> Wallet
                        </li>{" "}
                        <li className="text-xl py-4 flex">
                            <MdHelp className="mr-4" size={25} /> Help
                        </li>{" "}
                        <li className="text-xl py-4 flex">
                            <AiFillTag className="mr-4" size={25} /> Promotions
                        </li>{" "}
                        <li className="text-xl py-4 flex">
                            <BsFillSaveFill className="mr-4" size={25} /> Best
                            One
                        </li>{" "}
                        <li className="text-xl py-4 flex">
                            <FaUserFriends className="mr-4" size={25} /> Invite
                            Friends
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    );
}
