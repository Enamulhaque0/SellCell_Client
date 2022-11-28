import toast from "react-hot-toast";

export const addAdvertise = (product) => {
  fetch("http://localhost:5000/advertise", {
    method: "POST",
    headers: {
      "content-type": "application/json",
    },
    body: JSON.stringify(product),
  })
    .then((res) => res.json())
    .then((data) => {
      if (data.acknowledged) {
       return toast.success(`${product.title} added successfully on advertisement section...!`);
      }
      if(!data.error){
       return toast.error(data.message);
      }
    });
};
