import React from "react";
import AdvertiseCard from "./AdvertiseCard";

const Advertise = ({ advertise }) => {
  return (
   <>
   
   {
    advertise.length > 0 &&  <section className="">
    <h1 className="text-4xl font-bold text-center my-24">
      MOST POPULAR TRADEINS
    </h1>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
      {advertise?.map((av) => (
        <AdvertiseCard key={av?._id} advertise={av}></AdvertiseCard>
      ))}
    </div>
  </section>
   }
   
   </>
  );
};

export default Advertise;
