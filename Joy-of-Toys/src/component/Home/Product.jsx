/* eslint-disable react/prop-types */
// eslint-disable-next-line no-unused-vars
import React, { useContext } from "react";
import Rating from "react-rating";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import {FaRegStar ,FaStar } from 'react-icons/fa';
import { Link } from "react-router-dom";
import { AuthContext } from "../provider/AuthProvider";
import {toast , Toaster } from "react-hot-toast";

const Product = (props) => {
  const { user} = useContext(AuthContext);
  const btn = () => {
    if(!user) {
      toast("Please Login first!")
      
    }
  }
 // console.log(props.result.data[0].image_url);
 const id_1 = (props.result.data[1]._id);
 const id_2 = (props.result.data[2]._id);
 const id_3 = (props.result.data[3]._id);
 const id_4 = (props.result.data[4]._id);
 const id_5 = (props.result.data[5]._id);
 const id_6 = (props.result.data[6]._id);
 const id_7 = (props.result.data[7]._id);
 const id_8 = (props.result.data[8]._id);
 const id_0 = (props.result.data[0]._id);
 
  return (
    <div className="py-2 text-center">
      <p className="text-3xl py-12 gFont2"> Product Categories </p>
      <Tabs>
        <TabList>
          <Tab>Teddy Bear</Tab>
          <Tab>Dinosaur Toy</Tab>
          <Tab>Horse Toy</Tab>
        </TabList>

        <TabPanel>
          <div className="lg:grid grid-cols-3 px-10">
            <div className="card card-compact w-96 bg-base-100 shadow-xl">
              <figure>
                <img
                  className="h-40 w-56 rounded-lg drop-shadow-lg"
                  src={props.result.data[0].image_url}
                  alt="Shoes"
                />
              </figure>
              <div className="card-body">
                <h2 className="card-title text-blue-800">
                  {props.result.data[0].name}
                </h2>
                <p className="text-start">
                  {" "}
                  <b>Price: </b> {props.result.data[0].price} BDT
                </p>
                <p className="text-start">
                  <b>Rating: </b> 
                
                <Rating
                  readonly
                  placeholderRating={props.result.data[0].rating}
                  emptySymbol={<FaRegStar> </FaRegStar>}
                  placeholderSymbol={
                    <FaStar className="text-orange-500"> </FaStar>
                  }
                  fullSymbol={<FaStar> </FaStar>}
                /> </p>
                <div className="card-actions justify-center">
                  
                  <Link to={`details/${id_0}`}> <button onClick={btn} className="btn btn-primary px-32 ">
                    View Details
                  </button> </Link> 
                </div>
              </div>
            </div>

            <div className="card card-compact w-96 bg-base-100 shadow-xl">
              <figure>
                <img
                  className="h-40 w-56 rounded-lg drop-shadow-lg"
                  src={props.result.data[1].image_url}
                  alt="Shoes"
                />
              </figure>
              <div className="card-body">
                <h2 className="card-title  text-blue-800">
                  {props.result.data[1].name}
                </h2>
                <p className="text-start">
                  <b>Price: </b> {props.result.data[1].price} BDT
                </p>
                <p className="text-start">
                  <b>Rating: </b> 
                
                <Rating
                  readonly
                  placeholderRating={props.result.data[1].rating}
                  emptySymbol={<FaRegStar> </FaRegStar>}
                  placeholderSymbol={
                    <FaStar className="text-orange-500"> </FaStar>
                  }
                  fullSymbol={<FaStar> </FaStar>}
                /> </p>
                <div className="card-actions justify-end">
                <Link to={`details/${id_1}`}> <button onClick={btn} className="btn btn-primary px-32 ">
                    View Details
                  </button> </Link>
                </div>
              </div>
            </div>

            <div className="card card-compact w-96 bg-base-100 shadow-xl">
              <figure>
                <img
                  className="h-40 w-56 rounded-lg drop-shadow-lg"
                  src={props.result.data[2].image_url}
                  alt="Shoes"
                />
              </figure>
              <div className="card-body">
                <h2 className="card-title  text-blue-800">
                  {props.result.data[2].name}
                </h2>
                <p className="text-start">
                  <b>Price: </b> {props.result.data[2].price} BDT
                </p>
                <p className="text-start">
                  <b>Rating: </b> 
                
                <Rating
                  readonly
                  placeholderRating={props.result.data[2].rating}
                  emptySymbol={<FaRegStar> </FaRegStar>}
                  placeholderSymbol={
                    <FaStar className="text-orange-500"> </FaStar>
                  }
                  fullSymbol={<FaStar> </FaStar>}
                /> </p>
                <div className="card-actions justify-end">
                <Link to={`details/${id_2}`}> <button onClick={btn} className="btn btn-primary px-32 ">
                    View Details
                  </button> </Link>
                </div>
              </div>
            </div>
          </div>
        </TabPanel>
        <TabPanel>
          <div className="lg:grid grid-cols-3 px-10">
            <div className="card card-compact w-96 bg-base-100 shadow-xl">
              <figure>
                <img
                  className="h-40 w-56 rounded-lg drop-shadow-lg"
                  src={props.result.data[3].image_url}
                  alt="Shoes"
                />
              </figure>
              <div className="card-body">
                <h2 className="card-title  text-blue-800">
                  {props.result.data[3].name}
                </h2>
                <p className="text-start">
                  <b>Price: </b> {props.result.data[3].price} BDT
                </p>
                <p className="text-start">
                  <b>Rating: </b> 
                
                <Rating
                  readonly
                  placeholderRating={props.result.data[3].rating}
                  emptySymbol={<FaRegStar> </FaRegStar>}
                  placeholderSymbol={
                    <FaStar className="text-orange-500"> </FaStar>
                  }
                  fullSymbol={<FaStar> </FaStar>}
                /> </p>
                <div className="card-actions justify-end">
                <Link to={`details/${id_3}`}> <button onClick={btn} className="btn btn-primary px-32 ">
                    View Details
                  </button> </Link>
                </div>
              </div>
            </div>

            <div className="card card-compact w-96 bg-base-100 shadow-xl">
              <figure>
                <img
                  className="h-40 w-56 rounded-lg drop-shadow-lg"
                  src={props.result.data[4].image_url}
                  alt="Shoes"
                />
              </figure>
              <div className="card-body">
                <h2 className="card-title  text-blue-800">
                  {props.result.data[4].name}
                </h2>
                <p className="text-start">
                  <b>Price: </b> {props.result.data[4].price} BDT
                </p>
                <p className="text-start">
                  <b>Rating: </b> 
                
                <Rating
                  readonly
                  placeholderRating={props.result.data[4].rating}
                  emptySymbol={<FaRegStar> </FaRegStar>}
                  placeholderSymbol={
                    <FaStar className="text-orange-500"> </FaStar>
                  }
                  fullSymbol={<FaStar> </FaStar>}
                /> </p>
                <div className="card-actions justify-end">
                <Link to={`details/${id_4}`}> <button onClick={btn} className="btn btn-primary px-32 ">
                    View Details
                  </button> </Link>
                </div>
              </div>
            </div>

            <div className="card card-compact w-96 bg-base-100 shadow-xl">
              <figure>
                <img
                  className="h-40 w-56 rounded-lg drop-shadow-lg"
                  src={props.result.data[5].image_url}
                  alt="Shoes"
                />
              </figure>
              <div className="card-body">
                <h2 className="card-title  text-blue-800">
                  {props.result.data[5].name}
                </h2>
                <p className="text-start">
                  <b>Price: </b> {props.result.data[5].price} BDT
                </p>
                <p className="text-start">
                  <b>Rating: </b> 
                
                <Rating
                  readonly
                  placeholderRating={props.result.data[5].rating}
                  emptySymbol={<FaRegStar> </FaRegStar>}
                  placeholderSymbol={
                    <FaStar className="text-orange-500"> </FaStar>
                  }
                  fullSymbol={<FaStar> </FaStar>}
                /> </p>
                <div className="card-actions justify-end">
                <Link to={`details/${id_5}`}> <button onClick={btn} className="btn btn-primary px-32 ">
                    View Details
                  </button> </Link>
                </div>
              </div>
            </div>
          </div>
        </TabPanel>
        <TabPanel>
          <div className="lg:grid grid-cols-3 px-10">
            <div className="card card-compact w-96 bg-base-100 shadow-xl">
              <figure>
                <img
                  className="h-40 w-56 rounded-lg drop-shadow-lg"
                  src={props.result.data[6].image_url}
                  alt="Shoes"
                />
              </figure>
              <div className="card-body">
                <h2 className="card-title  text-blue-800">
                  {props.result.data[6].name}
                </h2>
                <p className="text-start">
                  <b>Price: </b> {props.result.data[6].price} BDT
                </p>
                <p className="text-start">
                  <b>Rating: </b> 
                
                <Rating
                  readonly
                  placeholderRating={props.result.data[6].rating}
                  emptySymbol={<FaRegStar> </FaRegStar>}
                  placeholderSymbol={
                    <FaStar className="text-orange-500"> </FaStar>
                  }
                  fullSymbol={<FaStar> </FaStar>}
                /> </p>
                <div className="card-actions justify-end">
                <Link to={`details/${id_6}`}> <button onClick={btn} className="btn btn-primary px-32 ">
                    View Details
                  </button> </Link>
                </div>
              </div>
            </div>

            <div className="card card-compact w-96 bg-base-100 shadow-xl">
              <figure>
                <img
                  className="h-40 w-56 rounded-lg drop-shadow-lg"
                  src={props.result.data[7].image_url}
                  alt="Shoes"
                />
              </figure>
              <div className="card-body">
                <h2 className="card-title  text-blue-800">
                  {props.result.data[7].name}
                </h2>
                <p className="text-start">
                  <b>Price: </b> {props.result.data[7].price} BDT
                </p>
                <p className="text-start">
                  <b>Rating: </b> 
                
                <Rating
                  readonly
                  placeholderRating={props.result.data[7].rating}
                  emptySymbol={<FaRegStar> </FaRegStar>}
                  placeholderSymbol={
                    <FaStar className="text-orange-500"> </FaStar>
                  }
                  fullSymbol={<FaStar> </FaStar>}
                /> </p>
                <div className="card-actions justify-end">
                <Link to={`details/${id_7}`}> <button onClick={btn} className="btn btn-primary px-32 ">
                    View Details
                  </button> </Link>
                </div>
              </div>
            </div>

            <div className="card card-compact w-96 bg-base-100 shadow-xl">
              <figure>
                <img
                  className="h-40 w-56 rounded-lg drop-shadow-lg"
                  src={props.result.data[8].image_url}
                  alt="Shoes"
                />
              </figure>
              <div className="card-body">
                <h2 className="card-title  text-blue-800">
                  {props.result.data[8].name}
                </h2>
                <p className="text-start">
                  <b>Price: </b> {props.result.data[8].price} BDT
                </p>
                <p className="text-start">
                  <b>Rating: </b> 
                
                <Rating
                  readonly
                  placeholderRating={props.result.data[8].rating}
                  emptySymbol={<FaRegStar> </FaRegStar>}
                  placeholderSymbol={
                    <FaStar className="text-orange-500"> </FaStar>
                  }
                  fullSymbol={<FaStar> </FaStar>}
                /> </p>
                <div className="card-actions justify-end">
                <Link to={`details/${id_8}`}> <button onClick={btn} className="btn btn-primary px-32 ">
                    View Details
                  </button> </Link>
                </div>
              </div>
            </div>
          </div>
        </TabPanel>
      </Tabs>
      <Toaster />
    </div>
  );
};

export default Product;
