import React from "react";
import { useNavigate } from 'react-router-dom';
import './BestSeller.css'

import BabyClothing from "./assets/BabyClothing.jpeg"; // Placeholder image for fruits
import BabyGear from "./assets/BabyGear.jpeg"; // Placeholder image for vegetables
import BabyPillow from "./assets/BabyPillow.jpg"; // Placeholder image for packaged foods
import BabyBlanket from "./assets/BabyBlanket.jpeg";
import babycare from "./assets/babycare.jpg";


const bestSellers = [
    { name: "Baby Clothing", image: BabyClothing  },
    { name: "Pillow", image: BabyPillow  },
    { name: "Baby Gear", image: BabyGear  },
    { name: "Baby Blanket", image: BabyBlanket  },
    { name: "Baby Care", image: babycare },
];

const BestSeller = () => {
  const navigate = useNavigate();

  const handleCategoryClick = (name) => {
    navigate(`/category/${name}`);
  };

  return (
    <div className="flex flex-row justify-center items-start">
      <div className="content flex-1 BScontainer mx-auto">
        <div>
          <p className="text-5xl font-bold my-6 font-[Cambria] text-center">BEST SELLERS</p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-8 p-4">
          <div className="col-span-2 row-span-2 card" onClick={() => handleCategoryClick(bestSellers[0].name)}>
            <div className="image-container">
            <img src={bestSellers[0].image} alt={bestSellers[0].name} className="BScategory-image" />
            <h2 className="BScategory-name bg-gray-800 text-center">{bestSellers[0].name}</h2>
            </div>
          </div>
          {bestSellers.slice(1).map((category) => (
            <div key={category.name} className="card" onClick={() => handleCategoryClick(category.name)}>
                <div className="image-container">
                <img src={category.image} alt={category.name} className="BScategory-image" />
                <h2 className="BScategory-name bg-gray-800 text-center">{category.name}</h2>
                </div>
              
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BestSeller;
