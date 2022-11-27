import { useQuery } from "@tanstack/react-query";
import React, { useContext } from "react";
import toast from "react-hot-toast";
import { AuthContext } from "../../../Contexts/AuthProvider";

const MyProducts = () => {
  const { user } = useContext(AuthContext);
  const { data: products = [],refetch } = useQuery({
    queryKey: [user?.email],
    queryFn: async () => {
      const res = await fetch(
        `http://localhost:5000/products?email=${user?.email}`
      );
      const data = await res.json();
      return data;
    },
  });

  const handleDeleteProduct = product => {
    fetch(`http://localhost:5000/product/${product._id}`, {
        method: 'DELETE', 
       
    })
    .then(res => res.json())
    .then(data => {
        if(data.deletedCount > 0){
            refetch();
            toast.success(` ${product.title} deleted successfully`)
        }
    })
}

  return (
    <div>
      <h3 className="text-3xl mb-5">My Products</h3>
      <div className="overflow-x-auto">
        <table className="table w-full">
          <thead>
            <tr>
              <th></th>
              <th>Product</th>
              <th>Price</th>
              <th>Status</th>
              <th>Delete</th>
              <th>advertise</th>
            </tr>
          </thead>
          <tbody>
            {products &&
              products?.map((product, i) => (
                <tr key={product._id}>
                  <th>{i + 1}</th>
                  <td>{product.title}</td>
                  <td>$ {product.resalePrice}</td>
                  <td>{product.status}</td>
                  <td>
                    <button onClick={()=>handleDeleteProduct(product)} className="btn btn-xs">Delete</button>
                  </td>
                  <td>
                    <button className="btn btn-xs">advertise</button>
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyProducts;
