import React from 'react';
import { Link } from 'react-router-dom';
import error from "../../assets/image/error-404.webp"

const NotFound = () => {
    return (
        <div>
             <section className="flex items-center h-screen p-16  text-gray-900">
        <div className="container flex flex-col items-center justify-center px-5 mx-auto my-8">

        <img className='w-96' src={error} alt="" srcset="" />
          
          <div className="max-w-md text-center">


            


           
            <p className="text-2xl font-semibold md:text-3xl mb-8 mt-8">
              Sorry, we couldn't find this page.
            </p>
            <Link
              to="/"
              className="px-8 py-3 font-semibold rounded bg-cyan-200 text-gray-900"
            >
              Back to homepage
            </Link>
          </div>
        </div>
      </section>
        </div>
    );
};

export default NotFound;