import { Geist, Geist_Mono } from "next/font/google";
import "./styles/globals.css";
import NavBar from "@/components/NavBar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Galgotias Unifest",
  description: "Experience UNIFEST, the annual fest of Galgotias Educational Institutions! A grand celebration of talent, creativity, and culture with music, dance, tech events, competitions, and more. Join the ultimate fest of innovation and artistry!",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased relative flex flex-col gap-10 w-full items-center flex-grow min-h-screen`}
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
        <NavBar />
        {children}
      </body>
    </html>
  );
}
