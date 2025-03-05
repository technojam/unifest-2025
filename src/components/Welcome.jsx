import React from "react";

const Welcome = () => {
    return (
        <div className="flex justify-center items-center w-full h-fit-content sm: mt-40 md:mt-50 z-10">
            <img
                src="/vercel.svg"
                alt="Logo"
                className="w-120 h-120 sm:w-180 sm:h-180 md:w-200 md:h-200"
            />
        </div>
    );
};

export default Welcome;