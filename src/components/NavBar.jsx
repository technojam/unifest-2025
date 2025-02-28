'use client';

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

const NavBar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const pathname = usePathname();

    return (
        <nav className="bg-black/80 backdrop-blur-sm pr-4 h-16 w-[96%] max-w-7xl rounded-xl shadow-lg border border-white/10 flex items-center z-50 mt-4">
            <div className="flex items-center justify-between w-full">
                <div className="flex items-center ml-0 ">
                    <div className="w-43 h-23 relative overflow-hidden flex-shrink-0">
                        <img
                            src="/logo/logo 1-min (1) 2.png"
                            alt="UNIFEST 2025 Logo"
                            className="object-contain w-full h-full"
                        />
                    </div>
                </div>

                {/* Mobile menu button */}
                <button
                    className="md:hidden text-white p-2 rounded-lg hover:bg-white/10 transition-colors"
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                    aria-label="Toggle menu"
                >
                    {isMenuOpen ? (
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    ) : (
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                        </svg>
                    )}
                </button>

                {/* Desktop Navigation */}
                <div className="hidden md:flex items-center justify-center flex-grow">
                    <ul className="flex space-x-4 sm:space-x-6 lg:space-x-10 flex-wrap justify-center">
                        <li>
                            <Link href="/" className="text-white relative px-3 sm:px-4 py-2 sm:py-3 font-medium ">
                                <span className={`absolute inset-0 border-2 border-white border-dotted ${pathname === '/' ? 'opacity-70' : 'opacity-0 hover:opacity-20'}`}></span>
                                <span className="relative z-10">HOME</span>
                            </Link>
                        </li>
                        <li>
                            <Link href="/events" className="text-white relative px-3 sm:px-4 py-2 sm:py-3 font-medium">
                                <span className={`absolute inset-0 border-2 tracking-wide border-white border-dotted ${pathname === '/events' ? 'opacity-70' : 'opacity-0 hover:opacity-20'}`}></span>
                                <span className="relative z-10">EVENTS</span>
                            </Link>
                        </li>
                        <li>
                            <Link href="/sponsors" className="text-white relative px-3 sm:px-4 py-2 sm:py-3 font-medium">
                                <span className={`absolute inset-0 border-2 tracking-wide border-white border-dotted ${pathname === '/sponsors' ? 'opacity-70' : 'opacity-0 hover:opacity-20'}`}></span>
                                <span className="relative z-10">SPONSORS</span>
                            </Link>
                        </li>
                        <li>
                            <Link href="/organisers" className="text-white relative px-3 sm:px-4 py-2 sm:py-3 font-medium whitespace-nowrap">
                                <span className={`absolute inset-0 border-2 border-white border-dotted ${pathname === '/organisers' ? 'opacity-70' : 'opacity-0 hover:opacity-20'}`} tracking-wide></span>
                                <span className="relative z-10">ORGANISING TEAM</span>
                            </Link>
                        </li>
                        <li>
                            <Link href="/contact-us" className="text-white relative px-3 sm:px-4 py-2 sm:py-3 font-medium">
                                <span className={`absolute inset-0 border-2 border-white border-dotted ${pathname === '/contact-us' ? 'opacity-70' : 'opacity-0 hover:opacity-20'}`} tracking-wide></span>
                                <span className="relative z-10">CONTACT US</span>
                            </Link>
                        </li>
                    </ul>
                </div>

                {/* Buy Passes Button - desktop */}
                <div className="hidden md:block translate-x-1/2">
                    <button className="bg-[#C01E0D] text-white px-4 sm:px-5 py-2 rounded-lg shadow-[inset_1px_4px_8px_rgba(0,0,0,0.4)] hover:bg-red-700 transition-colors font-medium transform hover:scale-105 duration-200">
                        Buy Passes
                    </button>
                </div>
            </div>

            {/* Mobile menu content */}
            <div
                className={`
                    ${isMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'} 
                    md:hidden overflow-hidden transition-all duration-300 ease-in-out 
                    absolute top-full left-0 right-0 
                    bg-black/80 backdrop-blur-sm 
                    p-4 rounded-b-xl 
                    z-50 mx-auto w-[96%] 
                `}
            >
                <ul className="flex flex-col space-y-4 pt-2">
                    <li>
                        <Link href="/" className="text-white relative px-4 py-3 block font-medium">
                            <span className={`absolute inset-0 border-2 border-white border-dotted ${pathname === '/' ? 'opacity-70' : 'opacity-0'}`}></span>
                            <span className="relative z-10">HOME</span>
                        </Link>
                    </li>
                    <li>
                        <Link href="/events" className="text-white relative px-4 py-3 block font-medium">
                            <span className={`absolute inset-0 border-2 border-white border-dotted ${pathname === '/events' ? 'opacity-70' : 'opacity-0'}`}></span>
                            <span className="relative z-10">EVENTS</span>
                        </Link>
                    </li>
                    <li>
                        <Link href="/sponsors" className="text-white relative px-4 py-3 block font-medium">
                            <span className={`absolute inset-0 border-2 border-white border-dotted ${pathname === '/sponsors' ? 'opacity-70' : 'opacity-0'}`}></span>
                            <span className="relative z-10">SPONSORS</span>
                        </Link>
                    </li>
                    <li>
                        <Link href="/organisers" className="text-white relative px-4 py-3 block font-medium">
                            <span className={`absolute inset-0 border-2 border-white border-dotted ${pathname === '/organisers' ? 'opacity-70' : 'opacity-0'}`}></span>
                            <span className="relative z-10">ORGANISING TEAM</span>
                        </Link>
                    </li>
                    <li>
                        <Link href="/contact-us" className="text-white relative px-4 py-3 block font-medium ">
                            <span className={`absolute inset-0 border-2 border-white border-dotted ${pathname === '/contact-us' ? 'opacity-70' : 'opacity-0'}`}></span>
                            <span className="relative z-10">CONTACT US</span>
                        </Link>
                    </li>
                </ul>
                <div className=" pb-4 ">
                    <button className="bg-[#C01E0D] w-full text-white py-3 rounded-lg shadow-[inset_1px_4px_8px_rgba(0,0,0,0.4)] hover:bg-red-700 transition-colors font-medium">
                        Buy Passes
                    </button>
                </div>
                
            </div>
        </nav>
    );
};

export default NavBar;