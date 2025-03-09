"use client";
import React, { useState } from "react";
import CardsCoreTeam from "../../components/ui/CardsCoreTeam";
import CardsClubHeads from "../../components/ui/CardsClubHeads"
import Image from "next/image";

export default function CoreTeam() {
  const [activeTab, setActiveTab] = useState("core");

  return (
    <div className="flex flex-col items-center w-full relative min-h-screen ">
      {/* Background Image */}
      <div className="absolute top-0 left-0 right-0 h-screen overflow-hidden pointer-events-none z-0">
        <Image
          src="/bgyellow.webp"
          fill={true}
          priority
          sizes="100vw"
          alt="Core Team Background"
          className="object-cover w-full h-full  "
        />
      </div>

      {/* Heading Section */}
      <div className="w-full flex flex-col items-center pt-[20vh] pb-[3vh] md:pt-[30vh] lg:pt-[390px] ">
        <h2 className="font-[Alinore] text-[#CC200E] font-bold text-center uppercase tracking-wider drop-shadow-[-6px_-2px_0px_black] text-4xl sm:text-5xl md:text-6xl lg:text-8xl px-4 ">
          ORGANISING TEAM
        </h2>

        {/* Tabs Section */}
        <div className="flex w-[90%] max-w-[73vh] sm:w-[50%] md:w-[45%] h-[40px] rounded-[39px] bg-[#E5B73B] font-poppins overflow-hidden border border-black mt-4 z-50 pointer-events-auto ">
          <button
            className={`flex-1 text-center py-2 rounded-[73.8px] font-bold text-sm sm:text-base transition-all duration-300 ${
              activeTab === "core"
                ? "bg-[#A50C00] text-white"
                : "bg-[#E5B73B] text-black"
            }`}
            onClick={() => {
              setActiveTab("core");
            }}
          >
            CORE TEAM
          </button>
          <button
            className={`flex-1 text-center py-2 font-bold rounded-[73.8px] text-sm sm:text-base transition-all duration-300 ${
              activeTab === "club"
                ? "bg-[#A50C00] text-white"
                : "bg-[#E5B73B] text-black"
            }`}
            onClick={() => setActiveTab("club")}
          >
            CLUB HEADS
          </button>
        </div>
      </div>

      {/* Cards Section */}
      <div className="w-full z-10 mt-41 ">
        <CardsCoreTeam activeTab={activeTab} />
        <CardsClubHeads activeTab={activeTab} />
      </div>

    </div>
  );
}
