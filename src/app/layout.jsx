import { Geist, Geist_Mono } from "next/font/google";
import "./styles/globals.css";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Galgotias Unifest 2025 | Music, Dance, Tech & More",
  description:
    "Galgotias Unifest 2025 – The biggest annual cultural and tech fest! Join us for music, dance, coding competitions, and electrifying performances. Celebrate talent, creativity, and innovation!",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta
          name="keywords"
          content="Galgotias Unifest, tech fest, cultural fest, music, dance, coding competitions, Galgotias University"
        />
        <meta name="author" content="Galgotias University" />
        <meta
          property="og:title"
          content="Galgotias Unifest 2025 | Music, Dance, Tech & More"
        />
        <meta
          property="og:description"
          content="Experience Galgotias Unifest 2025 – A grand celebration of talent, music, tech events, and competitions!"
        />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="/unifest-banner.png" />
        <meta property="og:url" content="https://galgotiasunifest.com" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Galgotias Unifest 2025" />
        <meta
          name="twitter:description"
          content="Join the biggest annual fest with music, tech, and competitions!"
        />
        <meta name="twitter:image" content="/unifest-banner.png" />
        <link rel="canonical" href="https://galgotiasunifest.com" />
        <style>
          @import
          url('https://fonts.googleapis.com/css2?family=Comfortaa:wght@300..700&family=Kumbh+Sans:wght@100..900&family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');
        </style>
      </head>
     <body
  className={`${geistSans.variable} ${geistMono.variable} antialiased relative flex flex-col gap-10 w-full items-center flex-grow min-h-screen`}
  style={{
    backgroundImage: "url('/bg.webp')",
    backgroundSize: "100% auto",
    backgroundPosition: "top center",
    backgroundRepeat: "repeat-y",
  }}
>
  <div
    className="absolute w-full h-[900px] bg-cover bg-center bg-no-repeat flex items-center justify-center z-20"
    style={{
      backgroundImage:
        "url('https://res.cloudinary.com/dguddaxjl/image/upload/v1740741407/media-uploads/1740741407033-sg7bzdv526.png')",
    }}
  />
   <div className="absolute w-full h-full z-0 bg-black/35" />
  <NavBar />
  
  {children}
  <Footer />
</body>
    </html>
  );
}
