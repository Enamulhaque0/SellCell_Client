import axios from "axios";
import React, { useEffect, useState } from "react";
import Advertise from "../Advertise/Advertise";
import Banner from "../Banner/Banner";
import Brand from "../Brand/Brand";
import Categories from "../Categories/Categories";
import IphoneBanner from "../IphoneBanner/IphoneBanner";

const Home = () => {
  const [advertise, setAdvertise] = useState([]);

  useEffect(() => {
    axios.get("https://sell-cell-server.vercel.app/advertise").then((response) => {
      const data = response.data;

      setAdvertise(data);
    });
  }, []);
  return (
    <div className="">
      <Banner></Banner>
      <IphoneBanner></IphoneBanner>
      <Categories></Categories>

      <>{advertise && <Advertise advertise={advertise}></Advertise>}</>
      <Brand></Brand>
    </div>
  );
};

export default Home;
