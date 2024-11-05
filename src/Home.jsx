import React from "react";
import Header from "./Header";
import CarouselBanner from "./CarouselBanner";
import Category from "./Category";
import BestSeller from "./BestSeller";
import Footer from "./Footer";
import { Outlet } from "react-router-dom";

const Home = () => {
  return (
    <div className="relative bg-zinc-50 min-h-screen w-full">
      <Header />
      <div className="mt-24">
      <CarouselBanner/>
      </div>
      <div className="h-auto w-full bg-blue-100">
        <div className="max-w-7xl w-full mx-auto">
          <Category/>
        </div>
      </div>
      <div className="h-auto w-full">
        <div className="max-w-7xl w-full mx-auto">
          <BestSeller/>
        </div>
      </div>
      <Footer/>
    </div>
  );
}

export default Home;
