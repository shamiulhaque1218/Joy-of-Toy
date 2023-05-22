/* eslint-disable no-unused-vars */
import React from 'react';
import { useLoaderData } from 'react-router-dom';
import AlldataWithtable from './AlldataWithtable';

const Alltoy = () => {
  const data = useLoaderData()
    return (
      <div className="overflow-x-auto px-2">
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
            data.map(data => <AlldataWithtable key={data._id} data={data} >  

            </AlldataWithtable> )
          }
        
        
      </table>
      </div>
    );
};

export default Alltoy;