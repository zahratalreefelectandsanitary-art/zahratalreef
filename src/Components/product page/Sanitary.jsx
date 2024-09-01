import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css'; // Import the AOS CSS
import Topbar from '../Topbar';
import Navbar from '../Navbar';
import Footer from '../Footer';

const Sanitaryware = () => {
  
    const products = [
        { images: ["sanitaryimg1.jpg"], name: "SANITARY ITEMS" },
        { images: ["sanitaryimg2.jpg"], name: "SANITARY ITEMS" },
        { images: ["sanitaryimg3.jpg"], name: "SANITARY ITEMS" },
        { images: ["sanitaryimg4.jpg"], name: "SANITARY ITEMS" },
        { images: ["sanitaryimg5.jpg"], name: "SANITARY ITEMS" },
        { images: ["sanitaryimg6.jpg"], name: "SANITARY ITEMS" },
        { images: ["sanitaryimg7.jpg"], name: "SANITARY ITEMS" },
        { images: ["sanitaryimg8.jpg"], name: "SANITARY ITEMS" },
        { images: ["sanitaryimg9.jpg"], name: "SANITARY ITEMS" },
        { images: ["sanitaryimg10.jpg"], name: "SANITARY ITEMS" },
        { images: ["sanitaryimg11.jpg"], name: "SANITARY ITEMS" },
        { images: ["sanitaryimg12.jpg"], name: "SANITARY ITEMS" },
        { images: ["sanitaryimg13.jpg"], name: "SANITARY ITEMS" },
        { images: ["sanitaryimg14.jpg"], name: "SANITARY ITEMS" },
        { images: ["sanitaryimg15.jpg"], name: "SANITARY ITEMS" },
        { images: ["sanitaryimg16.jpg"], name: "SANITARY ITEMS" },
    ];

    return (
        <>
            <Topbar />
            <Navbar />

            <div
                className="w-full mx-auto py-20 px-4 mt-12"
                style={{ backgroundImage: 'linear-gradient(to bottom, #f5f5f5, #f2f4f7, #ecf3f7, #e6f3f5, #e2f3ef, #e2f3ef, #e2f3ef, #e2f3ef, #e6f3f5, #ecf3f7, #f2f4f7, #f5f5f5)' }}
            >
                <div
                    className="w-full text-center py-12"
                    data-aos="fade-up"
                    data-aos-delay="200"
                >
                    <h2 className="text-xl md:text-3xl font-bold text-gray-900">
                        Sanitary wares
                    </h2>
                    <p className="mt-2 text-sm md:text-base text-gray-600">
                        "Discover our premium range of sanitary ware, blending style with functionality for every space."
                    </p>
                </div>

                <div className="grid grid-cols-3 sm:grid-cols-3 lg:grid-cols-4 gap-4 px-4 max-w-screen-lg mx-auto">
                    {products.map((product, index) => (
                        <div
                            key={index}
                            className="overflow-hidden shadow-md w-full sm:w-11/12 lg:w-12/12 mx-auto"
                            data-aos="zoom-in"
                            data-aos-delay={`${200+  index * 100}`} // Incremental delay for each product
                        >
                            <img
                                src={`../images/${product.images}`}
                                alt={product.name}
                                className="w-full h-full object-cover rounded-lg"
                            />
                        </div>
                    ))}
                </div>
            </div>

            <div className="bg-blue text-white py-10">
                <div className="max-w-6xl mx-auto px-4">
                    <div className="grid gap-x-4 md:gap-x-8 gap-y-4 grid-cols-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 text-center">
                        {["GROHE", "KLUDI RAK", "PEX ITALY", "MATT ENGLAND", "BATHX INDIA", "MILANO ITALY", "PEGLER", "VIEGA", "ALLFLEX UAE", "HARO GERMANY"].map((brand, index) => (
                            <div
                                key={index}
                                className="text-xs sm:text-xl md:text-2xl lg:text-2xl font-bold"
                                data-aos="fade-up"
                                data-aos-delay={`${200 + index * 100}`} // Incremental delay for each brand
                            >
                                <span>{brand}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            <a
                href="https://wa.me/+9710526346199"
                className="fixed bottom-4 right-4 p-3 transition duration-300 z-50"
                target="_blank"
                rel="noopener noreferrer"
            >
                <img
                    src="../images/whatsapp.png"
                    alt="WhatsApp"
                    className="w-20 h-20"
                />
            </a>

            {/* Call Button */}
            <a
                href="tel:+971065532390"
                className="fixed bottom-24 right-6 p-3 transition duration-300 z-50"
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
};

export default Sanitaryware;
