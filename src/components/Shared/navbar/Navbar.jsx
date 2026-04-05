import React from "react";
import { NavLink } from "react-router";

const Navbar = () => {
  const navLinks = (
    <>
      <li>
        <NavLink
          to="/"
          className={({ isActive }) =>
            `ml-2 ${isActive ? "border border-green-400 rounded-lg text-green-400 font-semibold" : ""}`
          }
        >
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/books"
          className={({ isActive }) =>
            `ml-2 ${isActive ? "border border-green-400 rounded-lg text-green-400 font-semibold" : ""}`
          }
        >
          Listed Books
        </NavLink>
      </li>
      <li>
        <NavLink
          to="pages-to-read"
          className={({ isActive }) =>
            `ml-2 ${isActive ? "border border-green-400 rounded-lg text-green-400 font-semibold" : ""}`
          }
        >
          Pages to Read
        </NavLink>
      </li>
    </>
  );

  return (
    <div className="bg-base-100 shadow-sm">
      <div className="navbar  container mx-auto">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {" "}
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />{" "}
              </svg>
            </div>
            <ul
              tabIndex="-1"
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
            >
              {navLinks}
            </ul>
          </div>
          <h2 className="font-bold text-xl">Book Vibe</h2>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1"> {navLinks}</ul>
        </div>
        <div className="navbar-end font-semibold  gap-2">
          <a className="btn btn-success text-white">Sign in</a>
          <a className="btn btn-info text-white">Sign up</a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
