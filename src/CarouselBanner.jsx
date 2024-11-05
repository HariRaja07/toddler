// src/CarouselBanner.js
import React from 'react';
import { Carousel } from 'antd';
import banner1 from "./assets/banner1.jpeg";
import banner2 from "./assets/banner2.jpeg";
import banner3 from "./assets/banner3.jpeg";

const CarouselBanner = () => {
  const banners = [
    {
      id: 1,
      image: banner1,
      alt: 'Banner 1',
    },
    {
      id: 2,
      image: banner2,
      alt: 'Banner 2',
    },
    {
      id: 3,
      image: banner3,
      alt: 'Banner 3',
    },
  ];

  return (
    <div className=" w-full mx-auto">
      <Carousel autoplay className=''>
        {banners.map((img) => (
          <div key={img.id} className="flex items-center justify-center"> {/* Set fixed height for the container */}
            <img
              src={img.image}
              alt={img.alt}
              className="w-full object-cover h-96" // Use h-full for consistent height
            />
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default CarouselBanner;
