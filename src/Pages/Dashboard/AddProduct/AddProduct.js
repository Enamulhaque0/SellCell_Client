import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import { useQuery } from "@tanstack/react-query";
import { saveProduct } from "../../../Api/saveProduct";
import { AuthContext } from "../../../Contexts/AuthProvider";
import { useNavigate } from "react-router-dom";
const AddProduct = () => {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const { user } = useContext(AuthContext);

  const imageHostKey = process.env.REACT_APP_imgbb_key;

  const { data: Brands = [] } = useQuery({
    queryKey: ["brand"],
    queryFn: async () => {
      const res = await fetch("https://sell-cell-server.vercel.app/category");
      const data = await res.json();
      return data;
    },
  });

  const current = new Date();

  const time = current.toLocaleTimeString("en-US");

  const addProduct = (data) => {
    const image = data.image[0];
    const formData = new FormData();
    formData.append("image", image);
    const url = `https://api.imgbb.com/1/upload?key=${imageHostKey}`;
    fetch(url, {
      method: "POST",
      body: formData,
    })
      .then((res) => res.json())
      .then((imageData) => {
        if (imageData) {
          const product = {
            title: data.title,
            sellerName: `${user?.displayName}`,
            originalPrice: data.originalPrice,
            resalePrice: data.resalePrice,
            phoneNumber: data.phoneNumber,
            location: data.location,
            publishTime: time,
            yearOfUse: data.yearOfUse,
            YearOfPurchase: data.YearOfPurchase,
            description: data.description,
            conditionType: data.conditionType,
            categoryId: data.category,
            image: imageData.data.url,
            status: "available",
            email: `${user?.email}`,
          };

          saveProduct(product, navigate);
        }
      });
  };

  return (
    <div className="w-96 p-7">
      <h2 className="text-4xl">Add Product</h2>
      <form onSubmit={handleSubmit(addProduct)}>
        <div className="form-control w-full max-w-xs">
          <label className="label">
            {" "}
            <span className="label-text">Title</span>
          </label>
          <input
            type="text"
            {...register("title", {
              required: "Title is Required",
            })}
            className="input input-bordered w-full max-w-xs"
          />
          {errors.title && (
            <p className="text-red-500">{errors.title.message}</p>
          )}
        </div>
        <div className="form-control w-full max-w-xs">
          <label className="label">
            {" "}
            <span className="label-text">Seller Name</span>
          </label>
          <input
            type="text"
            value={user?.displayName}
            disabled
            className="input input-bordered w-full max-w-xs"
          />
          {errors.sellerName && (
            <p className="text-red-500">{errors.sellerName.message}</p>
          )}
        </div>
        <div className="form-control w-full max-w-xs">
          <label className="label">
            {" "}
            <span className="label-text">Original Price</span>
          </label>
          <input
            type="number"
            {...register("originalPrice", {
              required: true,
            })}
            className="input input-bordered w-full max-w-xs"
          />
          {errors.originalPrice && (
            <p className="text-red-500">{errors.originalPrice.message}</p>
          )}
        </div>
        <div className="form-control w-full max-w-xs">
          <label className="label">
            {" "}
            <span className="label-text">Resale Price</span>
          </label>
          <input
            type="number"
            {...register("resalePrice", {
              required: true,
            })}
            className="input input-bordered w-full max-w-xs"
          />
          {errors.resalePrice && (
            <p className="text-red-500">{errors.resalePrice.message}</p>
          )}
        </div>
        <div className="form-control w-full max-w-xs">
          <label className="label">
            {" "}
            <span className="label-text">Phone Number</span>
          </label>
          <input
            type="number"
            {...register("phoneNumber", {
              required: true,
            })}
            className="input input-bordered w-full max-w-xs"
          />
          {errors.phoneNumber && (
            <p className="text-red-500">{errors.phoneNumber.message}</p>
          )}
        </div>
        <div className="form-control w-full max-w-xs">
          <label className="label">
            {" "}
            <span className="label-text">Location</span>
          </label>
          <input
            type="text"
            {...register("location", {
              required: true,
            })}
            className="input input-bordered w-full max-w-xs"
          />
          {errors.location && (
            <p className="text-red-500">{errors.location.message}</p>
          )}
        </div>
        {/* <div className="form-control w-full max-w-xs">
          <label className="label">
            {" "}
            <span className="label-text">Publish Time</span>
          </label>
          <input
            type="time"
            {...register("publishTime", {
              required: true,
            })}
            className="input input-bordered w-full max-w-xs"
          />
          {errors.publishTime && (
            <p className="text-red-500">{errors.publishTime.message}</p>
          )}
        </div> */}
        <div className="form-control w-full max-w-xs">
          <label className="label">
            {" "}
            <span className="label-text">Year of use</span>
          </label>
          <input
            type="number"
            {...register("yearOfUse", {
              required: true,
            })}
            className="input input-bordered w-full max-w-xs"
          />
          {errors.yearOfUse && (
            <p className="text-red-500">{errors.yearOfUse.message}</p>
          )}
        </div>
        <div className="form-control w-full max-w-xs">
          <label className="label">
            {" "}
            <span className="label-text">Year of Purchase</span>
          </label>
          <input
            type="date"
            {...register("YearOfPurchase", {
              required: true,
            })}
            className="input input-bordered w-full max-w-xs"
          />
          {errors.YearOfPurchase && (
            <p className="text-red-500">{errors.YearOfPurchase.message}</p>
          )}
        </div>
        <div className="form-control w-full max-w-xs">
          <label className="label">
            {" "}
            <span className="label-text">Description</span>
          </label>
          <textarea
            className="textarea w-full max-w-xs textarea-bordered"
            {...register("description", {
              required: true,
            })}
            placeholder="Description"
          ></textarea>
          {errors.description && (
            <p className="text-red-500">{errors.description.message}</p>
          )}
        </div>

        <div className="form-control w-full max-w-xs">
          <label className="label">
            {" "}
            <span className="label-text">Condition Type</span>
          </label>
          <select
            className="w-full border py-2 max-w-xs mt-3 rounded-xl"
            {...register("conditionType", { required: true })}
          >
            <option value="Good">Good</option>
            <option value="Fair">Fair</option>
            <option value="excellent">excellent</option>
            {errors.conditionType && (
              <p className="text-red-500">{errors.conditionType.message}</p>
            )}
          </select>
        </div>
        <div className="form-control w-full max-w-xs">
          <label className="label">
            {" "}
            <span className="label-text">Category</span>
          </label>
          <select
            className="w-full border rounded-xl py-2 max-w-xs mt-3"
            {...register("category", { required: true })}
          >
            {Brands.map((brand) => (
              <option value={brand._id} key={brand._id}>
                {brand?.brand}
              </option>
            ))}

            {errors.category && (
              <p className="text-red-500">{errors.category.message}</p>
            )}
          </select>
        </div>
        <div className="form-control w-full max-w-xs">
          <label className="label">
            {" "}
            <span className="label-text">Photo</span>
          </label>
          <input
            type="file"
            {...register("image", {
              required: "Photo is Required",
            })}
            className="input input-bordered w-full max-w-xs"
          />
          {errors.img && <p className="text-red-500">{errors.img.message}</p>}
        </div>
        <button className="btn bg text-white w-full mt-4" type="submit">
          add Products
        </button>
      </form>
    </div>
  );
};

export default AddProduct;
