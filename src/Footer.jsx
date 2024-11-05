import React from 'react';
import { Link } from 'react-router-dom';
import { FaFacebookF, FaLinkedinIn, FaInstagram, FaTwitter } from 'react-icons/fa'; // Ensure you have react-icons installed
import logo from "./assets/logo.jpg";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-8 px-4 md:px-8 mt-8">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-2">
        {/* Logo and Company Name */}
        <div className="flex flex-col items-center md:items-start space-y-4">
          <div className="flex items-center space-x-4">
            <div className="relative w-16 h-16 bg-white rounded-full shadow-md overflow-hidden flex items-center justify-center transform transition-transform duration-300 hover:scale-110">
              <img
                src={logo}
                alt="SM Educational Consultant"
                className="h-20 w-20 object-contain"
              />
            </div>
            <div className="flex flex-col">
              <span className="text-xl font-bold">Toddlers</span>
              <span className="text-lg font-bold text-white bg-clip-text text-transparent bg-white tracking-wider drop-shadow-md text-center">
                Club
              </span>
            </div>
          </div>
        </div>

        {/* Navigation Links */}
        <div className="flex flex-col items-center md:items-start space-y-2">
          <h2 className="text-xl font-semibold">Quick Links</h2>
          <Link to="/" className="hover:text-gray-300">Home</Link>
          <Link to="/services" className="hover:text-gray-300">Track Your Order</Link>
          <Link to="/team" className="hover:text-gray-300">Help & Contact Us</Link>
          <Link to="/audit" className="hover:text-gray-300">Terms & Conditions</Link>
          <Link to="/about" className="hover:text-gray-300">Return and Shipment</Link>
          <Link to="/contact" className="hover:text-gray-300">Refund Policy</Link>
        </div>

        <div className="flex flex-col items-center md:items-start space-y-2">
          <h2 className="text-xl font-semibold">Categories</h2>
          <Link to="/" className="hover:text-gray-300">Cloth Diapers</Link>
          <Link to="/services" className="hover:text-gray-300">Baby Clothing</Link>
          <Link to="/team" className="hover:text-gray-300">Baby Blankets</Link>
          <Link to="/audit" className="hover:text-gray-300">Baby Care</Link>
          <Link to="/about" className="hover:text-gray-300">Pillow Covers</Link>
          <Link to="/contact" className="hover:text-gray-300">Baby Gear</Link>
        </div>

        {/* Social Media & Contact Info */}
        <div className="flex flex-col items-center md:items-start space-y-2">
          <h2 className="text-lg font-semibold">Connect with Us</h2>
          <div className="flex space-x-4">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gray-300"
            >
              <FaFacebookF size={24} />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gray-300"
            >
              <FaInstagram size={24} />
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gray-300"
            >
              <FaTwitter size={24} />
            </a>
          </div>
        </div>
      </div>
      {/* Copyright Info */}
      <div className="mt-8 border-t border-gray-700 pt-4 text-center text-gray-500 text-sm">
        &copy; {new Date().getFullYear()} Toddlers Club. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
