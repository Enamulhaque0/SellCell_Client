import { useQuery } from "@tanstack/react-query";
import React from "react";
import toast from "react-hot-toast";
import { sellerVerify } from "../../../Api/sellerVerify";

const AllSeller = () => {
  const { data: sellers = [] ,refetch} = useQuery({
    queryKey: ["seller"],
    queryFn: async () => {
      const res = await fetch("https://sell-cell-server.vercel.app/sellers?seller=seller");
      const data = await res.json();
      return data;
    },
  });

  const handleDeleteSeller = seller => {
    fetch(`https://sell-cell-server.vercel.app/seller/${seller._id}`, {
        method: 'DELETE', 
       
    })
    .then(res => res.json())
    .then(data => {
        if(data.deletedCount > 0){
            refetch();
            toast.success('deleted successfully')
        }
    })
}

const handleVerify = id =>{
  sellerVerify(id,refetch)

 


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
            {sellers &&
              sellers.map((seller, i) => (
                <tr key={seller._id}>
                  <th>{i + 1}</th>
                  <td>{seller.name}</td>
                  <td>{seller.email}</td>
                  <td>
                   {
                    !seller.verified &&  <button onClick={()=>handleVerify(seller._id)} className="btn btn-xs">Verify</button>
                   }
                  </td>
                  <td>
                    <button onClick={()=>handleDeleteSeller(seller)} className="btn btn-xs">Delete</button>
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AllSeller;
