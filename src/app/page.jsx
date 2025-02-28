import Image from "next/image";
import NavBar from "@/components/NavBar";
<<<<<<< HEAD
import Orgateam from "@/components/orgateam";
=======

>>>>>>> 2b74bb49ce8e4c2e93894d3577601301295a3206
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
    </div>
  );
}
