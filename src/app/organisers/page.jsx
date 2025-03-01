"use client";
import React, { useState } from "react";
import CardsCoreTeam from "./CardsCoreTeam";


export default function CoreTeam() {
  const [activeTab, setActiveTab] = useState("core");

  return (
    <div
      className="flex flex-col items-center  relative w-full h-[3900px]"
      style={{
        backgroundImage: "url('/CoreTeamBg.svg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >

      {/* Header Image */}
     

      {/* Heading */}
      <div className="absolute top-[390px] z-10 w-full flex flex-col items-center">
      <h2
  className=" font-alinore text-transparent bg-clip-text bg-gradient-to-r from-[#A50C00] to-[#CC200E] font-bold text-center uppercase tracking-wider drop-shadow-[-6px_-2px_0px_black] text-9xl "
>
  ORGANISING TEAM
</h2>


        {/* Tabs Section */}
        <div className="flex w-[730px] h-[40px] rounded-[39px] bg-[#E5B73B] font-poppins bg-clip-text overflow-hidden border border-black mt-4">
          <button
            className={`flex-1 text-center py-2 rounded-[73.8px] font-bold transition-all duration-300 ${
              activeTab === "core"
                ? "bg-[#A50C00] text-white"
                : "bg-[#E5B73B] text-black"
            }`}
            onClick={() => setActiveTab("core")}
          >
            CORE TEAM
          </button>
          <button
            className={`flex-1 text-center py-2 font-bold rounded-[73.8px]   transition-all duration-300 ${
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

        <div>
        <CardsCoreTeam activeTab={activeTab} /></div>
      </div>
  
  );
}