import React from 'react';

const MyOrderRow = ({order,i}) => {
  const {productName,productInfo}=order
  const {image,resalePrice}=productInfo
    return (
        <tr>
      <td>{i+1}</td>
      <td>
        <div className="flex items-center space-x-3">
          <div className="avatar">
            <div className="rounded w-24 h-24">
             
                <img
                  src={image}
                  alt="Avatar Tailwind CSS Component"
                />
              
            </div>
          </div>
         
        </div>
      </td>
      
      <td>{productName}</td>
      <td>$ {resalePrice}</td>
      <td><button className="btn btn-xs">Pay</button></td>
      
    </tr>
    );
};

export default MyOrderRow;