import React from "react";
import { useLoaderData } from "react-router-dom";
import CategoryDetails from "./CategoryDetails";

const Category = () => {

   const products = useLoaderData()
   
    
  return (
    <>
      <section>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          
{
    products?.map(product=> <CategoryDetails key={product?._id} product={product} ></CategoryDetails>)
}

        </div>
      </section>
    </>
  );
};

export default Category;
