import React from "react";
import Heading from "./Heading";

const EventCatogories = () => {
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
    <div className="flex flex-col z-10 gap-10">
      <Heading>Event Categories</Heading>

      {/*       
        <div className="grid grid-cols-3 gap-4 max-w-3xl ">
          {categories.map((category, index) => (
            <div
              key={index}
            //   className="bg-[#970900] 
            //    min-h-[80px] min-w-[100px] overflow-auto xl:min-w-[400px] xl:min-h-[200]
            //    text-white text-center font-bold text-sm md:text-lg uppercase p-4 rounded-[5.82] shadow-lg"

            className="bg-[#970900] 
           min-h-[80px] min-w-[100px] overflow-auto 
           xl:min-w-[400px] xl:min-h-[200px]
           text-white text-center font-bold text-sm md:text-lg uppercase 
           p-4 rounded-[5.82px] shadow-lg"
            >
              {category}
            </div>
          ))}
        </div> */}

      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4 max-w-full">
        {categories.map((category, index) => (
          <div
            key={index}
            className="bg-[#970900]  overflow-auto
        flex items-center justify-center 
        min-h-[80px] min-w-[100px] 
        xl:min-w-[400px] xl:min-h-[200px]
        text-white text-center font-bold text-sm md:text-lg uppercase 
        p-4 rounded-[5.82px] shadow-lg
        justify-items-center
        "
          >
            {category}
          </div>
        ))}
      </div>

    </div>
  );
};

export default EventCatogories;
