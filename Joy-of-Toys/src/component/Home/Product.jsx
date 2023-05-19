/* eslint-disable react/prop-types */
// eslint-disable-next-line no-unused-vars
import React from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";

const Product = (props) => {
  console.log(props.result[0].image_url);
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
          <div className="grid grid-cols-3 px-10">

          <div className="card card-compact w-96 bg-base-100 shadow-xl">
            <figure>
              <img className="h-40 w-56 rounded-lg"
                src={props.result[0].image_url}
                alt="Shoes"
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title">{props.result[0].name}</h2>
              <p className="text-start">Price: {props.result[0].price} TK</p>
              <p className="text-start">Rating: {props.result[0].rating}</p>
              <div className="card-actions justify-end">
                <button className="btn btn-primary">Buy Now</button>
              </div>
            </div>
          </div>
          
          <div className="card card-compact w-96 bg-base-100 shadow-xl">
            <figure>
              <img className="h-40 w-56 rounded-lg"
                src={props.result[1].image_url}
                alt="Shoes"
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title">{props.result[1].name}</h2>
              <p className="text-start">Price: {props.result[1].price} TK</p>
              <p className="text-start">Rating: {props.result[1].rating}</p>
              <div className="card-actions justify-end">
                <button className="btn btn-primary">Buy Now</button>
              </div>
            </div>
          </div>

          <div className="card card-compact w-96 bg-base-100 shadow-xl">
            <figure>
              <img className="h-40 w-56 rounded-lg"
                src={props.result[2].image_url}
                alt="Shoes"
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title">{props.result[2].name}</h2>
              <p className="text-start">Price: {props.result[2].price} TK</p>
              <p className="text-start">Rating: {props.result[2].rating}</p>
              <div className="card-actions justify-end">
                <button className="btn btn-primary">Buy Now</button>
              </div>
            </div>
          </div>

          </div>
        </TabPanel>
        <TabPanel>
          
        <div className="grid grid-cols-3 px-10">

<div className="card card-compact w-96 bg-base-100 shadow-xl">
  <figure>
    <img className="h-40 w-56 rounded-lg"
      src={props.result[3].image_url}
      alt="Shoes"
    />
  </figure>
  <div className="card-body">
    <h2 className="card-title">{props.result[3].name}</h2>
    <p className="text-start">Price: {props.result[3].price} TK</p>
    <p className="text-start">Rating: {props.result[3].rating}</p>
    <div className="card-actions justify-end">
      <button className="btn btn-primary">Buy Now</button>
    </div>
  </div>
</div>

<div className="card card-compact w-96 bg-base-100 shadow-xl">
  <figure>
    <img className="h-40 w-56 rounded-lg"
      src={props.result[4].image_url}
      alt="Shoes"
    />
  </figure>
  <div className="card-body">
    <h2 className="card-title">{props.result[4].name}</h2>
    <p className="text-start">Price: {props.result[4].price} TK</p>
    <p className="text-start">Rating: {props.result[4].rating}</p>
    <div className="card-actions justify-end">
      <button className="btn btn-primary">Buy Now</button>
    </div>
  </div>
</div>

<div className="card card-compact w-96 bg-base-100 shadow-xl">
  <figure>
    <img className="h-40 w-56 rounded-lg"
      src={props.result[5].image_url}
      alt="Shoes"
    />
  </figure>
  <div className="card-body">
    <h2 className="card-title">{props.result[5].name}</h2>
    <p className="text-start">Price: {props.result[5].price} TK</p>
    <p className="text-start">Rating: {props.result[5].rating}</p>
    <div className="card-actions justify-end">
      <button className="btn btn-primary">Buy Now</button>
    </div>
  </div>
</div>

</div>
          
        </TabPanel>
        <TabPanel>
         
        <div className="grid grid-cols-3 px-10">

<div className="card card-compact w-96 bg-base-100 shadow-xl">
  <figure>
    <img className="h-40 w-56 rounded-lg"
      src={props.result[6].image_url}
      alt="Shoes"
    />
  </figure>
  <div className="card-body">
    <h2 className="card-title">{props.result[6].name}</h2>
    <p className="text-start">Price: {props.result[6].price} TK</p>
    <p className="text-start">Rating: {props.result[6].rating}</p>
    <div className="card-actions justify-end">
      <button className="btn btn-primary">Buy Now</button>
    </div>
  </div>
</div>

<div className="card card-compact w-96 bg-base-100 shadow-xl">
  <figure>
    <img className="h-40 w-56 rounded-lg"
      src={props.result[7].image_url}
      alt="Shoes"
    />
  </figure>
  <div className="card-body">
    <h2 className="card-title">{props.result[7].name}</h2>
    <p className="text-start">Price: {props.result[7].price} TK</p>
    <p className="text-start">Rating: {props.result[7].rating}</p>
    <div className="card-actions justify-end">
      <button className="btn btn-primary">Buy Now</button>
    </div>
  </div>
</div>

<div className="card card-compact w-96 bg-base-100 shadow-xl">
  <figure>
    <img className="h-40 w-56 rounded-lg"
      src={props.result[8].image_url}
      alt="Shoes"
    />
  </figure>
  <div className="card-body">
    <h2 className="card-title">{props.result[8].name}</h2>
    <p className="text-start">Price: {props.result[8].price} TK</p>
    <p className="text-start">Rating: {props.result[8].rating}</p>
    <div className="card-actions justify-end">
      <button className="btn btn-primary">Buy Now</button>
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
