import React, { useState } from 'react';
import { FiPhone, FiClock } from 'react-icons/fi';      // Feather Icons
import { FaFacebookF, FaTwitter, FaInstagram, FaYoutube } from 'react-icons/fa';  // FontAwesome Icons

const Topbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className=" bg-blue text-white text-xs md:text-sm font-normal fixed top-0 left-0 w-full z-50">
            <div className="container mx-auto flex justify-between items-center py-2 px-4 md:px-24">
                {/* Left side: Contact Info */}
                <div className="hidden sm:flex items-center space-x-4" data-aos = "fade-down" data-aos-once = "true">
                    <a href="#" className="hover:text-yellow-400 transition-colors duration-200"><FaFacebookF /></a>
                    <a href="#" className="hover:text-yellow-400 transition-colors duration-200"><FaTwitter /></a>
                    <a href="#" className="hover:text-yellow-400 transition-colors duration-200"><FaInstagram /></a>
                    <a href="#" className="hover:text-yellow-400 transition-colors duration-200"><FaYoutube /></a>
                </div>

                {/* Right side: Social Media Icons */}
               

                <div className="flex  justify-between items-center space-x-4" data-aos = "fade-down" data-aos-once = "true" data-aos-delay="300">
                    <div className="flex items-center space-x-2">
                        <FiPhone />
                        <span>+97165532390</span>
                    </div>
                    <div className="flex items-center space-x-2">
                        <FiClock />
                        <span>Timings: 8:30 to 10:00 </span>
                    </div>
                </div>

                {/* Hamburger Menu for small screens */}
                {/* <div className="md:hidden">
                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        className="text-white focus:outline-none"
                    >
                        <svg
                            className="w-6 h-6"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d={isOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16m-7 6h7'}
                            />
                        </svg>
                    </button>
                </div> */}
            </div>

            {/* Mobile Dropdown Menu */}
            {/* {isOpen && (
                <div className="md:hidden bg-blue-900 px-4 py-2 space-y-2">
                    <div className="flex items-center space-x-2">
                        <FaFacebookF />
                        <a href="#" className="hover:text-yellow-400 transition-colors duration-200">Facebook</a>
                    </div>
                    <div className="flex items-center space-x-2">
                        <FaTwitter />
                        <a href="#" className="hover:text-yellow-400 transition-colors duration-200">Twitter</a>
                    </div>
                    <div className="flex items-center space-x-2">
                        <FaInstagram />
                        <a href="#" className="hover:text-yellow-400 transition-colors duration-200">Instagram</a>
                    </div>
                    <div className="flex items-center space-x-2">
                        <FaYoutube />
                        <a href="#" className="hover:text-yellow-400 transition-colors duration-200">YouTube</a>
                    </div>
                </div>
            )} */}
        </div>
    );
};

export default Topbar;
