import React from 'react';
import MyOrderRow from './MyOrderRow';

const MyOrders = () => {
    return (
        <div>
        <h2 className="text-5xl my-8">You have  Orders</h2>
        <div className="overflow-x-auto w-full">
            <table className="table w-full">
                <thead>
                    <tr>
                       
                        <th>Image</th>
                        <th>title</th>
                        <th>Price</th>
                        <th>Payment</th>
                    </tr>
                </thead>
                <tbody>
                    <MyOrderRow></MyOrderRow>
                </tbody>
            </table>
        </div>
    </div>
    );
};

export default MyOrders;