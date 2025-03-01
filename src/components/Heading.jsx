import React from "react";
import clsx from "clsx";

const Heading = ({ children , size="7xl" }) => {
    return (
        <h1
            className={clsx(
                "text-transparent bg-clip-text bg-gradient-to-r from-[#D69924] to-yellow-400 md:text-7xl font-bold text-center uppercase tracking-wider drop-shadow-[-6px_-2px_0px_black] font-alinore",
                `text-${size}`
            )}>
            {children}
        </h1>
    );
};

export default Heading;
