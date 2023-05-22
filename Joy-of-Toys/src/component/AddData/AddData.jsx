/* eslint-disable no-unused-vars */
import React, { useContext, useState } from 'react';
import Swal from 'sweetalert2';
import { AuthContext } from '../provider/AuthProvider';

const AddData = () => {
  const {user} = useContext(AuthContext);
  //console.log(user?.email)

    const [name, setName] = useState('');
    const [pictureURL, setPictureURL] = useState('');
    const [sellerName, setSellerName] = useState('');
    const [sellerEmail, setSellerEmail] = useState('');
    const [subCategory, setSubCategory] = useState('');
    const [price, setPrice] = useState('');
    const [rating, setRating] = useState('');
    const [quantity, setQuantity] = useState('');
    const [description, setDescription] = useState('');

    const handleSubmit = (e) => {
    e.preventDefault(); 
    const user_email =user?.email;
    const addToy = {user_email,name,pictureURL,sellerName,sellerEmail,subCategory,price,rating,quantity,description}
    //console.log(addToy);

    fetch('https://joy-of-toys-server.vercel.app/product', {
        method: 'POST',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify(addToy)
    })
    .then(res => res.json())
    .then(data =>{
        console.log(data)
        if(data.insertedId) {
            Swal.fire({
                title: 'Toy Data',
                text: 'Added User Successfully',
                icon: 'success',
                confirmButtonText: 'Done'
              })
        }
    })
    
}

    return (
        <div className='px-40 py-10 '>

    <form onSubmit={handleSubmit} className="grid grid-cols-2">
     
      <div className="mb-4 mx-10">
        <label htmlFor="name" className="block mb-2 text-sm font-bold text-gray-700">
          Name:
        </label>
        <input
          type="text"
          id="name"
          value={name}
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
          value={pictureURL}
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
          value={sellerName}
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
          value={sellerEmail}
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
          value={subCategory}
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
          value={price}
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
          value={rating}
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
          value={quantity}
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
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          className="w-full px-3 py-2 placeholder-gray-400 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          rows="4"
        />
      </div>

      <button type="submit" className="mx-10 my-8 px-4 py-2  font-bold text-white bg-blue-500 rounded-md hover:bg-blue-600">
        Submit
      </button>
    </form>
            
        </div>
    );
};

export default AddData;