import React from "react";
import applePhone from "../../../assets/image/sell your phone.webp";

const IphoneBanner = () => {
  return (
    <div className="mt-24">
      <h1 className="text-2xl lg:text-4xl italic font-bold text-center pb-12">
        Upgrading to the new{" "}
        <span className="text-orange-600 ">
          iPhone 14? <br />
          Sell your old phone here for the most cash!
        </span>
      </h1>
      <div className="flex justify-center items-center mt-8">
        <img className="w-96" src={applePhone} alt="" />
      </div>
      <h1 className="text-2xl text-center mt-8 font-serif">
        TIP: Values of old models typically drop when new model released -
        <br /> so lock your price in today for up to 30 days!
      </h1>
    </div>
  );
};

export default IphoneBanner;
