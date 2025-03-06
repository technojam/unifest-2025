'use client';

import React, { useEffect, useState } from "react";
import Heading from "./ui/Heading";

const EventCategories = () => {
  const [isMounted, setIsMounted] = useState(false);

  // Handle client-side mounting
  useEffect(() => {
    setIsMounted(true);
  }, []);

  const categories = [
    "Design and Digital Arts",
    "Drama",
    "Fine Arts",
    "Gaming",
    "Music",
    "Dance",
    "Literature",
    "Glamour",
    "Tech Venture",
    "Innovative and Entrepreneurship",
    "Miscellaneous",
  ];

  return (
    <div className="flex flex-col z-10 gap-10 w-full px-4 sm:px-6 md:px-8" id="events">
      <Heading>Event Categories</Heading>

      <div className="grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 gap-3 md:gap-4 lg:gap-6 w-full">
        {categories.map((category, index) => (
          <div
            key={index}
            className="
              bg-[#970900]
              overflow-hidden
              flex items-center justify-center
              min-h-[80px]
              h-full
              w-full
              text-white text-center font-bold
              text-xs xs:text-sm sm:text-base md:text-lg
              uppercase
              p-2 sm:p-3 md:p-4
              rounded-md sm:rounded-[5.82px]
              shadow-lg
              transition-all duration-300 ease-in-out
              hover:bg-[#8a0800] hover:scale-[1.02]
              border border-white/10
              backdrop-blur-sm
            "
            style={{
              aspectRatio: isMounted && window.innerWidth >= 1280 ? '2/1' : '3/2'
            }}
          >
            <span className="px-1">{category}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default EventCategories;