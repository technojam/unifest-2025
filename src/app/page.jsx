import Image from "next/image";
import NavBar from "@/components/NavBar";
import Orgateam from "@/components/orgateam";
import EventCatogories from "@/components/EventCatogories";
import Carousel from "@/components/Artist";

export default function Home() {
  return (
    <div 
      className="flex main flex-col items-center min-h-screen py-2"
      style={{
        backgroundImage: "url('/bg.svg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat"
      }}
    >
      <div className="w-full">
      </div>
      <NavBar />
      <Orgateam/>
      <EventCatogories/>
      <Carousel/>
    </div>
  );
}
