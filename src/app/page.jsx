

import Welcome from "@/components/Welcome";
import AboutFest from "@/components/AboutFest";
import EventCatogories from "@/components/EventCatogories";
import Carousel from "@/components/Artist"
import Timeline from "@/components/Timeline";
import Orgateam from "@/components/orgateam";


export default function Home() {
  return (
    <div
      className="relative flex flex-col gap-10 w-full items-center flex-grow min-h-screen">

      
      <Welcome />
      <AboutFest />
      <Orgateam/>
      <EventCatogories />
      <Carousel />
      <Timeline/>
    </div>
  );
}