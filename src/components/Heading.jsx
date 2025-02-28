import React from "react";

const Heading = ({ children }) => {
    return (
        <h1
            className="text-transparent 
                bg-clip-text 
                bg-gradient-to-r 
                from-[#D69924] 
                to-yellow-400 
                text-7xl 
                md:text-7xl 
                font-bold 
                text-center 
                uppercase 
                tracking-wider 
                drop-shadow-[-6px_-2px_0px_black] 
                font-alinore">
            {children}
        </h1>
    );
};

export default Heading;
