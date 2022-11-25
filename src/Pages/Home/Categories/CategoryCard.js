import React from "react";

import { Link } from "react-router-dom";
const CategoryCard = ({ brand }) => {
  const { img, _id} = brand;
  return (
    <>
      <Link to={`../category-details/${_id}`}>
        <div className="card w-96  shadow-xl image-full">
          <figure>
            <img src={img} alt="Shoes" />
          </figure>
          <div className="card-body"></div>
        </div>
      </Link>
    </>
  );
};

export default CategoryCard;
