import React, { useState } from 'react'
import Topbar from './Topbar'
import Navbar from './Navbar'
import { Link } from 'react-router-dom'
import { Swiper, SwiperSlide } from 'swiper/react';
import Footer from './Footer'
import { Pagination, Autoplay } from 'swiper/modules';
import HeroSection from './Herocomponent'
import { FiPhone, FiMail, FiMapPin } from 'react-icons/fi'
import 'swiper/css';
import 'swiper/css/pagination';


function Home() {



    const category = [
        { images: ["saniterycat.jpg"], name: "SANITARYWARE" },
        { images: ["ironmongerycat.jpg"], name: "IRONMONGERY" },
        { images: ["electricalcat.jpg"], name: "ELECTRICAL" },
        { images: ["toolscat.jpg"], name: "TOOLS" },
        { images: ["powertoolscat.jpg"], name: "POWERTOOLS" },
        { images: ["pipecat.jpg"], name: "PIPES" },
        { images: ["fittingscat.jpg"], name: "FITTINGS" },
        { images: ["paintsnew.jpg"], name: "OTHERS" },

    ];

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

    const [loading, setLoading] = useState(false);
    const [formSubmitted, setFormSubmitted] = useState(false);

    const sendingmessage = async (event) => {
        event.preventDefault();
        setLoading(true);
        setFormSubmitted(false);

        const formData = new FormData(event.target);
        formData.append("access_key", "bce32227-2e83-4843-9e17-32a4550b043c");

        const object = Object.fromEntries(formData);
        const json = JSON.stringify(object);

        console.log("Form Data:", object);

        try {
            const res = await fetch("https://api.web3forms.com/submit", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    Accept: "application/json",
                },
                body: json,
            });

            const result = await res.json();
            setLoading(false);

            if (result.success) {
                alert("Message sent successfully!");
                setFormSubmitted(true);
                event.target.reset();  // Clear the form fields
            } else {
                console.error("Failed to send message", result);
                alert("Failed to send message. Please check your form and try again.");
            }
        } catch (error) {
            setLoading(false);
            console.error("Error sending message:", error);
            alert("An error occurred while sending the message. Please try again later.");
        }
    };



    return (
        <>
            <div className='container' >
                <Topbar />
                <Navbar />
                <HeroSection />
                <div className="bg-gray-50 ">
                    <>


                        {/* category */}

                        <h2 className="text-center text-3xl font-bold mb-8 py-8 text-gray-700">What We Deal With</h2>

                        <div className="grid grid-cols-2 gap-4 mx-4 sm:grid-cols-3 lg:grid-cols-4 m-8 md:m-16 lg:px-32   gap-y-28  lg:mb-24">
                            
                        {category.map((service, index) => (
  <div key={index} className="relative text-center rounded justify-center lg:w-9/12 shadow-xl group">
    <img
      className="w-full h-48 lg:h-56 object-cover transition-transform duration-300 transform group-hover:scale-105"
      src={`../images/${service.images}`}
      alt={service.name}
    />
    <div className="absolute bottom-[-80px] w-full flex justify-center py-4">
      <div className="bg-white min-w-[80%] px-4 py-3 w-5/5 max-w-sm sm:w-3/4 lg:w-3/3">
        <h2 className="font-bold text-xs sm:text-lg mb-2">{service.name}</h2>
        <Link to={`/products/${service.name}`}>
        <button className="bg-yellow text-black font-bold py-2 px-1 w-full text-xs sm:text-sm">
          View
        </button>
        </Link>
      </div>
    </div>
  </div>
))}

                        </div>


                        {/* About us */}

                        <div className="bg-white text-blue py-16 px-6 md:px-16 lg:px-32" id='about'>
                            <div className="flex flex-col md:flex-row items-center">
                                <div className="w-full md:w-1/2 mb-10 md:mb-0 pr-10" data-aos="zoom-in" data-aos-duration="500">
                                    <img
                                        src="../images/avatar.jpg"
                                        alt="Zahrat Al Reef Shopfront"
                                        className="w-full rounded-lg "
                                    />
                                </div>
                                <div className="w-full h-full md:w-1/2 lg:pr-20" data-aos="fade-up" >
                                    <h1 className="text-4xl font-bold mb-4" data-aos="fade-up" >Welcome to Zahrat <span className='text-yellow'>Al Reef</span> </h1>
                                    <h2 className="text-xl font-semibold mb-6" data-aos="fade-up" data-aos-delay="200" >UAE's Trusted Electrical & Sanitary Ware Solution</h2>
                                    <p className="text-lg mb-4" data-aos="fade-up" data-aos-delay="300">
                                        Established in 2006, Zahrat Al Reef has proudly served the UAE with a wide range of products, from electrical supplies to sanitary items, tools, and much more. With 18 years of experience, we are a one-stop shop for quality products and exceptional service.
                                    </p>
                                    <p className="text-lg mb-6" data-aos="fade-up" data-aos-delay="300">
                                        Our offerings include ironmongery, sanitary items, tools, power tools, electrical supplies, water heaters, gypsum ceiling tiles, paints, fittings, and PVC fittings, all designed to meet the diverse needs of our customers.
                                    </p>
                                    <Link to="/about">
                                        <>

                                            <button
                                                data-aos="fade-up" data-aos-delay="400" className="relative px-8 py-2 rounded-md bg-yellow isolation-auto z-10 border-2 border-gray-50
                                         before:absolute before:w-full before:transition-all before:duration-700 before:hover:w-full hover:text-white
                                          before:-right-full before:hover:right-0 before:rounded-full before:bg-blue before:-z-10
                                           before:aspect-square before:hover:scale-150 overflow-hidden before:hover:duration-700
                                            inline-flex items-center justify-center px-4 py-3 text-sm font-semibold text-black
                                             bg-yellow border border-gray-200 rounded-lg shadow-sm gap-x-2 hover:bg-gray-50
                                              disabled:opacity-50 disabled:pointer-events-none">
                                                Read more
                                            </button>


                                        </>

                                    </Link>
                                </div>
                            </div>
                        </div>





                    </>
                </div >

                {/* why choose us */}

                <div className="bg-blue text-white py-16 px-6 mx-4  lg:mx-32 rounded-lg shadow-lg mb-16 mt-4">
                    <h2 className="text-4xl font-bold mb-8 text-center" data-aos="fade-down" >Why Choose Zahrat <span className='text-white'>Al Reef?</span> </h2>
                    <div className="flex flex-col md:flex-row items-start justify-around space-y-8 md:space-y-0">
                        <div className="flex flex-col items-center" data-aos="zoom-in" data-aos-delay="200">
                            <span className="text-yellow text-6xl font-bold">18+</span>
                            <p className="text-xl mt-4 text-center">Years of Experience</p>
                        </div>

                        <div className="flex flex-col items-center" data-aos="zoom-in" data-aos-delay="200">
                            <span className="text-yellow text-6xl font-bold">100+</span>
                            <p className="text-xl mt-4 text-center">Trusted Brands</p>
                        </div>
                        <div className="flex flex-col items-center" data-aos="zoom-in" data-aos-once="200">
                            <span className="text-yellow text-6xl font-bold">500+</span>
                            <p className="text-xl mt-4 text-center">Successful Projects</p>
                        </div>
                    </div>
                </div>


                {/* brands */}




                <div className='mb-20 px-4 lg:px-24 lg:mx-20 ' id='brands'>
                    <h2 className="text-center text-2xl font-bold mb-8 py-8" data-aos="fade-up">OUR BRANDS</h2>
                    <Swiper
                        modules={[Autoplay]}
                        spaceBetween={20}
                        centeredSlides={true}
                        autoplay={{
                            delay: 2000,  // Time between slides in milliseconds
                            disableOnInteraction: false,  // Autoplay won't stop on user interaction
                        }}
                        speed={1000}  // Transition speed (in milliseconds)
                        loop={true}  // Enable looping
                        slidesPerView={3}
                        breakpoints={{
                            640: {
                                slidesPerView: 2,
                                spaceBetween: 20,
                            },
                            768: {
                                slidesPerView: 3,
                                spaceBetween: 30,
                            },
                            1024: {
                                slidesPerView: 5,
                                spaceBetween: 40,
                            },
                        }}
                    >
                        {brands.map((promo) => (
                            <SwiperSlide key={promo.id}>
                                <div className=" group relative h-24  mb-20 md:mb-40 md:h-24 overflow-hidden flex items-center justify-center bg-white">
                                    <a className="w-full h-full flex justify-center items-center">
                                        <img
                                            src={`../images/${promo.images}`}
                                            alt={promo.name}
                                            className="w-auto h-20 object-contain"
                                        />
                                    </a>
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>


                {/* maintenence work */}
                <div className='relative'>
                    <div className="bg-[#E5f1E3] max-w-7xl  absolute top-[-100px] py-16 px-2 mx-4 lg:mx-32 rounded-lg shadow-lg mb-16 mt-4 flex  md:flex-row items-center">

                        {/* Left Section: Image */}
                        <div className="w-full  md:w-1/4 flex justify-center md:mb-0">
                            <img
                                src="../images/maintanenceimg.png"
                                alt="Maintenance Work"
                                className="rounded-lg object-cover w-full max-h-80 "
                            />
                        </div>

                        {/* Right Section: Content */}
                        <div className="w-full md:w-2/3 flex flex-col justify-center md:pl-10">
                            <h2 className="text-base md:text-4xl lg:text-4xl font-extrabold text-gray-900 mb-4 md:mb-6 leading-tight">
                                Need Maintenance Work?
                            </h2>

                            <p className="text-xs md:text-lg lg:text-xl text-gray-700 mb-6 md:mb-8 leading-relaxed">
                                Call us today to schedule a service or to get a free estimate. We’re here to help you with all your maintenance needs.
                            </p>

                            <a
                                href="tel:+971526346199"
                                className="bg-blue text-xs md:text-base lg:text-lg text-white py-2 md:py-3 px-6 md:px-8 rounded-lg shadow-md hover:bg-blue-700 transition duration-300 text-center font-semibold"
                            >
                                Call Us Now
                            </a>
                        </div>
                    </div>
                </div>



                {/* contactus */}

                <div className="bg-[#E5f1E3] w-full text-center pt-40 px-2 mt-60 md:mt-72">
                    <h2 className="text-3xl font-bold text-gray-900">Contact Us!</h2>
                    <p className="mt-2  text-base text-gray-600">
                        The promise to "get back to you as soon as possible" assures prompt attention to inquiries.
                    </p>
                </div>

                <div className="bg-[#E5f1E3] flex flex-col md:flex-row items-start justify-between p-6 md:p-16 max-w-full mx-auto lg:px-32 md:gap-16">
                    {/* Left Section: Contact Form */}
                    <div className="w-full md:w-1/2 mb-10 md:mb-0">
                    <form className="space-y-6" onSubmit={sendingmessage}>
                        {/* Name Field */}
                        <div>
                            <label className="block text-sm font-medium text-gray-700">Your Name *</label>
                            <input
                                type="text"
                                name="name"
                                className="mt-1 block w-full p-3 border border-gray-300 rounded-md shadow-sm focus:ring-orange-500 focus:border-orange-500 text-sm"
                                placeholder="Enter your name"
                                required
                            />
                        </div>

                        {/* Email Field */}
                        <div>
                            <label className="block text-sm font-medium text-gray-700">Email *</label>
                            <input
                                type="email"
                                name="email"
                                className="mt-1 block w-full p-3 border border-gray-300 rounded-md shadow-sm focus:ring-orange-500 focus:border-orange-500 text-sm"
                                placeholder="Enter your email"
                                required
                            />
                        </div>

                        {/* Phone Number Field */}
                        <div>
                            <label className="block text-sm font-medium text-gray-700">Phone Number *</label>
                            <input
                                type="text"
                                name="phone"
                                className="mt-1 block w-full p-3 border border-gray-300 rounded-md shadow-sm focus:ring-orange-500 focus:border-orange-500 text-sm"
                                placeholder="Enter your phone number"
                                required
                            />
                        </div>

                        {/* Description Field */}
                        <div>
                            <label className="block text-sm font-medium text-gray-700">Description *</label>
                            <textarea
                                name="message"
                                className="mt-1 block w-full p-3 border border-gray-300 rounded-md shadow-sm focus:ring-orange-500 focus:border-orange-500 text-sm"
                                placeholder="Enter your message"
                                rows="4"
                                required
                            ></textarea>
                        </div>

                        {/* Submit Button */}
                        <button
                            type="submit"
                            className="w-full bg-blue text-white py-3 rounded-md shadow-md hover:bg-blue-400 focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 transition duration-300"
                        >
                            Send Message
                        </button>
                    </form>
                </div>

                    {/* Right Section: Contact Information and Map */}
                    <div className="w-full md:w-1/2 flex flex-col justify-start">
                        <ul className="space-y-4">
                            {/* Phone Number */}
                            <li className="flex items-center text-textcolor">
                                <FiPhone className="h-6 w-6 text-blue" />
                                <span className="ml-4 text-sm md:text-lg">+97165532390</span>
                            </li>

                            {/* Email */}
                            <li className="flex items-center text-textcolor">
                                <FiMail className="h-6 w-6 text-blue" />
                                <span className="ml-4 text-sm md:text-lg">zahratalreefelectandsanitary@gmail.com</span>
                            </li>

                            {/* Address */}
                            <li className="flex items-center text-textcolor">
                                <FiMapPin className="h-6 w-6 text-blue" />
                                <span className="ml-4 text-sm md:text-lg">Al Nabbah , Sharjah - U A E</span>
                            </li>
                        </ul>

                        {/* Google Map */}
                        <div className="mt-8 w-full rounded-lg overflow-hidden">
                            <iframe
                                title="Google Map"
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d204881.84468531334!2d55.19500005085082!3d25.363886025259055!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjXCsDIxJzUwLjAiTiA1NcKwMjMnNDIuMCJF!5e0!3m2!1sen!2sus!4v1693166889369935!5m2!1sen!2sus"
                                width="100%"
                                height="250"
                                className="border-0"
                                allowFullScreen=""
                                loading="lazy"
                            ></iframe>
                        </div>
                    </div>
                </div>


                {/* Footer */}

                {/* Call Link */}
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






            </div>

           

            <Footer />
        </>
    )
}

export default Home
