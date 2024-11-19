'use client';
import { useState } from "react";
import Link from "next/link";
import { FaXTwitter } from "react-icons/fa6";
import { FaBars } from "react-icons/fa";
export default function Header() {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const toggleDropdown = () => {
        setIsDropdownOpen(!isDropdownOpen);
    };

    return (
        <div className="flex w-full justify-center mt-2">
            <div className="flex flex-col w-full bg-gradient-to-l from-violet-500 to-cyan-700  rounded-2xl m-2 h-10">
                <div className="flex flex-row justify-between items-center h-full ">
                    <div className="flex flex-row w11/12 items-center space-x-5 ml-5">
                        <a className="font-bold">UwULinks</a>
                        <FaXTwitter />
                    </div>
                    <FaBars 
                        onClick={toggleDropdown}
                        className="cursor-pointer mr-4"
                    />
                    {isDropdownOpen && (
                        <div className="absolute right-3 top-12 mt-2 w-48 bg-gradient-to-bl from-violet-500 to-cyan-400 rounded-md shadow-lg z-10">
                            <a className="block px-4 py-2 text-gray-800 hover:bg-gray-200 hover:rounded-t-md hover:bg-opacity-50">Classement</a>
                            <Link href="/login" className="block px-4 py-2 text-gray-800 hover:bg-gray-200 hover:bg-opacity-50">
                            Connexion
                            </Link>
                            <Link href="/register" className="block w-full text-left px-4 py-2 text-gray-800 hover:rounded-b-md hover:bg-gray-200 hover:bg-opacity-50">
                                S'inscrire
                            </Link>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}