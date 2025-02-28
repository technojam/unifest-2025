// import { useState } from "react";
"use client";
import { useState } from "react";

const images = [
  "Frame 22.png",
  "Frame 22.png",                                           
  "Frame 22.png",
];

export default function Carousel() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + images.length) % images.length
    );
  };

  return (
    <>
      <h1
        className="text-[#D69924] bg-clip-text  text-7xl md:text-8xl font-bold text-center 
      pt-[10px] pb-[30px] 
      uppercase tracking-wider font-alinore "
      >
        Artist
      </h1>

      <div className="relative w-full max-w-5xl mx-auto overflow-hidden rounded-lg shadow-lg">
        <div
          className="flex transition-transform duration-500 ease-in-out transform"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {images.map((src, index) => (
            <img
              key={index}
              src={src}
              alt={`Slide ${index + 1}`}
              className="w-full object-cover"
            />
          ))}
        </div>

        {/* Prev Button */}
        <button
          onClick={prevSlide}
          className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-black/50 p-2 rounded-full text-white hover:bg-black/70"
        >
          &#10094;
        </button>

        {/* Next Button */}
        <button
          onClick={nextSlide}
          className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-black/50 p-2 rounded-full text-white hover:bg-black/70"
        >
          &#10095;
        </button>
      </div>
    </>
  );
}
