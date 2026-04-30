import React from "react";
import logo from '../assets/download (4).jpg' 
import Image from "next/image";
import Link from "next/link";
import NavLink from "./shered/NavLink";
const Navbar = () => {

    const menuItem = <>
        <li><NavLink href={'/'}>Home</NavLink></li>
        <li><NavLink href={'/all-books'}>All Books</NavLink></li>
        <li><NavLink href={'/myProfile'}>My Profile</NavLink></li>
    </>

  return (
    <div className="navbar bg-base-100 container mx-auto">
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
            {menuItem}
          </ul>
        </div>
        <Image src={logo} alt="online book" className="p-0" width={70} height={70}></Image>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
         {menuItem}
        </ul>
      </div>
      <div className="navbar-end gap-3">
        <button className="border px-5 py-2 rounded-lg bg-[#6158d4] text-white">Login</button>
        <button className="border px-5 py-2 rounded-lg hover:bg-[#6158d4] hover:text-white transition-all duration-75">Log out</button>
      </div>
    </div>
  );
};

export default Navbar;
