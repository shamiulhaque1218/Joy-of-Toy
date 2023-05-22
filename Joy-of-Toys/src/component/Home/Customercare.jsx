/* eslint-disable no-unused-vars */
import React from 'react';
import { faCartShopping, faHandshakeAngle, faHouseChimneyWindow, faSackDollar, faTruckFast } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Customercare = () => {
    return (
        <div className='py-24 px-6 border-dashed border-t-2 border-slate-300 grid grid-cols-5'  data-aos="fade-right"
        data-aos-offset="300"
        data-aos-easing="ease-in-sine">
            <div className='p-5 '>
            <FontAwesomeIcon className='h-12' icon={faTruckFast}  beatFade />
            <p className='gFont2 text-2xl font-medium'>Free Shipping</p>
            <p className='gFont2 text-xl text-gray-500 pt-1'>Free delivery over 500 BDT order.</p>
            <p className='gFont2 text-xl text-gray-500 '> Only For Dhaka.</p>
            </div>

            <div className='p-5 '>
            <FontAwesomeIcon className='h-12' icon={faSackDollar}   />
            <p className='gFont2 text-2xl font-medium'>Money Saving</p>
            <p className='gFont2 text-xl text-gray-500 pt-1'>Join our website & get 30% </p>
            <p className='gFont2 text-xl text-gray-500 '> off for the first purchase</p>
            </div>

            <div className='p-5 '>
            <FontAwesomeIcon className='h-12' icon={faHandshakeAngle} />
            <p className='gFont2 text-2xl font-medium'>Customer Care</p>
            <p className='gFont2 text-xl text-gray-500 pt-1'>Contact us by email at </p>
            <p className='gFont2 text-xl text-gray-500 '> joytoy@gmail.com</p>
            </div>
            <div className='p-5 '>
            <FontAwesomeIcon className='h-12' icon={faCartShopping}  beatFade />
            <p className='gFont2 text-2xl font-medium'>Purchase</p>
            <p className='gFont2 text-xl text-gray-500 pt-1'>Very easy to find a </p>
            <p className='gFont2 text-xl text-gray-500 '> product and purchase </p>
            </div>
            <div className='p-5 '>
            <FontAwesomeIcon className='h-12' icon={faHouseChimneyWindow}  />
            <p className='gFont2 text-2xl font-medium'>Second Life</p>
            <p className='gFont2 text-xl text-gray-500 pt-1'>Give a second life to your </p>
            <p className='gFont2 text-xl text-gray-500 '> Joy of Toys handmade. </p>
            </div>
            
        </div>
    );
};

export default Customercare;