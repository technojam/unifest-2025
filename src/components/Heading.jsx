import React from "react";
import clsx from "clsx";

const sizeClasses = {
    "xs": "text-xs",
    "sm": "text-sm",
    "md": "text-md",
    "lg": "text-lg",
    "xl": "text-xl",
    "2xl": "text-2xl",
    "3xl": "text-3xl",
    "4xl": "text-4xl",
    "5xl": "text-5xl",
    "6xl": "text-6xl",
    "7xl": "text-7xl",
    "8xl": "text-8xl",
    "9xl": "text-9xl",
};

const Heading = ({ children, size = "7xl" }) => {
    return (
        <h1
            className={clsx(
                "font-alinore text-transparent bg-clip-text bg-gradient-to-r from-[#D69924] to-yellow-400 font-bold text-center uppercase tracking-wider drop-shadow-[-6px_-2px_0px_black]",
                sizeClasses[size] || "text-7xl" // Fallback if size is invalid
            )}
        >
            {children}
        </h1>
    );
};

export default Heading;
