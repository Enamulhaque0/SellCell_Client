import { RouterProvider } from "react-router-dom";
import "./App.css";
import router from "./Routes/Routes/Routes";
import toast, { Toaster } from "react-hot-toast";
import { useEffect, useState } from "react";
import Loader from "./Loader/Loader";

function App() {
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 1500);
  }, []);
  return (
    <div className="max-w-[1440px] mx-auto">
      {loading ? (
        <Loader></Loader>
      ) : (
        <>
          <Toaster position="top-center" reverseOrder={false} />

          <RouterProvider router={router}></RouterProvider>
        </>
      )}
    </div>
  );
}

export default App;
