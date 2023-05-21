/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const Viewdata = ({ mydata ,setToy ,toy}) => {
  // console.log(mydata)
  const {
    _id,
    name,
    pictureURL,
    sellerName,
    sellerEmail,
    subCategory,
    price,
    rating,
    quantity,
    description,
  } = mydata;

   const handelDelete = _id => {
   // console.log(_id)
    Swal.fire({
        title: 'Are you sure?',
        text: "You won't be able to revert this!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, delete it!'
      }).then((result) => {
        if (result.isConfirmed) {
        //   Swal.fire(
        //     'Deleted!',
        //     'Your Toy data has been deleted.',
        //     'success'
        //   )
        fetch(`https://joy-of-toys-server.vercel.app/product/${_id}`,{
            method: 'DELETE'
        })
        .then(res => res.json())
        .then(data => {
            console.log(data);
            if(data.deletedCount > 0) {
                Swal.fire(
                        'Deleted!',
                        'Your Toy data has been deleted.',
                        'success'
                      )
                      const remain = toy.filter(t => t._id !== _id)
                      setToy(remain);
            }
        })

        }
      })


  }
  return (
    <div className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 p-1">
      <div className="card card-side bg-slate-300 shadow-xl ">
        <figure className="p-5">
          <img
            src={pictureURL?pictureURL : "Picture"} className="h-40 w-32 border-2 shadow-lg"
            alt="Movie"
          />
        </figure>
        <div className="w-full flex justify-between pr-4 pt-8 p-5">
          <div>
          <h2 className="card-title">{name}</h2>
          <p>Seller Name: {sellerName}</p>
          <p>Seller Email: {sellerEmail}</p>
          <p>Sub Category: {subCategory}</p>
          <p>Price: {price}</p>
          <p>Rating: {rating}</p>
          <p>Quantity: {quantity}</p>
          <p>description: {description}</p>
          </div>
          <div className="btn-group btn-group-vertical ">
                <Link to={`/update/${_id}`} >  <button className="btn btn-active ">Update</button>  </Link>
                <button onClick={() => handelDelete(_id)} className="btn bg-red-600">Delete</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Viewdata;
