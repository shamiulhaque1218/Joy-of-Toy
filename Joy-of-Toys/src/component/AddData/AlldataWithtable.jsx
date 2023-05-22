/* eslint-disable react/prop-types */
// eslint-disable-next-line no-unused-vars
import React from 'react';
import { Link } from 'react-router-dom';

const AlldataWithtable = ({data}) => {

    const {
        _id,
        name,
        sellerName,
        subCategory,
        price,
        quantity,
      } = data;
      
    return (
        <tbody>
          <tr className='border-2 '>
            <td className='p-3 text-center'>{sellerName} </td> 
            <td className='p-3 text-center'>{name} </td> 
            <td className='p-3 text-center'>{subCategory} </td> 
            <td className='p-3 text-center'>{price} </td> 
            <td className='p-3 text-center'>{quantity} </td> 
           <Link to={`/alltoyview/${_id}`} className='text-white'>  <button className='bg-blue-500 p-1 rounded-lg'>View Details</button>  </Link>
          </tr>
          
          </tbody> 
    );
};

export default AlldataWithtable;