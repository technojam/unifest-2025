import { Geist, Geist_Mono } from "next/font/google";
import "./styles/globals.css";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import { Toaster } from "sonner";
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title:
    "Galgotias Unifest 2025 | Annual Cultural & Technical Festival | Galgotias University",
  description:
    "Join Galgotias Unifest 2025, Greater Noida's premier college festival featuring music concerts, dance competitions, hackathons, tech expos, and cultural showcases from March 22-23, 2025. Register now for early bird tickets!",
  keywords:
    "Galgotias Unifest, tech fest, cultural fest, music, dance, coding competitions, hackathon, Galgotias University, college festival, Greater Noida events, student competitions, technical workshops",
  authors: [{ name: "Galgotias University" }],
  robots: "index, follow",
  themeColor: "#1a237e",
  openGraph: {
    title: "Galgotias Unifest 2025 | Annual Cultural & Technical Festival",
    description:
      "Experience Galgotias Unifest 2025 – Greater Noida's biggest student festival with live performances, tech competitions, and career opportunities from March 22-23, 2025.",
    siteName: "Galgotias Unifest 2025",
    locale: "en_US",
    alternateLocales: ["en_GB", "hi_IN"],
    type: "website",
    images: [
      {
        url: "https://galgotiasunifest.com/unifest-banner.png",
        width: 1200,
        height: 630,
        alt: "Galgotias Unifest 2025 Official Banner",
      },
    ],
    url: "https://galgotiasunifest.com",
  },
  twitter: {
    card: "summary_large_image",
    site: "@GalgotiasUni",
    creator: "@GalgotiasUni",
    title: "Galgotias Unifest 2025 | Annual Cultural & Technical Festival",
    description:
      "Join the biggest annual college fest with music, tech competitions, workshops and more! March 22-23, 2025 at Galgotias University.",
    images: {
      url: "https://galgotiasunifest.com/unifest-banner.png",
      alt: "Galgotias Unifest 2025 Official Banner",
    },
  },
  alternates: {
    canonical: "https://galgotiasunifest.com",
  },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/favicon.svg", type: "image/svg+xml" },
    ],
    apple: { url: "/apple-touch-icon.png" },
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} fadein antialiased relative flex flex-col w-full items-center flex-grow min-h-screen`}
        style={{
          backgroundImage: "url('/bg.webp')",
          backgroundSize: "100% auto",
          backgroundPosition: "top center",
          backgroundRepeat: "repeat-y",
        }}
      >
        <div
          className="absolute pointer-events-none w-full h-[900px] bg-cover bg-center bg-no-repeat flex items-center justify-center z-20"
          style={{
            backgroundImage:
              "url('https://res.cloudinary.com/dguddaxjl/image/upload/v1740741407/media-uploads/1740741407033-sg7bzdv526.png')",
          }}
        />
        <div className="absolute w-full h-full z-0 bg-black/35" />
        <NavBar />

        {children}
        <Footer />
        <Toaster />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Event",
              name: "Galgotias Unifest 2025",
              description:
                "Annual cultural and technical festival of Galgotias University featuring music, dance, coding competitions, and more.",
              startDate: "2025-03-15T09:00",
              endDate: "2025-03-17T21:00",
              location: {
                "@type": "Place",
                name: "Galgotias University",
                address: {
                  "@type": "PostalAddress",
                  streetAddress: "Plot No.2, Sector 17-A",
                  addressLocality: "Greater Noida",
                  addressRegion: "Uttar Pradesh",
                  postalCode: "201306",
                  addressCountry: "IN",
                },
              },
              image: "https://galgotiasunifest.com/unifest-banner.png",
              performer: {
                "@type": "Organization",
                name: "Galgotias University Student Committee",
              },
              offers: {
                "@type": "Offer",
                url: "https://galgotiasunifest.com/tickets",
                price: "499",
                priceCurrency: "INR",
                availability: "https://schema.org/InStock",
              },
              organizer: {
                "@type": "Organization",
                name: "Galgotias University",
                url: "https://www.galgotiasuniversity.edu.in",
              },
            }),
          }}
        />
      </body>
    </html>
  );
}
