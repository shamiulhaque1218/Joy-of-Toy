/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import Swal from 'sweetalert2';

const Updatetoy = () => {
    const update = useLoaderData();
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
      } = update;
    const [name1, setName] = useState('');
    const [pictureURL1, setPictureURL] = useState('');
    const [sellerName1, setSellerName] = useState('');
    const [sellerEmail1, setSellerEmail] = useState('');
    const [subCategory1, setSubCategory] = useState('');
    const [price1, setPrice] = useState('');
    const [rating1, setRating] = useState('');
    const [quantity1, setQuantity] = useState('');
    const [description1, setDescription] = useState('');

    const handleUpdate = (e) => {
        e.preventDefault(); 
        const newUpdateToy = {name1,pictureURL1,sellerName1,sellerEmail1,subCategory1,price1,rating1,quantity1,description1}
        console.log(newUpdateToy);

        fetch(`http://localhost:4000/product/${_id}`, {
        method: 'PUT',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify(newUpdateToy)
    })
    .then(res => res.json())
    .then(data =>{
        console.log(data)
        if(data.modifiedCount > 0) {
            Swal.fire({
                title: 'Toy Data',
                text: 'Update Toy Successfully',
                icon: 'success',
                confirmButtonText: 'Done'
              })
        }
    })

          }
   
    return (
        <div>
            <p className='text-center text-4xl font-semibold p-8 bg-blue-500 text-white gFont2'>Update Toy</p>
            <form onSubmit={handleUpdate} className="grid grid-cols-2">
     
      <div className="mb-4 mx-10">
        <label htmlFor="name" className="block mb-2 text-sm font-bold text-gray-700">
          Name:
        </label>
        <input
          type="text"
          id="name"
          defaultValue={name}
          onChange={(e) => setName(e.target.value)}
          className="w-full px-3 py-2 placeholder-gray-400 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      <div className="mb-4  mx-10">
        <label htmlFor="pictureURL" className="block mb-2 text-sm font-bold text-gray-700">
          Picture URL:
        </label>
        <input
          type="text"
          id="pictureURL"
          defaultValue={pictureURL}
          onChange={(e) => setPictureURL(e.target.value)}
          className="w-full px-3 py-2 placeholder-gray-400 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      <div className="mb-4 mx-10">
        <label htmlFor="sellerName" className="block mb-2 text-sm font-bold text-gray-700">
          Seller Name:
        </label>
        <input
          type="text"
          id="sellerName"
          defaultValue={sellerName}
          onChange={(e) => setSellerName(e.target.value)}
          className="w-full px-3 py-2 placeholder-gray-400 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      <div className="mb-4 mx-10">
        <label htmlFor="sellerEmail" className="block mb-2 text-sm font-bold text-gray-700">
          Seller Email:
        </label>
        <input
          type="email"
          id="sellerEmail"
          defaultValue={sellerEmail}
          onChange={(e) => setSellerEmail(e.target.value)}
          className="w-full px-3 py-2 placeholder-gray-400 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      <div className="mb-4 mx-10">
        <label htmlFor="subCategory" className="block mb-2 text-sm font-bold text-gray-700">
          Sub-category:
        </label>
        <input
          type="text"
          id="subCategory"
          defaultValue={subCategory}
          onChange={(e) => setSubCategory(e.target.value)}
          className="w-full px-3 py-2 placeholder-gray-400 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      <div className="mb-4 mx-10">
        <label htmlFor="price" className="block mb-2 text-sm font-bold text-gray-700">
          Price:
        </label>
        <input
          type="text"
          id="price"
          defaultValue={price}
          onChange={(e) => setPrice(e.target.value)}
          className="w-full px-3 py-2 placeholder-gray-400 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      <div className="mb-4 mx-10">
        <label htmlFor="rating" className="block mb-2 text-sm font-bold text-gray-700">
          Rating:
        </label>
        <input
          type="text"
          id="rating"
          defaultValue={rating}
          onChange={(e) => setRating(e.target.value)}
          className="w-full px-3 py-2 placeholder-gray-400 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      <div className="mb-4 mx-10 ">
        <label htmlFor="quantity" className="block mb-2 text-sm font-bold text-gray-700">
          Available Quantity:
        </label>
        <input
          type="text"
          id="quantity"
          defaultValue={quantity}
          onChange={(e) => setQuantity(e.target.value)}
          className="w-full px-3 py-2 placeholder-gray-400 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      <div className="mb-4 mx-10">
        <label htmlFor="description" className="block mb-2 text-sm font-bold text-gray-700">
          Detail Description:
        </label>
        <textarea
          id="description"
          defaultValue={description}
          onChange={(e) => setDescription(e.target.value)}
          className="w-full px-3 py-2 placeholder-gray-400 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          rows="4"
        />
      </div>

      <button type="submit" className="mx-10 my-8 px-4 py-2  font-bold text-white bg-blue-500 rounded-md hover:bg-blue-600">
        Update Toy Details
      </button>
             </form>
        </div>
    );
};

export default Updatetoy;