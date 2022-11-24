import React from 'react';

const MyProducts = () => {
    return (
        <div>
            <h3 className="text-3xl mb-5">My Products</h3>
            <div className="overflow-x-auto">
                <table className="table w-full">
                    <thead>
                        <tr>
                           
                            <th>Name</th>
                            <th>Price</th>
                            <th>Status</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        
                            
                            <tr >
                               
                                <td>Name</td>
                                <td>$439</td>
                                <td>available or sold</td>
                                <td><button className="btn btn-xs">advertise</button></td>
                            </tr>
                        
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyProducts;