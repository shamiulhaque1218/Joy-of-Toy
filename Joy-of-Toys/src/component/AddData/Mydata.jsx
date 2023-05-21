/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import Viewdata from './Viewdata';

const Mydata = () => {
    const data = useLoaderData();
    const [toy,setToy] = useState(data)

    return (
        <div>
             <p className='text-center text-3xl font-semibold p-4'>Total Toy : {data.length}</p>
            <div className='lg:grid grid-cols-2 gap-5 px-1 py-10'>
            {
                data.map(mydata => <Viewdata
                 key={mydata._id} mydata={mydata} toy={toy} setToy={setToy} >

                </Viewdata>)
            }
            </div>
        </div>
    );
};

export default Mydata;