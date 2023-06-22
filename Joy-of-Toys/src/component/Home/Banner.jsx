// eslint-disable-next-line no-unused-vars
import React from "react";

const Banner = () => {
  return (
    <div className="">
      <div className="carousel w-full">
        <div id="item1" className="carousel-item w-full">
          <img
            src="https://images.pexels.com/photos/1705287/pexels-photo-1705287.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            className="bannerImg w-full"
          />
        </div>
        <div id="item2" className="carousel-item w-full">
          <img
            src="https://images.pexels.com/photos/870866/pexels-photo-870866.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            className="w-full bannerImg"
          />
        </div>
        <div id="item3" className="carousel-item w-full">
          <img
            src="https://images.pexels.com/photos/4886919/pexels-photo-4886919.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            className="w-full bannerImg"
          />
        </div>
        <div id="item4" className="carousel-item w-full">
          <img
            src="https://images.pexels.com/photos/207891/pexels-photo-207891.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            className="w-full bannerImg"
          />
        </div>
      </div>
      <div className="flex justify-center w-full py-2 gap-2">
        <a href="#item1" className="btn btn-xs">
          1
        </a>
        <a href="#item2" className="btn btn-xs">
          2
        </a>
        <a href="#item3" className="btn btn-xs">
          3
        </a>
        <a href="#item4" className="btn btn-xs">
          4
        </a>
      </div>
    </div>
  );
};

export default Banner;
