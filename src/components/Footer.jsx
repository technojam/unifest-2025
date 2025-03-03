
import React from "react";
import { FaFacebook, FaTwitter, FaLinkedin, FaYoutube, FaInstagram, FaMapMarkerAlt } from "react-icons/fa";


const Footer = () => {
  return (
    <footer className="w-full bg-black text-white py-6 h-96">
      <div className="max-w-screen-xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between">
        
        {/* Logo Section */}
        <div className="flex items-center space-x-2">
          <img src="vercel.svg" alt="Unifest 2025 Logo" className="h-16" />
        </div>

        {/* Address Section */}
        <div className="text-center md:text-left mt-4 md:mt-0 max-w-md">
          <p className="text-gray-400 flex items-start md:items-center">
            <FaMapMarkerAlt className="mr-2 mt-1" />
            Plot No. 2, Yamuna Expy, opposite Buddha International Circuit,<br />
            Sector 17A, Greater Noida, Uttar Pradesh 203201
          </p>
        </div>

        {/* Social Media Section */}
        <div className="flex space-x-4 mt-4 md:mt-0">
          <a href="#" className="text-gray-400 hover:text-white text-xl"><FaFacebook /></a>
          <a href="#" className="text-gray-400 hover:text-white text-xl"><FaTwitter /></a>
          <a href="#" className="text-gray-400 hover:text-white text-xl"><FaLinkedin /></a>
          <a href="#" className="text-gray-400 hover:text-white text-xl"><FaYoutube /></a>
          <a href="#" className="text-gray-400 hover:text-white text-xl"><FaInstagram /></a>
        </div>
      </div>

     
    </footer>
  );
};

export default Footer;
