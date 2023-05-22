/* eslint-disable no-unused-vars */
import React, { useContext, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import Viewdata from './Viewdata';
import { AuthContext } from '../provider/AuthProvider';

const Mydata = () => {
    const data = useLoaderData();
    const {user} = useContext(AuthContext);
    const [toy,setToy] = useState(data)
   // console.log(user.email,)
   const newdata = toy.filter(r => r?.user_email == user?.email)

    return (
        <div className="overflow-x-auto">
            <p className='text-center text-3xl font-semibold p-5'>My Total Toy : {newdata.length}</p>
        <table className="table table-compact w-full">
          <thead>
            <tr> 
              <th className='text-center'>Toy Picture</th> 
              <th className='text-center'>Seller Name</th> 
              <th className='text-center'>Toy Name</th> 
              <th className='text-center'>Sub-category</th> 
              <th className='text-center'>Price</th> 
              <th className='text-center'>Available Quantity</th> 
              <th className='text-center'>  </th>
            </tr>
          </thead> 
          
               {
              newdata.map(mydata => <Viewdata
              key={mydata._id} mydata={mydata} toy={toy} setToy={setToy} >

              </Viewdata>)
               }
          
          
        </table>
        </div>
    );
};

export default Mydata;





