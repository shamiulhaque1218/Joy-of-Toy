// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from "react";
import Banner from "./Banner";
import Product from "./Product";
import Galary from "./Galary";

const Home = () => {
  const [toyData, setToyData] = useState([]);

  useEffect(() => {
    fetch("http://localhost:4000/toys")
      .then((res) => res.json())
      .then((data) => setToyData(data));
  }, []);
  return (
    <div>
      <Banner> </Banner>

      <div className="pt-5 pb-10">
      {
        toyData.map(result => 
          <Product key={result.id} result={result}
           ></Product> )
      }
      </div>


      <div>
      {
        toyData.map(result => 
           <Galary key={result.id} result={result}
           ></Galary> )
      }
      </div>
    </div>
  );
};

export default Home;
