/* eslint-disable no-unused-vars */
import React from 'react';

const Alltoy = () => {
    return (
        <div>

<div className="overflow-x-auto">
  <table className="table w-full">
    {/* head */}
    <thead>
      <tr>
        <th>Name</th>
        <th>pictureURL</th>
        <th>Seller Name</th> 
        <th>Seller Email</th>
      </tr>
    </thead>
    <tbody>
      {/* row 1 */}
      <tr>
        <td>Name: {}</td>
        {/* <td><img className="h-12" src={pictureURL? pictureURL : "Image"} alt="" /> </td> */}
        <td>Seller Name: {}</td>
        <td>Seller Email: {}</td>
      </tr>
      
    </tbody>
  </table>
</div>
            
        </div>
    );
};

export default Alltoy;