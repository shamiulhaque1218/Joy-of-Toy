/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import AlldataWithtable from './AlldataWithtable';

const Alltoy = () => {

  const [searchPrice, setSearchPrice] = useState("");
  const [toy,setToy] = useState([]);

   useEffect( () => {

    fetch('https://joy-of-toys-server.vercel.app/product')
    .then((res) => res.json())
    .then(data => {
      setToy(data)
    })

   } ,[])


  const handelSearch = () => {

    fetch(`https://joy-of-toys-server.vercel.app/products/${searchPrice}`)
    .then((res) => res.json())
    .then(data => {
      setToy(data)
    })

  }

 
    return (
      <div className="p-10">

      <div className="mb-4 mx-10 space-x-2">
        <input
          type="text"
          id="sellerName"
          onChange={(e) => setSearchPrice(e.target.value)}
          className="w-40 py-2 placeholder-gray-400 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <button className='bg-black text-white p-2 rounded-lg' onClick={handelSearch}> Search</button>
      </div>

      <table className="table table-compact w-full">
        <thead>
          <tr> 
            <th className='text-center'>Seller Name</th> 
            <th className='text-center'>Toy Name</th> 
            <th className='text-center'>Sub-category</th> 
            <th className='text-center'>Price</th> 
            <th className='text-center'>Available Quantity</th> 
            <th className='text-center'></th>
          </tr>
        </thead> 
        
          {
            toy.map(data => <AlldataWithtable key={data._id} data={data} >  

            </AlldataWithtable> )
          }
        
        
      </table>
      </div>
    );
};

export default Alltoy;