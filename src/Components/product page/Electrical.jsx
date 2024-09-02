import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css'; // Import the AOS CSS
import Topbar from '../Topbar';
import Navbar from '../Navbar';
import Footer from '../Footer';

const Product = () => {

    const products = [
        { images: ["electrical1.jpg"], name: "Electrical" },
        { images: ["electrical2.jpg"], name: "Electrical" },
        { images: ["electrical3.jpg"], name: "Electrical" },
        { images: ["electrical4.jpg"], name: "Electrical" },
        { images: ["electrical5.jpg"], name: "Electrical" },
        { images: ["electrical6.jpg"], name: "Electrical" },
        { images: ["electrical7.jpg"], name: "Electrical" },
        { images: ["electrical8.jpg"], name: "Electrical" },
        { images: ["electrical14.jpg"], name: "Electrical" },
        { images: ["electrical10.jpg"], name: "Electrical" },
        { images: ["electrical18.jpg"], name: "Electrical" },
        { images: ["electrical19.jpg"], name: "Electrical" },
       
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
                        Electrical Items
                    </h2>
                    <p className="mt-2 text-sm md:text-base text-gray-600">
                        "Explore our high-quality electrical products, combining reliability and innovation for all your needs."
                    </p>

                </div>

                <div className="grid grid-cols-3 sm:grid-cols-3 lg:grid-cols-4 gap-4 px-4 max-w-screen-lg mx-auto">
                    {products.map((product, index) => (
                        <div
                            key={index}
                            className="overflow-hidden shadow-md w-full sm:w-11/12 lg:w-12/12 mx-auto"
                            data-aos="zoom-in"
                            data-aos-delay={`${200 + index * 100}`} // Incremental delay for each product
                        >
                            <img
                                src={`../images/products/${product.images}`}
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
                        {["DUCAB","NCI","RR","ALFANAR","MESC","DECODUCT","LEGRANT","V-MAX","ABB","HANER","REXTON RICHI"].map((brand, index) => (
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
          href="tel:+971526346199"
          className="fixed bottom-24 right-6 p-3 transition duration-300 z-50"
        >
          <img src="../images/callicon.png" alt="Call" className="w-16 h-16" />
        </a>

            <Footer />
        </>
    );
};

export default Product;
