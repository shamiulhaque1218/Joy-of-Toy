// eslint-disable-next-line no-unused-vars
import React from 'react';
import { NavLink } from 'react-router-dom';


const Navbar = () => {
    return (
        <div >

<div className="navbar bg-base-100 lg:p-5 py-2">
  <div className="navbar-center">
    <div className="dropdown">
      <label tabIndex={0} className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </label>
      <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">

        <li> <NavLink to="/" className={({ isActive }) => (isActive ? 'text-blue-500'  : 'text-black')}>Home</NavLink> </li>
        <li> <NavLink to="/login" className={({ isActive }) => (isActive ? 'text-blue-500'  : 'text-black')}>All Toys</NavLink> </li>
        <li> <NavLink to="/logout" className={({ isActive }) => (isActive ? 'text-blue-500'  : 'text-black')}>My Toys</NavLink> </li>
        <li> <NavLink to="/login" className={({ isActive }) => (isActive ? 'text-blue-500'  : 'text-black')}>Add A Toy</NavLink> </li>
        <li> <NavLink to="/blogs" className={({ isActive }) => (isActive ? 'text-blue-500'  : 'text-black')}>Blogs</NavLink> </li>
        
      </ul>
    </div>
    <img className='w-24 h-24 rounded-full' src="joytoy.png" alt="" />
    <a className="btn btn-ghost normal-case text-4xl gFont font-light">  Joy Of Toys</a>
  </div>
  <div className="navbar-center hidden  lg:flex">
    <ul className="menu menu-horizontal gap-6 px-40 text-md font-medium">
      
   
       
        <li> <NavLink to="/" className={({ isActive }) => (isActive ? 'text-blue-500'  : 'text-black')}>Home</NavLink> </li>
        <li> <NavLink to="/login" className={({ isActive }) => (isActive ? 'text-blue-500'  : 'text-black')}>All Toys</NavLink> </li>
        <li> <NavLink to="/logout" className={({ isActive }) => (isActive ? 'text-blue-500'  : 'text-black')}>My Toys</NavLink> </li>
        <li> <NavLink to="/login" className={({ isActive }) => (isActive ? 'text-blue-500'  : 'text-black')}>Add A Toy</NavLink> </li>
        <li> <NavLink to="/blogs" className={({ isActive }) => (isActive ? 'text-blue-500'  : 'text-black')}>Blogs</NavLink> </li>


    </ul>
  </div>
</div>

            
        </div>
    );
};

export default Navbar;