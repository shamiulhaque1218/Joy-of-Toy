/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import Viewdata from './Viewdata';

const Mydata = () => {
    const data = useLoaderData();
    const [toy,setToy] = useState(data)

    return (
        <div className="overflow-x-auto px-2">
            <p className='text-center text-3xl font-semibold p-4'>Total Toy : {data.length}</p>
        <table className="table table-compact w-full">
          <thead>
            <tr> 
              <th className='text-center'>Toy Picture</th> 
              <th className='text-center'>Seller Name</th> 
              <th className='text-center'>Toy Name</th> 
              <th className='text-center'>Sub-category</th> 
              <th className='text-center'>Price</th> 
              <th className='text-center'>Available Quantity</th> 
              <th className='text-center'> </th>
            </tr>
          </thead> 
          
               {
              data.map(mydata => <Viewdata
              key={mydata._id} mydata={mydata} toy={toy} setToy={setToy} >

              </Viewdata>)
               }
          
          
        </table>
        </div>
    );
};

export default Mydata;



