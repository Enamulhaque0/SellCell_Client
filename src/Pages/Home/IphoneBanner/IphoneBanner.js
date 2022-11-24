import React from "react";
import applePhone from "../../../assets/image/sell your phone.webp";

const IphoneBanner = () => {
  return (
    <div>
      <h1 className="text-4xl font-bold text-center mt-24 text-orange-400">
        Upgrading to the new iPhone 14?
      </h1>
      <div className="flex justify-center items-center mt-8">
        <img src={applePhone} alt="" />
      </div>
      <h1 className="text-2xl text-center mt-8 font-serif">TIP: Values of old models typically drop when new model released -
<br /> so lock your price in today for up to 30 days!</h1>
    </div>
  );
};

export default IphoneBanner;
