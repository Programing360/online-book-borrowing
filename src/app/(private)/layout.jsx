import React from "react";
import MyProfilePage from "./myProfile/page";
import { LogOut } from "lucide-react";
import Link from "next/link";

const layout = ({ children }) => {
  return (
    <div className="">
      <div className="drawer ">
        <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content flex flex-col ">
          {/* Navbar */}
          <div className="navbar bg-base-300 w-full">
            <div className="flex-none lg:hidden ">
              <label
                htmlFor="my-drawer-2"
                aria-label="open sidebar"
                className="btn btn-square btn-ghost"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  className="inline-block h-6 w-6 stroke-current"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  ></path>
                </svg>
              </label>
            </div>
            <div className="flex items-center justify-between w-full container mx-auto">
              <Link href={'/'}>
                <div className="mx-2 flex-1 px-2 text-2xl font-bold">
                  My Profile
                </div>
              </Link>
              <div className="hidden flex-none lg:block ">
                <ul className="menu menu-horizontal items-center gap-4">
                  {/* Navbar menu content here */}

                  <li>
                    <button className="btn bg-purple-500 text-white hover:bg-purple-500">
                      {" "}
                      <LogOut />
                      Log Out
                    </button>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          {/* Page content here */}
          {children}
        </div>
        <div className="drawer-side">
          <label
            htmlFor="my-drawer-2"
            aria-label="close sidebar"
            className="drawer-overlay"
          ></label>
          <ul className="menu bg-base-200 min-h-full w-80 p-4">
            {/* Sidebar content here */}
            <li>
              <button className="btn bg-purple-500 text-white hover:bg-purple-500">
                {" "}
                <LogOut />
                Log Out
              </button>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default layout;
