import React, { useEffect } from 'react';
import Topbar from './Topbar';
import Navbar from './Navbar';
import Footer from './Footer';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Brands = () => {
    useEffect(() => {
        AOS.init({ duration: 1000 });
    }, []);

    const brands = [
        { images: ["brand1.png"], name: "SANITERY ITEMS" },
        { images: ["brand2.png"], name: "SANITERY ITEMS" },
        { images: ["brand3.png"], name: "SANITERY ITEMS" },
        { images: ["brand4.png"], name: "SANITERY ITEMS" },
        { images: ["brand5.png"], name: "SANITERY ITEMS" },
        { images: ["brand66.png"], name: "SANITERY ITEMS" },
        { images: ["brand7.png"], name: "SANITERY ITEMS" },
        { images: ["brand8.png"], name: "SANITERY ITEMS" },
        { images: ["brand9.png"], name: "SANITERY ITEMS" },
        { images: ["brand10.png"], name: "SANITERY ITEMS" },
        { images: ["brand11.png"], name: "SANITERY ITEMS" },
        { images: ["brand12.png"], name: "SANITERY ITEMS" },
      
    ];

    return (
        <>
            <Topbar />
            <Navbar />
            <div  className=" w-full mx-auto py-20 px-4 mt-20 bg-white">
                <h2
                    className="text-center text-xm md:text-3xl  font-bold mb-8"
                    data-aos="fade-up"
                >
                    OUR TRUSTED BRANDS
                </h2>

                <div
                    className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-3 gap-4 px-4 max-w-screen-md mx-auto"
                >
                    {brands.map((product, index) => (
                        <div
                            key={index}
                            className="overflow-hidden  w-full sm:w-11/12 lg:w-12/12 mx-auto"
                            data-aos="fade-up"
                            data-aos-delay={index * 100}
                        >
                            <img
                                src={`../images/${product.images}`}
                                alt={product.name}
                                className="w-full h-auto max-h-36 p-4 object-cover"
                            />
                        </div>
                    ))}
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
                href="tel:+971526346199"
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

export default Brands;
