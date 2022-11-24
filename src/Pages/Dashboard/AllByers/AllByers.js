import React from 'react';

const AllByers = () => {
    return (
        <div>
        <h3 className="text-3xl mb-5">All Byers</h3>
        <div className="overflow-x-auto">
            <table className="table w-full">
                <thead>
                    <tr>
                        <th>1</th>
                        <th>Name</th>
                        <th>Role</th>
                        <th>Email</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    
                        
                        <tr >
                            <th>1</th>
                            <td>Name</td>
                            <td>Byers</td>
                            <td>Enamulhaq243@gmail.com</td>
                            <td><button className="btn btn-xs">Delete</button></td>
                        </tr>
                    
                </tbody>
            </table>
        </div>
    </div>
    );
};

export default AllByers;