import React from 'react';

const Services = () => {
  const services = [
    {
      image: '../images/sanitaryimg1.jpg',
      title: 'sanitary ware',
      description: 'Lorem ipsum dolor sit amet',
    },
    {
      image: '../images/sanitaryimg2.jpg',
      title: 'Electrical ',
      description: 'Lorem ipsum dolor sit amet',
    },
    {
      image: '../images/sanitaryimg3.jpg',
      title: 'Plumbing ',
      description: 'Lorem ipsum dolor sit amet',
    },
    {
      image: '../images/sanitaryimg4.jpg',
      title: 'Plumbing ',
      description: 'Lorem ipsum dolor sit amet',
    },
  ];

  return (
    <div className="grid grid-cols-2 gap-4 py-6 mx-4 sm:grid-cols-3 lg:grid-cols-4 m-16 lg:px-32   ">
    {services.map((service, index) => (
      <div key={index} className="relative text-center rounded  justify-center lg:w-9/12 mt-20 lg:mt-40 shadow-xl" >
        <img 
          className="w-full object-cover lg:w-12/12 text-center"  // Image size reduced for large screens
          src={service.image} 
          alt={service.title} 
        />
        <div className="absolute bottom-[-90px] w-full flex justify-center py-4">
          <div className="bg-white  px-4 py-3 w-5/5 max-w-sm sm:w-3/4 lg:w-3/3">
            <h2 className="font-bold text-xs  sm:text-lg mb-2">{service.title}</h2> {/* Adjusted text size */}
            <button className="bg-blue mt-4 text-white font-bold py-2 px-1 w-full text-xs sm:text-sm"> {/* Adjusted button padding and text size */}
              View Details
            </button>
          </div>
        </div>
      </div>
    ))}
    </div>
  );
};

export default Services;
