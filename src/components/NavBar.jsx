import React from "react";

const NavBar = () => {
    return (
        <nav className="bg-[rgba(0,0,0,0.7)]  flex justify-between items-center p-4 h-[5rem] w-[77.5rem] rounded-xl " >
            <div className="flex items-center">
                <img src="\logo\logo 1-min (1) 2.png" alt="UNIFEST 2025 Logo" className="h-full w-auto mr-4 pt-1" />
            </div>
            <ul className="flex space-x-8 ">
                <li>
                    <a href="#" className="text-white relative px-4 py-3">
                        <span className="absolute inset-0 border-4 border-white border-dotted "></span>
                        <span className="relative z-10">HOME</span>
                    </a>
                    
                </li>
                <li>
                    <a href="#" className="text-white ">EVENTS</a>
                </li>
                <li>
                    <a href="#" className="text-white">SPONSORS</a>
                </li>
                <li>
                    <a href="#" className="text-white">ORGANISING TEAM</a>
                </li>
                <li>
                    <a href="#" className="text-white">CONTACT US</a>
                </li>
            </ul>
            <div className="translate-x-1/2">
                <button className="bg-[#C01E0D]  text-white p-4 h-[50px] py-2 rounded-[10px] shadow-[inset_1px_4px_8px_rgba(0,0,0,0.6)]  hover:bg-red-700 transition">
                    Buy Passes
                </button>
            </div>
            
        </nav>
    );
};

export default NavBar;
