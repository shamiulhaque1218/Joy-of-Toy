// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from "react";
import Banner from "./Banner";
import Product from "./Product";
import Galary from "./Galary";
import { useLoaderData } from "react-router-dom";
import ProductDes from "./ProductDes";

const Home = () => {
  const newdata = useLoaderData(); 
  console.log(newdata);
  
  
  const [toyData, setToyData] = useState([]);
 
  useEffect(() => {
    fetch("https://joy-of-toys-server.vercel.app/toys")
      .then((res) => res.json())
      .then((data) => setToyData(data));
  }, []);
  return (
    <div>
      <Banner> </Banner>

      <div className="pt-5 pb-10">
      {
        toyData.map(result => 
          <Product key={result._id} result={result} 
           ></Product> )
      }
      </div>

      <ProductDes> </ProductDes>
      
      <div>
      {
        toyData.map(result => 
           <Galary key={result._id} result={result}
           ></Galary> )
      }
      </div>
      
    </div>
  );
};

export default Home;
