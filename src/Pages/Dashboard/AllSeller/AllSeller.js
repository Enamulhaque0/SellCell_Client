import { useQuery } from '@tanstack/react-query';
import React from 'react';
import Loader from '../../../Loader/Loader';

const AllSeller = () => {

    const { data: sellers = [],isLoading } = useQuery({
        queryKey: ["seller"],
        queryFn: async () => {
          const res = await fetch("http://localhost:5000/sellers?seller=seller");
          const data = await res.json();
          return data;
        },
      });

      if(isLoading){
        
        return <Loader></Loader>
    }
    return (
        <div>
        <h3 className="text-3xl mb-5">All Seller</h3>
        <div className="overflow-x-auto">
            <table className="table w-full">
                <thead>
                    <tr>
                        <th></th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Verify</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>

                    {
                        sellers && sellers.map((seller,i)=>  
                            
                            <tr key={seller._id} >
                            <th>{i+1}</th>
                            <td>{seller.name}</td>
                            <td>{seller.email}</td>
                            <td><button className="btn btn-xs">Verify</button></td>
                            <td><button className="btn btn-xs">Delete</button></td>
                        </tr>)
                    }
                    
                        
                      
                    
                </tbody>
            </table>
        </div>
    </div>
    );
};

export default AllSeller;