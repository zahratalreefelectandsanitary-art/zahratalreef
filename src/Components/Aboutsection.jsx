import React from 'react'
import Topbar from './Topbar'
import Navbar from './Navbar'
import { FaWrench, FaPaintRoller, FaTools, FaLightbulb, FaShower, FaDoorClosed, FaBolt, FaThermometerHalf } from 'react-icons/fa';
import Footer from './Footer';

function Aboutsection() {
    const products = [
        { images: ["aboutimg1.jpg"], name: "SANITARY ITEMS" },
        { images: ["aboutimg2.jpg"], name: "IRONMONGERY" },
        { images: ["aboutimg3.jpg"], name: "ELECTRICAL" },
        { images: ["aboutimg4.jpg"], name: "PAINTS" },
        { images: ["aboutimg5.jpg"], name: "POWER TOOLS" },
        { images: ["aboutimg6.jpg"], name: "TOOLS" },
    ];

    return (
        <>
            <Topbar />
            <Navbar />
            
            {/* Main Section */}
            <main className="py-16 px-6 md:px-16 lg:px-32 mt-24" 
                style={{ backgroundImage: 'linear-gradient(to bottom, #f5f5f5, #f2f4f7, #ecf3f7, #e6f3f5, #e2f3ef, #e2f3ef, #e2f3ef, #e2f3ef, #e6f3f5, #ecf3f7, #f2f4f7, #f5f5f5)' }}>
                
                {/* About Section */}
                <section>
                    <h1 className="text-xl xs:text-2xl text-center sm:text-3xl md:text-5xl lg:py-4 font-bold text-blue mb-4">
                        About Zahrat <span className="text-yellow">Al Reef</span>
                    </h1>

                    <div className="flex lg:flex-row items-center lg:items-start mb-12">
                        {/* Image Section */}
                        <div className="lg:flex-1 mt-8 lg:mt-0 min-h-[300px] lg:block hidden">
                            <img
                                src="../images/arabi.png"
                                alt="Zahrat Al Reef Products Overview"
                                className="w-full h-auto object-cover lg:max-w-[80%] lg:max-h-[300px] xl:max-h-[350px] lg:mx-auto"
                                loading="lazy"
                            />
                        </div>

                        {/* Text Section */}
                        <div className="flex-1 text-left lg:pr-8">
                            <p className="text-xs xs:text-xs sm:text-base md:text-lg lg:text-2xl text-textcolor leading-relaxed max-w-3xl">
                                With over 18 years of experience, Zahrat Al Reef has been a trusted partner in supplying top-quality products for electrical, sanitary, and hardware needs across the UAE. Our diverse offerings cater to businesses, contractors, and individuals, ensuring that every project receives the right tools and materials.
                            </p>
                        </div>
                    </div>
                </section>

                {/* Products Section */}
                <section aria-labelledby="products-heading">
                    <h2 id="products-heading" className="sr-only">Our Products</h2>
                    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-3 gap-8">
                        {products.map((product, index) => (
                            <div key={index} className="overflow-hidden shadow-md">
                                <img
                                    src={`../images/${product.images}`}
                                    alt={`Product image for ${product.name}`}
                                    className="w-full h-full object-cover"
                                    loading="lazy"
                                />
                                <p className="text-center mt-2 font-bold">{product.name}</p>
                            </div>
                        ))}
                    </div>
                </section>
            </main>

            {/* Call to Action Links */}
            <a
                href="https://wa.me/+9710526346199"
                className="fixed bottom-4 right-4 p-3 transition duration-300 z-50"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Chat with us on WhatsApp"
            >
                <img
                    src="../images/whatsapp.png"
                    alt="WhatsApp"
                    className="w-20 h-20"
                />
            </a>

            <a
                href="tel:+971526346199"
                className="fixed bottom-24 right-6 p-3 transition duration-300 z-50"
                aria-label="Call us"
            >
                <img
                    src="../images/callicon.png"
                    alt="Call"
                    className="w-16 h-16"
                />
            </a>

            <Footer />
        </>
    );
}

export default Aboutsection;
