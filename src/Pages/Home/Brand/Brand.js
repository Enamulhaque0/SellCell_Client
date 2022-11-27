import React from "react";
import Logo from "../../../assets/Logo/Logo.webp";

const Brand = () => {
  return (
    <section className="bg-green-100 py-20 lg:py-[120px] mt-12">
      <img className="w-64 mx-auto" src={Logo} alt="" srcSet="" />
      <h1 className="text-3xl my-8 text-center font-bold italic">
        compares prices from{" "}
        <span className="text-orange-600">40+ leading BuyBack</span> <br />{" "}
        <span className="text-orange-600">Companies</span> to get you the best
        deal!
      </h1>
      <div className="container mx-auto">
        <div className="-mx-4 flex flex-wrap">
          <div className="w-full px-4">
            <div className="flex flex-wrap items-center justify-center">
              <a
                href="#"
                className="mx-4 flex w-[150px] items-center justify-center py-5 2xl:w-[180px]"
              >
                <img
                  src="https://cdn.tailgrids.com/1.0/assets/images/brands/graygrids.svg"
                  alt="image"
                  className="h-10 w-full"
                />
              </a>
              <a
                href="#"
                className="mx-4 flex w-[150px] items-center justify-center py-5 2xl:w-[180px]"
              >
                <img
                  src="https://cdn.tailgrids.com/1.0/assets/images/brands/lineicons.svg"
                  alt="image"
                  className="h-10 w-full"
                />
              </a>
              <a
                href="#"
                className="mx-4 flex w-[150px] items-center justify-center py-5 2xl:w-[180px]"
              >
                <img
                  src="https://cdn.tailgrids.com/1.0/assets/images/brands/uideck.svg"
                  alt="image"
                  className="h-10 w-full"
                />
              </a>
              <a
                href="#"
                className="mx-4 flex w-[150px] items-center justify-center py-5 2xl:w-[180px]"
              >
                <img
                  src="https://cdn.tailgrids.com/1.0/assets/images/brands/ayroui.svg"
                  alt="image"
                  className="h-10 w-full"
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Brand;
