import React from 'react';

const AllSeller = () => {
    return (
        <div>
        <h3 className="text-3xl mb-5">All Seller</h3>
        <div className="overflow-x-auto">
            <table className="table w-full">
                <thead>
                    <tr>
                        <th>1</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Verify</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    
                        
                        <tr >
                            <th>1</th>
                            <td>Name</td>
                            <td>Enamulhaq243@gmail.com</td>
                            <td><button className="btn btn-xs">Verify</button></td>
                            <td><button className="btn btn-xs">Delete</button></td>
                        </tr>
                    
                </tbody>
            </table>
        </div>
    </div>
    );
};

export default AllSeller;