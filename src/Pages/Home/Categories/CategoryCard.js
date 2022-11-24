import React from 'react';
import apple from '../../../assets/image/apple.png'
import sumsu from '../../../assets/image/samsung.png'
import onePluse from '../../../assets/image/oneplus.png'
const CategoryCard = () => {
    return (
        <>
        
        <div className="card w-96  shadow-xl image-full">
  <figure><img  src={apple} alt="Shoes" /></figure>
  <div className="card-body">
    <h2 className="card-title">Apple</h2>
    
  </div>
</div>
<div className="card w-96 bg-base-100 shadow-xl image-full">
  <figure><img src={sumsu} alt="Shoes" /></figure>
  <div className="card-body">
    <h2 className="card-title">sumsu</h2>
    
  </div>
</div>
<div className="card w-96 bg-base-100 shadow-xl image-full">
  <figure><img src={onePluse} alt="Shoes" /></figure>
  <div className="card-body">
    <h2 className="card-title">onePluse</h2>
    
  </div>
</div>
        
        
        
        </>

    );
};

export default CategoryCard;