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
      <div className="flex items-center justify-between py-10 px-20 md:flex-col lg:flex-row">

        {/* Logo Section */}
        <div className="flex items-center space-x-2">
          <img src="vercel.svg" alt="Unifest 2025 Logo" className="w-70 h-70" />
        </div>

        {/* Address Section */}
        <div className="flex flex-col gap-10 md:w-[100%]">
          <div className="flex text-center md:flex-col lg:flex-row items-center justify-center space-y-5">
            <FaMapMarkerAlt className="w-10 h-10 mr-2 mt-2" />
            <p className="lg:text-left text-gray-400 md:text-center">
              Plot No. 2, Yamuna Expy, opposite Buddha International Circuit,<br />
              Sector 17A, Greater Noida, Uttar Pradesh 203201
            </p>
          </div>

          {/* Social Media Section */}
          <div className="flex justify-evenly space-x-4 md:space-x-2">
            {socialLinks.map((link, index) => (
              <a key={index} href={link.href} className="text-gray-400 hover:text-white text-3xl">
                {link.icon}
              </a>
            ))}
          </div>
        </div>
      </div>

      <div className="flex items-center justify-between py-4 px-20 border-t border-gray-800 md:px-10">
        {credits.map((credit, index) => (
          <div className="flex text-gray-400" key={index}>
            {credit.text}
          </div>
        ))}
      </div>

    </footer>
  );
};

export default Footer;
