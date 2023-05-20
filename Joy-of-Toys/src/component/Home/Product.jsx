/* eslint-disable react/prop-types */
// eslint-disable-next-line no-unused-vars
import React from "react";
import Rating from "react-rating";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import {FaRegStar ,FaStar } from 'react-icons/fa';

const Product = (props) => {
 // console.log(props.result.data[0].image_url);
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
                  <b>Price: </b> {props.result.data[0].price} TK
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
                  <button className="btn btn-primary px-32 ">
                    View Details
                  </button>
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
                  <b>Price: </b> {props.result.data[1].price} TK
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
                  <button className="btn btn-primary px-32 ">
                    View Details
                  </button>
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
                  <b>Price: </b> {props.result.data[2].price} TK
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
                  <button className="btn btn-primary px-32 ">
                    View Details
                  </button>
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
                  <b>Price: </b> {props.result.data[3].price} TK
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
                  <button className="btn btn-primary px-32 ">
                    View Details
                  </button>
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
                  <b>Price: </b> {props.result.data[4].price} TK
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
                  <button className="btn btn-primary px-32 ">
                    View Details
                  </button>
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
                  <b>Price: </b> {props.result.data[5].price} TK
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
                  <button className="btn btn-primary px-32 ">
                    View Details
                  </button>
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
                  <b>Price: </b> {props.result.data[6].price} TK
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
                  <button className="btn btn-primary px-32 ">
                    View Details
                  </button>
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
                  <b>Price: </b> {props.result.data[7].price} TK
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
                  <button className="btn btn-primary px-32 ">
                    View Details
                  </button>
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
                  <b>Price: </b> {props.result.data[8].price} TK
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
                  <button className="btn btn-primary px-32 ">
                    View Details
                  </button>
                </div>
              </div>
            </div>
          </div>
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default Product;
