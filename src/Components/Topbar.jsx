import React from "react";
import { FiPhone, FiClock } from "react-icons/fi"; // Feather Icons
import { FaFacebookF, FaTwitter, FaInstagram, FaYoutube } from "react-icons/fa"; // FontAwesome Icons


const Topbar = () => {

  return (
    <div className=" bg-blue text-white text-xs md:text-sm font-normal fixed top-0 left-0 w-full z-50">
      <div className="container mx-auto flex justify-between items-center py-2 px-4 md:px-24">
        {/* Left side: Contact Info */}
        <div
          className="hidden sm:flex items-center space-x-4"
          data-aos="fade-down"
          data-aos-once="true"
        >
          <a
            href="https://www.facebook.com"
            className="hover:text-yellow-400 transition-colors duration-200"
          >
            <FaFacebookF />
          </a>
          <a
            href="https://twitter.com"
            className="hover:text-yellow-400 transition-colors duration-200"
          >
            <FaTwitter />
          </a>
          <a
            href="https://instagram.com"
            className="hover:text-yellow-400 transition-colors duration-200"
          >
            <FaInstagram />
          </a>
          <a
            href="https://youtube.com"
            className="hover:text-yellow-400 transition-colors duration-200"
          >
            <FaYoutube />
          </a>
        </div>

        {/* Right side: Social Media Icons */}

        <div
          className="flex  justify-between items-center space-x-4"
          data-aos="fade-down"
          data-aos-once="true"
          data-aos-delay="300"
        >
          <div className="flex items-center space-x-2">
            <FiPhone />
            <span>+97165532390</span>
          </div>
          <div className="flex items-center space-x-2">
            <FiClock />
            <span>Timings: 8:30 to 10:00 </span>
          </div>
        </div>

        
      </div>

      
    </div>
  );
};

export default Topbar;
