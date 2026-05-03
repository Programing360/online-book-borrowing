"use client";
import React from "react";
import logo from "../assets/logo.png";
import Image from "next/image";
import Link from "next/link";
import NavLink from "./shered/NavLink";
import { signOut, useSession } from "@/lib/auth-client";
import 'animate.css';

const Navbar = () => {
  const { data, isPending } = useSession();
  const menuItem = (
    <>
      <li>
        <NavLink href={"/"}>Home</NavLink>
      </li>
      <li>
        <NavLink href={"/all-books"}>All Books</NavLink>
      </li>
      {data?.user ? (
        <li>
          <NavLink href={"/myProfile"}>My Profile</NavLink>
        </li>
      ) : (
        <li>
          <NavLink href={"/login"}>My Profile</NavLink>
        </li>
      )}
    </>
  );
  return (
    <div className="bg-base-100 sticky top-0 z-10 shadow shadow-fuchsia-400 animate__animated animate__fadeInDown">
      <div className="navbar container mx-auto mb-10">
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
          <Image
            src={logo}
            alt="online book"
            className=" hidden lg:block"
            width={100}
            height={10}
          ></Image>
        </div>
        <Image
          src={logo}
          alt="online book"
          className=" mx-auto lg:hidden"
          width={100}
          height={100}
        ></Image>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{menuItem}</ul>
        </div>
        <div className="navbar-end gap-3">
          {isPending ? (
            <p>Loading...</p>
          ) : data?.user ? (
            <button
              onClick={async () => await signOut()}
              className="btn px-5 py-2 bg-[#281911] rounded-lg hover:bg-[#6158d4] text-white transition-all duration-75"
            >
              Log out
            </button>
          ) : (
            <Link href={"/login"}>
              <button className="border px-5 py-2 rounded-lg bg-[#6158d4] text-white">
                Login
              </button>
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
