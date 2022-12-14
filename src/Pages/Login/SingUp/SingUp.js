import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { GoogleAuthProvider } from "firebase/auth";
import { AuthContext } from "../../../Contexts/AuthProvider";
import toast from "react-hot-toast";
import { saveUser } from "../../../Api/saveUser";

const SingUp = () => {
  const googleProvider = new GoogleAuthProvider();
  const { LoginWithGoogle, createUser, updateUser } = useContext(AuthContext);
  const [toggle, setToggle] = useState(false);

  const navigate = useNavigate();

  // Google Login
  const handleGoogle = () => {
    LoginWithGoogle(googleProvider)
      .then((result) => {
        const user = result.user;

        const userBody = {
          name: user?.displayName,
          email: user?.email,
          role: "buyer",
        };
        saveUser(userBody);
        toast.success("SingUp Successfully .....!");
        navigate("/");
      })
      .catch((error) => toast.error(error.message));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;

    const email = form.email.value;
    const password = form.password.value;
    const userBody = {
      name: name,
      email: email,
      role: `${toggle ? "seller" : "buyer"}`,
      verified: false
    };

    // create user
    createUser(email, password)
      .then((result) => {
        const user = result.user;
        saveUser(userBody);

        const userInfo = {
          displayName: name,
        };
        updateUser(userInfo)
          .then(() => {
            toast.success("SingUp Successfully .....!");
            navigate("/");
          })
          .catch((err) => toast.error(err));
      })

      .catch((e) => toast.error(e.message));
  };

  return (
    <section className="my-32">
      <div className="w-full max-w-sm p-6 m-auto mx-auto bg-white rounded-md shadow-md dark:bg-gray-800">
        <h1 className="text-3xl font-semibold text-center text-gray-700 dark:text-white">
          Sing Up
        </h1>

        <form onSubmit={handleSubmit} className="mt-6">
          <div>
            <label className="block text-sm text-gray-800 dark:text-gray-200">
              Full Name
            </label>
            <input
              name="name"
              type="text"
              className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
            />
          </div>
          <div>
            <label className="block text-sm text-gray-800 dark:text-gray-200">
              Email
            </label>
            <input
              name="email"
              type="email"
              className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
            />
          </div>

          <div className="mt-4">
            <div className="flex items-center justify-between">
              <label className="block text-sm text-gray-800 dark:text-gray-200">
                Password
              </label>
            </div>

            <input
              name="password"
              type="password"
              className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
            />
          </div>
          <div className="form-control">
            <label className="cursor-pointer label">
              <span className="label-text">Are You Seller</span>
              <input
                onClick={() => setToggle(!toggle)}
                type="checkbox"
                className="checkbox checkbox-accent"
              />
            </label>
          </div>

          <div className="mt-6">
            <button className="w-full px-4 py-2 tracking-wide text-white transition-colors duration-300 transform bg-gray-700 rounded-md hover:bg-gray-600 focus:outline-none focus:bg-gray-600">
              SingUp
            </button>
          </div>
        </form>

        <div className="flex items-center justify-between mt-4">
          <span className="w-1/5 border-b dark:border-gray-600 lg:w-1/5"></span>

          <button
            
            className="text-xs text-center text-gray-500 uppercase dark:text-gray-400 hover:underline"
          >
            or login with Social Media
          </button>

          <span className="w-1/5 border-b dark:border-gray-400 lg:w-1/5"></span>
        </div>

        <div className="flex items-center mt-6 -mx-2">
          <button
            onClick={handleGoogle}
            type="button"
            className="flex items-center justify-center w-full px-6 py-2 mx-2 text-sm font-medium text-white transition-colors duration-300 transform bg-blue-500 rounded-md hover:bg-blue-400 focus:bg-blue-400 focus:outline-none"
          >
            <svg className="w-4 h-4 mx-2 fill-current" viewBox="0 0 24 24">
              <path d="M12.24 10.285V14.4h6.806c-.275 1.765-2.056 5.174-6.806 5.174-4.095 0-7.439-3.389-7.439-7.574s3.345-7.574 7.439-7.574c2.33 0 3.891.989 4.785 1.849l3.254-3.138C18.189 1.186 15.479 0 12.24 0c-6.635 0-12 5.365-12 12s5.365 12 12 12c6.926 0 11.52-4.869 11.52-11.726 0-.788-.085-1.39-.189-1.989H12.24z"></path>
            </svg>

            <span className="hidden mx-2 sm:inline">Sign in with Google</span>
          </button>
        </div>

        <p className="mt-8 text-xs font-light text-center">
          {" "}
          already have an account?{" "}
          <Link
            to="/login"
            className="font-medium text-blue-700 dark:text-gray-200 hover:underline"
          >
            Please Login
          </Link>
        </p>
      </div>
    </section>
  );
};

export default SingUp;
