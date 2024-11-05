import React, { useState, useEffect } from "react";
import { IoHomeOutline } from "react-icons/io5";
import { FaChevronDown } from "react-icons/fa";
import { IoSearchOutline } from "react-icons/io5";
import { IoCartOutline } from "react-icons/io5";
import { IoHeartOutline } from "react-icons/io5";
import { TbTruckDelivery } from "react-icons/tb";
import { FaUserCircle } from "react-icons/fa";
import logo from "./assets/logo.jpg";
import Advertise from "./Advertise";
import "./App.css";

const Header = () => {
  const [scrollingDown, setScrollingDown] = useState(false);
  const [prevScrollPos, setPrevScrollPos] = useState(window.pageYOffset);
  const [atTop, setAtTop] = useState(true);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false); // state for dropdown

  const handleScroll = () => {
    const currentScrollPos = window.pageYOffset;
    setScrollingDown(currentScrollPos > prevScrollPos);
    setAtTop(currentScrollPos === 0);
    setPrevScrollPos(currentScrollPos);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [prevScrollPos]);

  // Categories
  const categories = [
    "Baby Clothing",
    "Baby Care",
    "Baby Gear",
    "Baby Pillow",
    "Baby Blanket"
  ];

  return (
    <div>
      <Advertise />
      <header
        className={`header fixed inset-x-0 top-0 z-30 flex justify-center transition-all duration-600 ${
          scrollingDown ? "opacity-0" : "opacity-100"
        } ${atTop ? "bg-transparent mt-12" : "bg-white mt-0"}`}
      >
        <div className="w-full p-4 border-b transition-colors border-transparent sm:border-primary">
          <div className="flex items-center justify-between">
            <div className="w-32 flex items-center">
              <img src={logo} alt="Logo" className="h-16 w-auto" />
            </div>

            <div className="flex h-full flex-col">
              <div className="flex h-full items-center gap-8 bg-gray-100 rounded-lg h-18 p-2 w-auto">
                <button className="hover:bg-gray-300 flex items-center gap-2 rounded-full p-2 text-md font-semibold transition-colors text-secondary bg-gray-200 h-12 w-auto">
                  <IoHomeOutline className="h-6 w-6" />
                  <span>Home</span>
                </button>

                <div
                  className="relative"
                  onMouseEnter={() => setIsDropdownOpen(true)} // Show dropdown on hover
                  onMouseLeave={() => setIsDropdownOpen(false)} // Hide dropdown on hover out
                >
                  <button className="hover:bg-gray-300 flex items-center gap-2 rounded-full p-2 text-md font-semibold transition-colors text-secondary bg-gray-200 h-12 w-auto">
                    <span>Shop By Category</span>
                    <FaChevronDown />
                  </button>

                  {isDropdownOpen && (
                    <div className="absolute left-0 mt-2 bg-white border rounded-md shadow-lg z-10 w-48">
                      <ul className="list-none p-2">
                        {categories.map((category, index) => (
                          <li key={index} className="py-2 px-4 hover:bg-gray-200">
                            <a href={`/category/${category}`} className="text-gray-800">{category}</a>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>

                <button className="hover:bg-gray-300 flex items-center gap-2 rounded-full p-2 text-md font-semibold transition-colors text-secondary bg-gray-200 h-12 w-auto">
                  <TbTruckDelivery className="h-6 w-6" />
                  <span>Track Order</span>
                </button>
              </div>
            </div>

            <div className="flex w-48 gap-2 items-center justify-end">
              <div>
                <IoSearchOutline className="w-7 h-7" />
              </div>
              <div>
                <IoHeartOutline className="w-7 h-7" />
              </div>
              <div>
                <IoCartOutline className="w-7 h-7" />
              </div>
              <button className="hover:bg-gray-300 flex items-center gap-2 rounded-full p-2 text-sm transition-colors text-secondary bg-gray-200">
                <FaUserCircle className="h-8 w-8 text-gray-500" />
                <span>Login</span>
              </button>

              <button className="hover:bg-gray-300 flex items-center gap-2 rounded-full p-2 text-md font-semibold transition-colors text-secondary bg-gray-200 h-12 w-auto">
                <span>Register</span>
              </button>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
};

export default Header;
