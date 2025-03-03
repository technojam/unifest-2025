"use client";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Heading from "./Heading";

const Timeline = () => {
  const [lineHeight, setLineHeight] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const timeline = document.getElementById("timeline");
      if (!timeline) return;

      const timelineRect = timeline.getBoundingClientRect();
      const timelineTop = timelineRect.top + window.scrollY;
      const timelineBottom = timelineTop + timeline.scrollHeight;
      const viewportBottom = window.scrollY + window.innerHeight;

      // Calculate the new height ensuring it doesn't overflow
      let newHeight = Math.max(0, Math.min(viewportBottom - timelineTop, timelineBottom - timelineTop));
      setLineHeight(newHeight);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
  <div className="flex flex-col items-center w-full pt-10">
    <Heading>Event Categories</Heading>

    <div className="relative flex flex-col items-center pt-25 my-10 text-white w-full max-w-5xl">
      <div id="timeline" className="relative flex flex-col items-center w-full ">
        {/* Day 1 Box */}
        <div className="absolute left-1/2 transform -translate-x-1/2 -top-5 lg:-top-10 bg-[#970900] text-yellow-300 px-6 py-2 font-bold text-sm lg:text-xl text-center rounded z-10 inset-shadow-sm inset-shadow-black">
          DAY 01
          <br />
          21 MARCH
        </div>

        {/* Static White Base Line */}
        <div className="absolute left-1/2 w-1 bg-white" style={{ height: lineHeight }}></div>

        {/* Animated Red Scrolling Line */}
        <motion.div
          className="absolute left-1/2 w-[5px] bg-[#970900]"
          initial={{ height: 0 }}
          animate={{ height: lineHeight }}
          transition={{ type: "tween", duration: 2, ease: "easeInOut" }}
        />

        {/* Event Sections - Day 1 */}
        <div className="w-full flex flex-row  justify-between gap-[0.5px] lg:gap-14 px-3 lg:px-0 pt-20">
          <div className="w-1/2 space-y-3 lg:space-y-5 pr-3 lg:pr-5">
            {Array.from({ length: 5 }).map((_, i) => (
              <div key={i} className="bg-[#970900] p-3 text-xs lg:text-lg rounded-lg">
                <div className="flex justify-between items-center">
                  <p>10:00</p>
                  <button className="border px-2 lg:px-4 text-[6px]">DIGITAL</button>
                </div>
                <p>DIGITAL WAR</p>
              </div>
            ))}
          </div>

          <div className="w-1/2 space-y-3 lg:space-y-5 pl-3 lg:pl-5">
            {Array.from({ length: 5 }).map((_, i) => (
              <div key={i} className="bg-[#970900] p-3 text-xs lg:text-lg rounded-lg">
                <div className="flex justify-between items-center">
                  <p>10:00</p>
                  <button className="border px-2 lg:px-4 text-[6px] lg:text-sm">DIGITAL</button>
                </div>
                <p>DIGITAL WAR</p>
              </div>
            ))}
          </div>
        </div>

        {/* Day 2 Box */}
        <div className="mt-12  lg:mt-15 flex flex-col items-center z-10 text-center">
          <div className="bg-[#970900] text-yellow-300 px-6 py-2 font-bold text-sm lg:text-xl rounded inset-shadow-sm inset-shadow-black">
            DAY 02
            <br />
            22 MARCH
          </div>
        </div>

        {/* Event Sections - Day 2 */}
        <div className="w-full flex flex-row  justify-between gap-[0.5px] lg:gap-14 px-3 pt-12 lg:pt-15">
          <div className="w-1/2 space-y-3 lg:space-y-5 pr-3 lg:pr-5">
            {Array.from({ length: 5 }).map((_, i) => (
              <div key={i} className="bg-[#970900] p-3 text-xs lg:text-lg rounded-lg">
                <div className="flex justify-between items-center">
                <p>10:00</p>
                  <button className="border px-2 lg:px-4 text-[6px] lg:text-sm">DIGITAL</button>
                </div>
                <p>DIGITAL WAR</p>
              </div>
            ))}
          </div>

          <div className="w-1/2 space-y-3 lg:space-y-5 pl-3 lg:pl-5">
            {Array.from({ length: 5 }).map((_, i) => (
              <div key={i} className="bg-[#970900] p-3 text-xs lg:text-lg rounded-lg">
                <div className="flex justify-between items-center">
                <p>10:00</p>
                  <button className="border px-2 lg:px-4 text-[6px] lg:text-sm">DIGITAL</button>
                </div>
                <p>DIGITAL WAR</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  </div>
</>

  );
};

export default Timeline;
