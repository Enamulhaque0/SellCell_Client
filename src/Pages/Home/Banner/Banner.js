import React from "react";
import image from "../../../assets/image/sell your phone.webp";

const Banner = () => {
  return (
    <div
      className="hero h-96 mt-12"
      style={{
        backgroundImage: `url("https://i.ibb.co/nr2jG85/gilles-lambert-pb-l-F8-VWa-PU-unsplash.jpg")`,
      }}
    >
      <div className="hero-overlay bg-opacity-60"></div>
      <div className="hero-content text-center text-neutral-content">
        <div className="max-w-md">
          <p className="mb-5 font-bold text-4xl italic">THE MOST CASH FOR YOUR PHONE <span className="text-orange-600">GUARANTEED!</span></p>
          <button className="btn btn-primary">Get Started</button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
