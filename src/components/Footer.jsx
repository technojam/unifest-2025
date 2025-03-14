import React from "react";
import { FaFacebook, FaTwitter, FaLinkedin, FaYoutube, FaInstagram, FaMapMarkerAlt } from "react-icons/fa";

const Footer = () => {
  const socialLinks = [
    { icon: <FaFacebook />, href: "https://www.facebook.com/galgotiasstudentcouncil/" },
    { icon: <FaTwitter />, href: "https://x.com/gucouncil" },
    { icon: <FaLinkedin />, href: "https://www.linkedin.com/company/gusc" },
    { icon: <FaYoutube />, href: "https://www.youtube.com/@guscyoutube" },
    { icon: <FaInstagram />, href: "https://www.instagram.com/galgotiasstudentcouncil/" },
  ];

  const credits = [
    { text: "All Rights Reserved" },
    { text: "Developed By Technojam" },
    { text: "Designed By Graphex" },
  ];

  return (
    <footer className="w-full text-white bg-black z-10">
      <div className="container mx-auto px-4 sm:px-6 md:px-8 py-8 lg:py-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
          {/* Logo Section */}
          <div className="flex items-center justify-center">
            <img src="/vercel.svg" alt="Unifest 2025 Logo" className="w-24 h-auto object-contain" />
          </div>

          {/* Address & Social Section */}
          <div className="flex flex-col gap-6 w-full lg:w-auto text-center lg:text-left">
            <div className="flex flex-col md:flex-row items-center justify-center gap-4">
              <FaMapMarkerAlt className="w-6 h-6 text-gray-400" />
              <p className="text-gray-400 text-sm md:text-base">
                Plot No. 2, Yamuna Expy, opposite Buddha International Circuit,<br />
                Sector 17A, Greater Noida, Uttar Pradesh 203201
              </p>
            </div>
            <div className="flex justify-center lg:justify-start space-x-4">
              {socialLinks.map((link, index) => (
                <a key={index} href={link.href} className="text-gray-400 hover:text-white text-2xl">
                  {link.icon}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-gray-800">
        <div className="container mx-auto px-4 sm:px-6 md:px-8 py-4 flex flex-col sm:flex-row items-center justify-between text-gray-400 text-xs sm:text-sm">
          {credits.map((credit, index) => (
            <div key={index} className="mb-2 sm:mb-0">
              {credit.text}
            </div>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
