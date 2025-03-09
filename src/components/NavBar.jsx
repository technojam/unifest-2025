'use client';

import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navLinks = [
    { href: "/", label: "HOME" },
    { href: "/#events", label: "EVENTS" },
    { href: "/sponsors", label: "SPONSORS" },
    { href: "/organisers", label: "ORGANISING TEAM" },
    { href: "/contact-us", label: "CONTACT US" }
];

const NavBar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const pathname = usePathname();

    return (
        <nav className="bg-black/80 backdrop-blur-sm px-4 h-16 w-[96%] max-w-7xl mx-auto rounded-xl shadow-lg border border-white/10 flex items-center justify-between z-50 mt-4">
            {/* Logo */}
            <div className="flex items-center flex-shrink-0 py-3 sm:py-4 md:py-5">
                <img src="/vercel.svg" alt="UNIFEST 2025 Logo" className="object-contain w-16 h-24 sm:w-28 md:w-32" />
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex flex-grow justify-center">
                <ul className="flex space-x-2 lg:space-x-6 xl:space-x-10">
                    {navLinks.map(({ href, label }) => (
                        <li key={href}>
                            <Link 
                                href={href} 
                                className="relative px-2 py-2 text-white font-medium lg:px-4"
                            >
                                <span
                                    className={`absolute inset-0 border-2 border-white border-dotted transition-opacity ${
                                        pathname === href ? "opacity-70" : "opacity-0 hover:opacity-20"
                                    }`}
                                ></span>
                                <span className="relative z-10 text-xs sm:text-sm md:text-base lg:text-base tracking-wide">
                                    {label}
                                </span>
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>

            {/* Buy Passes Button - Desktop */}
            <div className="hidden md:block">
                <button className="bg-[#C01E0D] text-white px-3 py-2 md:px-4 md:py-3 lg:px-5 lg:py-3.5 rounded-lg shadow-[inset_1px_4px_8px_rgba(0,0,0,0.4)] hover:bg-red-700 transition-transform transform hover:scale-105 duration-200 text-sm md:text-base">
                    Buy Passes
                </button>
            </div>

            {/* Mobile Menu Button */}
            <button
                className="md:hidden text-white p-2 rounded-lg hover:bg-white/10 transition-colors"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                aria-label="Toggle menu"
            >
                {isMenuOpen ? (
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 24 24" stroke="currentColor" fill="none">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                ) : (
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 24 24" stroke="currentColor" fill="none">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                    </svg>
                )}
            </button>

            {/* Mobile Menu */}
            <div
                className={`fixed top-20 left-0 right-0 bg-black/90 backdrop-blur-sm p-4 rounded-xl z-50 mx-4 sm:mx-8 transition-all duration-300 ease-in-out ${
                    isMenuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0 overflow-hidden pointer-events-none"
                }`}
            >
                <ul className="flex flex-col space-y-3 pt-2">
                    {navLinks.map(({ href, label }) => (
                        <li key={href}>
                            <Link 
                                href={href} 
                                onClick={() => setIsMenuOpen(false)}
                                className="relative px-4 py-3 block text-white font-medium"
                            >
                                <span
                                    className={`absolute inset-0 border-2 border-white border-dotted ${
                                        pathname === href ? "opacity-70" : "opacity-0 hover:opacity-20"
                                    }`}
                                ></span>
                                <span className="relative z-10 tracking-wide text-sm sm:text-base">
                                    {label}
                                </span>
                            </Link>
                        </li>
                    ))}
                </ul>

                {/* Buy Passes Button - Mobile */}
                <div className="py-4">
                    <button className="bg-[#C01E0D] w-full text-white py-3 rounded-lg shadow-[inset_1px_4px_8px_rgba(0,0,0,0.4)] hover:bg-red-700 transition-colors font-medium text-sm sm:text-base">
                        Buy Passes
                    </button>
                </div>
            </div>
        </nav>
    );
};

export default NavBar;