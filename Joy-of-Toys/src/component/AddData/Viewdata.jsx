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
      <tbody className=" p-1">
          <tr className='border-2 '>
            <td><img className="h-10 ml-8" src={pictureURL} alt="" /> </td>
            <td className='p-3 text-center'>{sellerName} </td> 
            <td className='p-3 text-center'>{name} </td> 
            <td className='p-3 text-center'>{subCategory} </td> 
            <td className='p-3 text-center'>{price} </td> 
            <td className='p-3 text-center'>{quantity} </td> 
            <div>
                <Link to={`/update/${_id}`} >  <button className="btn btn-active text-center space-x-1">Update</button>  </Link>
                <button onClick={() => handelDelete(_id)} className="btn bg-red-600 text-center">Delete</button>
          </div>
          </tr>
     </tbody> 
  );
};

export default Viewdata;


