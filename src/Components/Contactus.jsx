import React, { useState } from "react";
import Topbar from "./Topbar";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { FiPhone, FiMail, FiMapPin } from 'react-icons/fi';
import { Helmet } from 'react-helmet-async';

function ContactUs() {
    const [loading, setLoading] = useState(false);
    // eslint-disable-next-line no-unused-vars
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
            <Helmet>
                <title>Contact Us | Zahrat Al Reef Elect. &amp; Sanitary Ware TR.LLC</title>
                <meta name="description" content="Get in touch with Zahrat Al Reef in Sharjah, UAE. Call, email, or visit us for electrical, sanitary, and hardware product inquiries. We respond promptly." />
                <meta property="og:title" content="Contact Zahrat Al Reef | Sharjah, UAE" />
                <meta property="og:description" content="Reach out to Zahrat Al Reef for electrical, sanitary, and hardware supplies in the UAE. Phone, email, and location available." />
                <meta property="og:url" content="https://www.zahratalreeftrading.com/contactus" />
                <meta property="og:type" content="website" />
                <link rel="canonical" href="https://www.zahratalreeftrading.com/contactus" />
            </Helmet>
            <Topbar />
            <Navbar />

            <div style={{ backgroundImage: 'linear-gradient(to bottom, #f5f5f5, #f2f4f7, #ecf3f7, #e6f3f5, #e2f3ef, #e2f3ef, #e2f3ef, #e2f3ef, #e6f3f5, #ecf3f7, #f2f4f7, #f5f5f5)' }}> 

            <div className="w-full text-center mt-40">
                <h2 className="text-3xl font-bold text-gray-900">Contact Us!</h2>
                <p className="mt-2 text-base text-gray-600">
                    The promise to "get back to you as soon as possible" assures prompt attention to inquiries.
                </p>
            </div>
            <div className="w-full flex flex-col md:flex-row items-start justify-between p-10 md:p-16 max-w-7xl mx-auto md:gap-16">

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
                                disabled={loading}
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
                                disabled={loading}
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
                                disabled={loading}
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
                                disabled={loading}
                            ></textarea>
                        </div>

                        {/* Submit Button */}
                        <button
                            type="submit"
                            className="w-full bg-blue text-white py-3 rounded-md shadow-md hover:bg-blue-400 focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 transition duration-300"
                            disabled={loading}
                        >
                            {loading ? "Sending..." : "Send Message"}
                        </button>
                    </form>
                </div>

                {/* Right Section: Contact Information and Map */}
                <div className="w-full md:w-1/2 flex flex-col justify-start">
                    <ul className="space-y-8">
                        {/* Phone Number */}
                        <li className="flex items-center text-gray-700">
                            <FiPhone className="h-6 w-6 text-blue-500" />
                            <span className="ml-4 text-sm md:text-lg">+97165532390</span>
                        </li>

                        {/* Email */}
                        <li className="flex items-center text-gray-700">
                            <FiMail className="h-6 w-6 text-blue-500" />
                            <span className="ml-4 text-sm md:text-lg">zahratalreefelectandsanitary@gmail.com</span>
                        </li>

                        {/* Address */}
                        <li className="flex items-center text-gray-700">
                            <FiMapPin className="h-6 w-6 text-blue-500" />
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

            {/* WhatsApp Chat */}
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
    );
}

export default ContactUs;
