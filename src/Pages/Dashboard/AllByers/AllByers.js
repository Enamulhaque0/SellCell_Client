import { useQuery } from "@tanstack/react-query";
import React from "react";

const AllByers = () => {
  const { data: buyers = [] } = useQuery({
    queryKey: ["buyer"],
    queryFn: async () => {
      const res = await fetch("http://localhost:5000/buyers?buyer=buyer");
      const data = await res.json();
      return data;
    },
  });

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
                    <button className="btn btn-xs">Delete</button>
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
