import React from "react";
import { useNavigate } from 'react-router-dom'; // Updated import
import './Category.css'

import BabyClothing from "./assets/BabyClothing.jpeg"; // Placeholder image for fruits
import BabyGear from "./assets/BabyGear.jpeg"; // Placeholder image for vegetables
import BabyPillow from "./assets/BabyPillow.jpg"; // Placeholder image for packaged foods
import BabyBlanket from "./assets/BabyBlanket.jpeg";
import babycare from "./assets/babycare.jpg";

const categories = [
  { name: "Baby Clothing", image: BabyClothing  },
  { name: "Pillow", image: BabyPillow  },
  { name: "Baby Gear", image: BabyGear  },
  { name: "Baby Blanket", image: BabyBlanket  },
  { name: "Baby Care", image: babycare },
];

const Category = () => {

  const navigate = useNavigate(); // Use useNavigate

  const handleCategoryClick = (name) => {
    navigate(`/category/${name}`); // Use navigate instead of history.push
  };

  return (
    <div className="flex flex-row justify-center items-start">
      

      <div className="content flex-1 container mx-auto">

        <div>
          <p className="text-5xl font-bold my-6 font-[Cambria] text-center text-blue-600">SHOP BY CATEGORY</p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-8 p-4">
        {categories.map((category) => (
          <div key={category.name} className="card" onClick={() => handleCategoryClick(category.name)}>
            <img src={category.image} alt={category.name} className="category-image" />
            <h2 className="category-name">{category.name}</h2>
          </div>
        ))}
      </div>
      </div>

      
    </div>
  );
};

export default Category;
