import React from "react";
import { Link } from "react-router-dom";

const AdvertiseCard = ({ advertise }) => {
  const { title, categoryId, image, resalePrice } = advertise;
  return (
   <>
   
  
    <div className="card card-side bg-base-100 shadow-xl lg:w-96 mx-auto">
      <figure className="py-3 rounded">
        <img src={image} alt="Movie" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{title}</h2>
        <p className="text-3xl font-bold text-orange-400">
          Price <br /> <span className="text-orange-600">$ {resalePrice}</span>
        </p>
        <div className="card-actions justify-end">
          <Link to={`category/${categoryId}`}>
            {" "}
            <button className="btn btn-primary">Details</button>
          </Link>
        </div>
      </div>
    </div>
   
   
   </>
  );
};

export default AdvertiseCard;
