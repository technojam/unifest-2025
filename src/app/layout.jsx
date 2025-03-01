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
      </head>
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
        <Footer />
      </body>
    </html>
  );
}
