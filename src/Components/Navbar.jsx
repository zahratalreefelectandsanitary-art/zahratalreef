import React, { useState } from 'react';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    const openDropdown = () => {
        setIsDropdownOpen(!isDropdownOpen);
    };

    // const closeDropdown = () => {
    //     setIsDropdownOpen(false);
    // };

    return (
        <nav className="bg-background fixed top-8 md:top-9 left-0 w-full z-50">
            <div className="container mx-auto px-4 sm:px-24 py-3 flex justify-between items-center">
                <a href='/' className='py-2' data-aos="fade-down" data-aos-once="true">
                    <h1 className="text-4xl font-bold text-blue mt-2">
                        زهرة <span className='text-yellow'>الريف</span>
                    </h1>
                    <p className='font-bold'>Elect. & Sanitary Ware TR.LLC</p>
                </a>

                <div className="hidden lg:flex items-center space-x-6 font-bold" data-aos="fade-down" data-aos-once="true" data-aos-delay="300">
                    <a href="/" className="text-textcolor hover:text-yellow">HOME</a>
                    <a href="/about" className="text-textcolor hover:text-yellow">ABOUT</a>
                    
                    {/* Dropdown for PRODUCTS */}
                    <div 
                        className="relative"
                        onMouseEnter={() => setIsDropdownOpen(true)}
                        onMouseLeave={() => setIsDropdownOpen(false)}
                    >
                        {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                        <a href="#" className="text-textcolor hover:text-yellow">
                            PRODUCTS
                        </a>
                        {isDropdownOpen && (
                            <div className="absolute left-0 w-48 bg-background border rounded-lg shadow-lg">
                                <a href="/products/electrical" className="block px-4 py-2 text-textcolor hover:text-yellow">Electrical</a>
                                <a href="/products/tools" className="block px-4 py-2 text-textcolor hover:text-yellow">Tools</a>
                                <a href="/products/powertools" className="block px-4 py-2 text-textcolor hover:text-yellow">Power Tools</a>
                                <a href="/products/ironmongery" className="block px-4 py-2 text-textcolor hover:text-yellow">Ironmongery</a>
                                <a href="/products/sanitaryware" className="block px-4 py-2 text-textcolor hover:text-yellow">Sanitary Ware</a>
                                <a href="/products/fittings" className="block px-4 py-2 text-textcolor hover:text-yellow">Fittings</a>
                                <a href="/products/pipes" className="block px-4 py-2 text-textcolor hover:text-yellow">Pipes</a>
                                <a href="/products/others" className="block px-4 py-2 text-textcolor hover:text-yellow">Others</a>
                            </div>
                        )}
                    </div>
                    
                    <a href="/brands" className="text-textcolor hover:text-yellow">BRANDS</a>
                    <a href="/contactus" className="text-textcolor hover:text-yellow">CONTACT</a>
                </div>

                <a
                    href="tel:+97165532390"
                    data-aos="fade-down"
                    data-aos-once="true"
                    data-aos-delay="300"
                    className="relative px-8 py-2 rounded-full bg-blue border-3 border-blue text-white isolation-auto z-10 border-2 border-gray-50
                    before:absolute before:w-full before:transition-all before:duration-700 before:hover:w-full hover:text-black
                    before:-right-full before:hover:right-0 before:rounded-full before:bg-yellow before:-z-10
                    before:aspect-square before:hover:scale-150 overflow-hidden before:hover:duration-700
                    inline-flex items-center justify-center px-4 py-3 text-sm font-semibold 
                    bg-blue border border-gray-200 rounded-full shadow-sm gap-x-2 hover:bg-gray-50
                    disabled:opacity-50 disabled:pointer-events-none hidden lg:inline-flex"
                >
                    For Enquiry
                </a>

                <div className="lg:hidden px-2">
                    <button onClick={toggleMenu} className="text-textcolor focus:outline-none">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
                        </svg>
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            {isOpen && (
                <div className="lg:hidden bg-background rounded p-4 shadow-lg font-bold" data-aos="fade-down" data-aos-once="true" data-aos-delay="200">
                    <a href="/" className="block px-4 py-2 text-textcolor hover:text-yellow" onClick={toggleMenu}>HOME</a>
                    <a href="/about" className="block px-4 py-2 text-textcolor hover:text-yellow" onClick={toggleMenu}>ABOUT</a>
                    <div className="relative">
                            {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                            <a
                            href="#"
                            className="block px-4 py-2 text-textcolor hover:text-yellow"
                            onClick={openDropdown} // Toggle dropdown instead of closing the menu
                        >
                            PRODUCTS
                        </a>
                        {isDropdownOpen && (
                            <div className="absolute top-[-100px]  right-16 w-40 text-xs bg-background border border-gray-200 rounded-lg shadow-lg">
                                <a href="/products/electrical" className="block px-4 py-2 text-textcolor hover:text-yellow" onClick={toggleMenu}>Electrical</a>
                                <a href="/products/tools" className="block px-4 py-2 text-textcolor hover:text-yellow" onClick={toggleMenu}>Tools</a>
                                <a href="/products/powertools" className="block px-4 py-2 text-textcolor hover:text-yellow" onClick={toggleMenu}>Power Tools</a>
                                <a href="/products/ironmongery" className="block px-4 py-2 text-textcolor hover:text-yellow" onClick={toggleMenu}>Iron Mongery</a>
                                <a href="/products/fittings" className="block px-4 py-2 text-textcolor hover:text-yellow" onClick={toggleMenu}>fittings</a>
                                <a href="/products/sanitaryware" className="block px-4 py-2 text-textcolor hover:text-yellow" onClick={toggleMenu}>Sanitary Ware</a>
                                <a href="/products/pipes" className="block px-4 py-2 text-textcolor hover:text-yellow" onClick={toggleMenu}>Pipes</a>
                                <a href="/products/others" className="block px-4 py-2 text-textcolor hover:text-yellow" onClick={toggleMenu}>Others</a>
                                
                            </div>
                                 )}
                    </div>
                    <a href="/brands" className="block px-4 py-2 text-textcolor hover:text-yellow" onClick={toggleMenu}>BRANDS</a>
                    <a href="/contactus" className="block px-4 py-2 text-textcolor hover:text-yellow" onClick={toggleMenu}>CONTACT</a>
                    <a
                    href="tel:+97165532390"
                        data-aos="fade-up" data-aos-once="true" data-aos-delay="300"
                        className="relative px-8 py-2 rounded-full bg-yellow isolation-auto z-10 border-2 border-gray-50
                        before:absolute before:w-full before:transition-all before:duration-700 before:hover:w-full hover:text-white
                        before:-right-full before:hover:right-0 before:rounded-full before:bg-blue before:-z-10
                        before:aspect-square before:hover:scale-150 overflow-hidden before:hover:duration-700
                        inline-flex items-center justify-center px-4 py-3 text-sm font-semibold text-textcolor
                        bg-yellow border border-gray-200 rounded-full shadow-sm gap-x-2 hover:bg-gray-50
                        disabled:opacity-50 disabled:pointer-events-none"
                    >
                        For Enquiry
                    </a>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
