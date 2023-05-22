// eslint-disable-next-line no-unused-vars
import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import { AuthContext } from "../provider/AuthProvider";
import { Tooltip } from "react-tooltip";

const Navbar = () => {
  const { user, logOutUser } = useContext(AuthContext);

  const handelLogOut = () => {
    logOutUser().then((res) => {
      console.log(res).catch((err) => {
        console.log(err);
      });
    });
  };
  //console.log(user?.photoURL);
  return (
    <div data-aos="fade-down"
    data-aos-duration="300" > 
      <div className="navbar bg-base-100 lg:p-5 py-2 bg-gradient-to-r from-blue-100 to-blue-200">
        <div className="navbar-center">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li>
                {" "}
                <NavLink
                  to="/"
                  className={({ isActive }) =>
                    isActive ? "text-blue-500" : "text-black"
                  }
                >
                  Home
                </NavLink>{" "}
              </li>
              <li>
                {" "}
                <NavLink
                  to="/alltoys"
                  className={({ isActive }) =>
                    isActive ? "text-blue-500" : "text-black"
                  }
                >
                  All Toys
                </NavLink>{" "}
              </li>
              {user && (
                <li>
                  {" "}
                  <NavLink
                    to="/mydata"
                    className={({ isActive }) =>
                      isActive ? "text-blue-500" : "text-black"
                    }
                  >
                    My Toys
                  </NavLink>{" "}
                </li>
              )}
              {user && (
                <li>
                  {" "}
                  <NavLink
                    to="/addtoy"
                    className={({ isActive }) =>
                      isActive ? "text-blue-500" : "text-black"
                    }
                  >
                    Add A Toy
                  </NavLink>{" "}
                </li>
              )}
              <li>
                {" "}
                <NavLink
                  to="/blogs"
                  className={({ isActive }) =>
                    isActive ? "text-blue-500" : "text-black"
                  }
                >
                  Blogs
                </NavLink>{" "}
              </li>
              {!user && (
                <li>
                  {" "}
                  <NavLink
                    to="/login"
                    className={({ isActive }) =>
                      isActive ? "text-blue-500" : "text-black"
                    }
                  >
                    Login
                  </NavLink>{" "}
                </li>
              )}
              
              <a
                data-tooltip-id="my-tooltip"
                data-tooltip-content={user?.displayName}>
                {user?.photoURL && (
                  <div className="pl-5"><img id="img" className=" h-11 w-11 rounded-full"
                  src={user?.photoURL}></img></div> )}
              </a>

              {user && (
                <button className="pl-2 lg:pl-5" onClick={handelLogOut}>
                  {" "}
                  Log out
                </button>
              )}
              
            </ul>
          </div>
          <img className="w-24 h-24 rounded-full" src="joytoy.png" alt="" />
          <a className="btn btn-ghost normal-case text-4xl gFont font-light">
            Joy Of Toys
          </a>
        </div>
        <div className="navbar-center hidden  lg:flex">
          <ul className="menu menu-horizontal gap-6 px-40 text-base font-medium">
            <li>
              <NavLink
                to="/"
                className={({ isActive }) => isActive ? "text-blue-500" : "text-black"} > 
                Home </NavLink>
            </li>
            <li>
              {" "}
              <NavLink to="/alltoys" className={({ isActive }) => isActive ? "text-blue-500" : "text-black"}>
                All Toys </NavLink>
            </li>
            {user && (
              <li>
                {" "}
                <NavLink
                  to="/mydata"
                  className={({ isActive }) =>
                    isActive ? "text-blue-500" : "text-black"
                  }
                >
                  My Toys
                </NavLink>{" "}
              </li>
            )}
            {user && (
              <li>
                {" "}
                <NavLink
                  to="/addtoy"
                  className={({ isActive }) =>
                    isActive ? "text-blue-500" : "text-black"
                  }
                >
                  Add A Toy
                </NavLink>{" "}
              </li>
            )}
            <li>
              {" "}
              <NavLink
                to="/blogs"
                className={({ isActive }) =>
                  isActive ? "text-blue-500" : "text-black"
                }
              >
                Blogs
              </NavLink>{" "}
            </li>
            {!user && (
              <li>
                {" "}
                <NavLink
                  to="/login"
                  className={({ isActive }) =>
                    isActive ? "text-blue-500" : "text-black"
                  }
                >
                  Login
                </NavLink>{" "}
              </li>
            )}

            {user && (
              <button className="pl-2 lg:pl-5" onClick={handelLogOut}>Log out </button> )}
           
            <a
              data-tooltip-id="my-tooltip" data-tooltip-content={user?.displayName}>
              {user?.photoURL && <img  id='img' className='h-12 w-12 rounded-full' src={user?.photoURL}></img>}{" "}
            </a>
          </ul>
        </div>
        <Tooltip id="my-tooltip" />
      </div>
    </div>
  );
};

export default Navbar;
