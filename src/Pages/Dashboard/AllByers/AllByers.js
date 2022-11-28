import { useQuery } from "@tanstack/react-query";
import React from "react";
import toast from "react-hot-toast";

const AllByers = () => {
  const { data: buyers = [],refetch } = useQuery({
    queryKey: ["buyer"],
    queryFn: async () => {
      const res = await fetch("https://sell-cell-server.vercel.app/buyers?buyer=buyer");
      const data = await res.json();
      return data;
    },
  });

  const handleDeleteBuyer = buyer => {
    fetch(`https://sell-cell-server.vercel.app/buyer/${buyer._id}`, {
        method: 'DELETE', 
       
    })
    .then(res => res.json())
    .then(data => {
        if(data.deletedCount > 0){
            refetch();
            toast.success(` ${buyer.name} deleted successfully`)
        }
    })
}

  return (
    <div>
      <h3 className="text-3xl mb-5">All Byers</h3>
      <div className="overflow-x-auto">
        <table className="table w-full">
          <thead>
            <tr>
              <th></th>
              <th>Name</th>
              <th>Email</th>
              <th>Action</th>
            </tr>
          </thead>

          <tbody>
            {buyers &&
              buyers?.map((buyer, i) => (
                <tr key={buyer._id}>
                  <th>{i + 1}</th>
                  <td>{buyer.name}</td>
                  <td>{buyer.email}</td>
                  <td>
                    <button onClick={()=>handleDeleteBuyer(buyer)} className="btn btn-xs">Delete</button>
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AllByers;
