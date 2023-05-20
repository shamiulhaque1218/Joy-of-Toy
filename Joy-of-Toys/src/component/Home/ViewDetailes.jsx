/* eslint-disable no-unused-vars */
import React from "react";
import { FaRegStar, FaStar } from "react-icons/fa";
import Rating from "react-rating";
import { useLoaderData } from "react-router-dom";

const ViewDetailes = () => {
  const myToy = useLoaderData();
  const { name, image_url, price, rating } = myToy;
  return (
    <div>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row">
          <img
            src={image_url}
            className="max-w-sm rounded-lg shadow-2xl"
          />
          <div>
            <h1 className="text-4xl font-bold text-blue-600 gFont2">Best Animal Toy are here ! </h1>
            <p className="py-6 text-cyan-800 gFont2">
            We believe the best playthings are often simple concepts that inspire children to come up with their own twists. With everything we create, we hope to encourage Free Play, Creativity, Imagination, Learning & Discovery.
            </p>
            <p className="text-xl p-2 font-semibold">Toy Name: {name}</p>
            <p className="text-xl p-2 font-semibold"> Price: {price} BDT</p>
            <p className="text-start p-2">
                  <b>Rating: </b> 
                
                <Rating
                  readonly
                  placeholderRating={rating}
                  emptySymbol={<FaRegStar> </FaRegStar>}
                  placeholderSymbol={
                    <FaStar className="text-orange-500"> </FaStar>
                  }
                  fullSymbol={<FaStar> </FaStar>}
                /> </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ViewDetailes;
