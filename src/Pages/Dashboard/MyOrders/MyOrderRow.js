import React from 'react';

const MyOrderRow = () => {
    return (
        <tr>
      
      <td>
        <div className="flex items-center space-x-3">
          <div className="avatar">
            <div className="rounded w-24 h-24">
             
                <img
                  src="data:image/jpeg;base64,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"
                  alt="Avatar Tailwind CSS Component"
                />
              
            </div>
          </div>
         
        </div>
      </td>
      
      <td>Iphone 14</td>
      <td>$ 1199</td>
      <td><button className="btn btn-xs">Pay</button></td>
      
    </tr>
    );
};

export default MyOrderRow;