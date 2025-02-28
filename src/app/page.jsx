import Image from "next/image";
import NavBar from "@/components/NavBar";
import Orgateam from "@/components/orgateam";
import Welcome from "@/components/Welcome";
import AboutFest from "@/components/AboutFest";
import EventCatogories from "@/components/EventCatogories";
import Carousel from "@/components/Artist"

export default function Home() {
  return (
    <div
      className="relative w-full flex flex-col gap-10 w-full items-center flex-grow min-h-screen"
      style={{
        backgroundImage: "url('/bg.svg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}>

      <div
        className="absolute w-full h-[900px] bg-cover bg-center bg-no-repeat flex items-center justify-center z-10"
        style={{
          backgroundImage:
            "url('https://res.cloudinary.com/dguddaxjl/image/upload/v1740741407/media-uploads/1740741407033-sg7bzdv526.png')",
        }} />

      <div className="absolute w-full h-full z-0 bg-black/60" style={{
        backgroundImage: "url('/black-overlay.png')",
      }} />

      <NavBar />
      <Welcome />
      <AboutFest />
      <Orgateam />
      <EventCatogories />
      <Carousel />
    </div>
  );
}