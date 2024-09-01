import React from 'react';

const HeroSection = () => {
  return (
    <div className="bg-background py-20 mt-24 lg:mt-32 px-4 md:px-8">
    <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center">
        {/* Left Side */}
        <div 
            className="lg:w-1/2" 
            data-aos="fade-right"
            data-aos-delay="200"
        >
            <h1 
                className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-textcolor leading-tight mb-6"
                data-aos="fade-up"
                data-aos-delay="300"
            >
                Find Everything  <br />you need in one place
            </h1>
            <p 
                className="text-gray-600 text-lg md:text-xl mb-8"
                data-aos="fade-up"
                data-aos-delay="400"
            >
                We're here with top products & materials from the world's leading brands!
            </p>
            <div 
                className="flex gap-4"
                data-aos="fade-up"
                data-aos-delay="500"
            >
                <a href="tel:+97165532390" className="bg-blue text-white text-sm sm:text-base md:text-lg font-semibold py-2 sm:py-3 md:py-4 px-4 sm:px-6 md:px-8 rounded-full hover:bg-background hover:text-textcolor border-2 hover:border-textcolor transition">
                    Call us now
                </a>
                <a href='/about' className="bg-white border-2 border-textcolor text-textcolor text-sm sm:text-base md:text-lg font-semibold py-2 sm:py-3 md:py-4 px-4 sm:px-6 md:px-8 rounded-full hover:bg-gray-100 transition">
                    Learn more
                </a>
            </div>

            <div 
                className="max-w-7xl mx-auto mt-16 lg:mt-24 flex justify-between text-center space-x-8 lg:space-x-24"
                data-aos="zoom-in"
                data-aos-delay="200"
            >
                <div className="flex items-center">
                    <div>
                        <p className="text-2xl lg:text-3xl font-bold text-gray-900">10K<span>+</span></p>
                        <p className="text-gray-600"> Customers</p>
                    </div>
                </div>
                <div className="flex items-center border-l border-gray-800 pl-6 lg:pl-8">
                    <div>
                        <p className="text-2xl lg:text-3xl font-bold text-gray-900">Top</p>
                        <p className="text-gray-600">Brands</p>
                    </div>
                </div>
                <div className="flex items-center border-l border-gray-800 pl-6 lg:pl-8">
                    <div>
                        <p className="text-2xl lg:text-3xl font-bold text-gray-900">Since</p>
                        <p className="text-gray-600">2006</p>
                    </div>
                </div>
            </div>
        </div>

        {/* Right Side */}
        <div 
className="lg:w-1/2 mt-12 lg:ml-16 lg:mt-0 grid grid-cols-2 gap-3 justify-center items-center mx-auto"
data-aos="fade-left"
data-aos-delay="200"
>
<div 
className="relative row-span-2"
data-aos="zoom-in"
data-aos-delay="300"
>
<img 
    src="../images/sample5.jpg" 
    alt="A detailed view of a sample product" 
    className="w-full h-full object-cover rounded-lg transform lg:scale-100 hover:scale-105 transition-transform duration-300 ease-in-out" 
/>
</div>
<div 
className="relative lg:ml-0"
data-aos="zoom-in"
data-aos-delay="400"
>
<img 
    src="../images/heroimg.png" 
    alt="Hero image showing a key feature" 
    className="w-4/5 h-full object-cover rounded-lg transform lg:scale-100 hover:scale-105 transition-transform duration-300 ease-in-out" 
/>
</div>
<div 
className="relative"
data-aos="zoom-in"
data-aos-delay="500"
>
<img 
    src="../images/sample13.jpg" 
    alt="Another sample product in detail" 
    className="w-4/5 h-full object-cover rounded-lg transform lg:scale-100 hover:scale-105 transition-transform duration-300 ease-in-out shadow-md" 
/>
</div>
</div>

    </div>
</div>
  );
};

export default HeroSection;
