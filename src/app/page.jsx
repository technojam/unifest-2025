import Image from "next/image";
import NavBar from "@/components/NavBar";
export default function Home() {
  return (
    <div className="flex flex-col items-center min-h-screen py-2">
      <NavBar />
    </div>
  );
}
