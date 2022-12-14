import { useQuery } from "@tanstack/react-query";
import React, { useContext } from "react";
import { AuthContext } from "../../../Contexts/AuthProvider";
import MyOrderRow from "./MyOrderRow";

const MyOrders = () => {
  const { user } = useContext(AuthContext);
  const { data: orders = [] } = useQuery({
    queryKey: ["email"],
    queryFn: async () => {
      const res = await fetch(
        `https://sell-cell-server.vercel.app/orders?email=${user?.email}`
      );
      const data = await res.json();
      return data;
    },
  });

  return (
    <>
      <div>
        <h2 className="text-5xl my-8">You have Orders</h2>
        <div className="overflow-x-auto w-full">
          <table className="table w-full">
            <thead>
              <tr>
              <th>Number</th>
                <th>Image</th>
                <th>title</th>
                <th>Price</th>
                <th>Payment</th>
              </tr>
            </thead>
            <tbody>
              {orders &&
                orders?.map((order,i) => (
                  <MyOrderRow order={order} i={i} key={order._id}></MyOrderRow>
                ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default MyOrders;
