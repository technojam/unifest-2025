"use client";
import React, { useState } from "react";
import CardsCoreTeam from "./organisers"

export default function CoreTeam() {
  const [activeTab, setActiveTab] = useState("core");

  return (
    <div
      className="flex flex-col items-center space-y-4 relative w-full h-[3900px]"
      style={{
        backgroundImage: "url('/CoreTeamBg.svg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
    <div className="h-screen">
      {/* Header Image */}
      <img
        src="https://res.cloudinary.com/dguddaxjl/image/upload/v1740732734/media-uploads/1740732734329-1f8y5z3y9mu.png"
        className="relative z-10 mt-[0px] bg-cover w-full"
        alt="Header"
      />

      {/* Heading */}
      <div className="absolute top-[441px] z-10 w-full flex flex-col items-center">
        <h2 className="font-[Alinore] text-[143.5px] text-[#CC200E] font-normal leading-[120px] text-center tracking-[2%]">
          ORGANISING TEAM
        </h2>

        {/* Tabs Section */}
        <div className="flex w-[730px] h-[40px] rounded-[39px] bg-[#E5B73B] overflow-hidden border border-black mt-4">
          <button
            className={`flex-1 text-center py-2 font-bold transition-all duration-300 ${
              activeTab === "core"
                ? "bg-red-600 text-white"
                : "bg-yellow-500 text-black"
            }`}
            onClick={() => setActiveTab("core")}
          >
            CORE TEAM
          </button>
          <button
            className={`flex-1 text-center py-2 font-bold transition-all duration-300 ${
              activeTab === "club"
                ? "bg-red-600 text-white"
                : "bg-yellow-500 text-black"
            }`}
            onClick={() => setActiveTab("club")}
          >
            CLUB HEADS
          </button>
        </div>
        </div>

        {/* Team Info Section */}
        <CardsCoreTeam activeTab={activeTab} />
      </div>
    </div>
  );
}
