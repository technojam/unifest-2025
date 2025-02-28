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
      className="relative w-full flex flex-col w-full items-center flex-grow min-h-screen"
      style={{
        backgroundImage: "url('/bg.svg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}>

      <div
        className="absolute w-full h-[900px] bg-cover bg-center bg-no-repeat flex items-center justify-center"
        style={{
          backgroundImage:
            "url('https://res.cloudinary.com/dguddaxjl/image/upload/v1740741407/media-uploads/1740741407033-sg7bzdv526.png')",
        }} />

      <NavBar />
      <Welcome />
      <AboutFest />
      <Orgateam />
      <EventCatogories/>
      <Carousel/>
    </div>
  );
}