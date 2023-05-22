/* eslint-disable no-unused-vars */
import React from "react";
import { useLoaderData } from "react-router-dom";

const AllToyView = () => {
  const view = useLoaderData();
  const {
    name,pictureURL,sellerName, sellerEmail, subCategory,price,rating, quantity, description, } = view

  return (
    <div className="flex justify-center pb-20 pt-10">
        <div className="card w-3/6 shadow-xl bg-slate-200">
  <figure className="pt-4"><img src={pictureURL} className="shadow-lg h-52 rounded-lg " alt="Shoes" /></figure>
  <div className="card-body">
    <h2 className="card-title">{name} </h2>
    <p>{sellerName} </p>
    <p>Seller Name: {sellerEmail} </p>
    <p>Sub Category: {subCategory} </p>
    <p>Price: {price} </p>
    <p>Quantity: {quantity}</p>
    <p>Rating: {rating} </p>
    <p>Description: {description} </p>
  </div>
    </div>
    </div>
  );
};

export default AllToyView;
