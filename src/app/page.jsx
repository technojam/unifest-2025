
import Orgateam from "@/components/orgateam";
import Welcome from "@/components/Welcome";
import AboutFest from "@/components/AboutFest";
import EventCatogories from "@/components/EventCatogories";
import Carousel from "@/components/Artist"


export default function Home() {
  return (
    <div
      className="relative flex flex-col gap-10 w-full items-center flex-grow min-h-screen"
      style={{
        backgroundImage: "url('/bg.svg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}>

      <div className="absolute w-full h-full z-0 bg-black/10" />
      <Welcome />
      <AboutFest />
      <Orgateam />
      <EventCatogories />
      <Carousel />
    </div>
  );
}