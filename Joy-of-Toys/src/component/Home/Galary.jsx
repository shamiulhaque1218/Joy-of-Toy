/* eslint-disable react/prop-types */
// eslint-disable-next-line no-unused-vars
import React from 'react';


const Galary = (props) => {
    //console.log(props.result.data[0])

    return (
        <div className='bg-sky-800 ' > 
            <p  className='text-center text-5xl text-white gFont2 pt-40'> Welcome to our stunning gallery <br />  of captivating photographs. </p>
            <p className='text-center text-white text-2xl py-8'>Our collections are many category of Animal Toys.</p>
        <div className='grid grid-cols-4 px-32 py-10 '>
        <img className='col-span-2 row-span-2 height0 w-full drop-shadow-lg' src={props.result.data[0].image_url} alt="" />
         <img className='col-span-2 height1 w-full drop-shadow-lg' src={props.result.data[1].image_url} alt="" />
         <img className='col-span-1 h-72 w-full drop-shadow-lg' src={props.result.data[2].image_url} alt="" />
         <img className='col-span-1 h-72 w-full drop-shadow-lg' src={props.result.data[3].image_url} alt="" />
         <img className='col-span-1 h-72 w-full drop-shadow-lg' src={props.result.data[7].image_url} alt="" />
         <img className='col-span-1 h-72 drop-shadow-lg w-full' src={props.result.data[5].image_url} alt="" />
         <img className='col-span-2 drop-shadow-lg h-72 w-full' src={props.result.data[6].image_url} alt="" />
           
        </div>
         
        </div>
    );
};
 
export default Galary;