import React from "react";
import clsx from "clsx";

const Heading = ({ children, size = "6xl", as: Tag = "h1", className }) => {
    return (
        <Tag
            className={clsx(
                "font-alinore headingbg font-bold text-center uppercase tracking-wider drop-shadow-[-6px_-2px_0px_black] md:text-6xl sm: text-5xl",
            )}
        >
            {children}
        </Tag>
    );
};

export default Heading;
