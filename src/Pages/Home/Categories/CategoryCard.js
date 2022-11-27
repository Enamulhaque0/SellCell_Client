import React from "react";

import { Link } from "react-router-dom";
const CategoryCard = ({ brand }) => {
  const { img, _id} = brand;
  return (
    <>
      <Link to={`../category/${_id}`}>
        <div className="card w-80 h-48 dark:bg-white shadow-xl image-full border-1">
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
