'use client';

import React, { useState, useEffect, useRef } from "react";
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
    const [visible, setVisible] = useState(true);
    const pathname = usePathname();
    const navRef = useRef(null);

    // Close mobile menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (navRef.current && !navRef.current.contains(event.target)) {
        setIsMenuOpen(false);
      }
    };

    document.addEventListener("click", handleClickOutside);
    return () => document.removeEventListener("click", handleClickOutside);
  }, []);

  // Handle navbar visibility based on scroll direction
  useEffect(() => {
    let lastScrollY = window.scrollY;
    const handleScroll = () => {
      if (window.scrollY < lastScrollY) {
        setVisible(true);
      } else {
        setVisible(false);
      }
      lastScrollY = window.scrollY;
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

    return (
        <nav
         ref = {navRef}
         className={`fixed top-0 left-1/2 transform -translate-x-1/2 w-[96%] max-w-7xl rounded-xl shadow-lg border border-white/10 flex items-center justify-between z-50 transition-transform duration-300 ${
            visible ? "translate-y-0" : "-translate-y-full"
          } bg-black/80 backdrop-blur-sm pr-4 h-16 mt-4`} >
            {/* Logo */}
            <div className="flex items-center flex-shrink-0 ml-4">
                <img src="/vercel.svg" alt="UNIFEST 2025 Logo" className="object-contain w-32 h-21" />
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex flex-grow justify-center">
                <ul className="flex space-x-6 lg:space-x-10">
                    {navLinks.map(({ href, label }) => (
                        <li key={href}>
                            <Link href={href} className="relative px-4 py-2 text-white font-medium">
                                <span
                                    className={`absolute inset-0 border-2 border-white border-dotted transition-opacity ${pathname === href ? "opacity-70" : "opacity-0 hover:opacity-20"
                                        }`}
                                ></span>
                                <span className="relative z-10 tracking-wide">{label}</span>
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>

            {/* Buy Passes Button - Desktop */}
            <div className="hidden md:block translate-x-1/2">
                <Link href={"https://bit.ly/unifest2025"} className="bg-[#C01E0D] text-white px-5 py-2 rounded-lg shadow-[inset_1px_4px_8px_rgba(0,0,0,0.4)] hover:bg-red-700 transition-transform transform hover:scale-105 duration-200">
                    Buy Passes
                </Link>
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
                className={`absolute top-20 left-0 right-0 bg-black/80 backdrop-blur-sm p-4 rounded-xl z-50 mx-auto w-[100%] transition-all duration-300 ease-in-out ${isMenuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0 overflow-hidden"
                    }`}
            >
                <ul className="flex flex-col space-y-4 pt-2">
                    {navLinks.map(({ href, label }) => (
                        <li key={href}>
                            <Link href={href} 
                            onClick={() => setIsMenuOpen(false)}
                             className="relative px-4 py-3 block text-white font-medium">
                                <span
                                    className={`absolute inset-0 border-2 border-white border-dotted ${pathname === href ? "opacity-70" : "opacity-0 hover:opacity-20"
                                        }`}
                                ></span>
                                <span className="relative z-10 tracking-wide">{label}</span>
                            </Link>
                        </li>
                    ))}
                </ul>

                {/* Buy Passes Button - Mobile */}
                <div className="pb-4">
                <Link href="https://bit.ly/unifest2025" className="block bg-[#C01E0D] w-full text-white py-3 rounded-lg shadow-[inset_1px_4px_8px_rgba(0,0,0,0.4)] hover:bg-red-700 transition-colors font-medium text-center">
                    Buy Passes
                </Link>
                </div>
            </div>
        </nav>
    );
};

export default NavBar;
