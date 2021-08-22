import React from "react";
import Link from "next/link";
import { useState } from "react";
import Dropdown from "./Dropdown.js";
import FacebookIcon from "@material-ui/icons/Facebook";
import InstagramIcon from "@material-ui/icons/Instagram";
import TwitterIcon from "@material-ui/icons/Twitter";
import PinterestIcon from "@material-ui/icons/Pinterest";
import SearchIcon from "@material-ui/icons/Search";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import StoreIcon from "@material-ui/icons/Store";
import PersonIcon from "@material-ui/icons/Person";

export default function Navbar() {
  const [active, setActive] = useState(false);

  const handleClick = () => {
    console.log(active);
    setActive(!active);
  };

  return (
    <div>
      <nav style={{backgroundColor: '#fffef4'}} className="flex items-center flex-wrap p-3 ">
        <div className="grid grid-flow-row auto-rows-max">
          <Link href="/">
            <a className="inline-flex p-3 mr-4 ">
              <span className="text-3xl text-black font-bold lowercase tracking-wide">
                bio:cule
              </span>
            </a>
          </Link>

          <div className="grid grid-flow-col auto-cols-max">
            <Dropdown text="skin:care" />
            <Dropdown text="bio:edge" />
            <Dropdown text="b:logs" />
          </div>
        </div>

        <button
          className=" inline-flex p-3 rounded lg:hidden text-white ml-auto hover:text-white outline-none"
          onClick={handleClick}
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
        {/*Note that in this div we will use a ternary operator to decide whether or not to display the content of the div  */}
        <div
          className={`${
            active ? "" : "hidden"
          }   w-full lg:inline-flex lg:flex-grow lg:w-auto`}
        >
          <div className="lg:inline-flex lg:flex-row lg:ml-auto lg:w-auto w-full lg:items-center items-start  flex flex-col lg:h-auto">
            <div style={{marginLeft: '10px', padding:'10px'}} className="grid grid-flow-row auto-rows-max">
              <div style={{padding: '10px'}}>
                <Link href="/">
                  <a className="lg:inline-flex lg:w-auto w-full px-3 py-2 rounded text-black font-bold items-center justify-center hover:bg-white-600 hover:text-white ">
                    <InstagramIcon />
                  </a>
                </Link>
                <Link href="/">
                  <a className="lg:inline-flex lg:w-auto w-full px-3 py-2 rounded text-black font-bold items-center justify-center hover:bg-white-600 hover:text-white">
                    <FacebookIcon />
                  </a>
                </Link>
                <Link href="/">
                  <a className="lg:inline-flex lg:w-auto w-full px-3 py-2 rounded text-black font-bold items-center justify-center hover:bg-white-600 hover:text-white">
                    <TwitterIcon />
                  </a>
                </Link>
                <Link href="/">
                  <a className="lg:inline-flex lg:w-auto w-full px-3 py-2 rounded text-black font-bold items-center justify-center hover:bg-white-600 hover:text-white">
                    <PinterestIcon />
                  </a>
                </Link>
              </div>

              <div>
                <a className="lg:inline-flex lg:w-auto w-full px-3 py-2 rounded text-black font-bold items-center justify-center hover:bg-white-600 hover:text-white">
                  <SearchIcon />
                </a>
                <a className="lg:inline-flex lg:w-auto w-full px-3 py-2 rounded text-black font-bold items-center justify-center hover:bg-white-600 hover:text-white">
                  <FavoriteBorderIcon />
                </a>
                <a className="lg:inline-flex lg:w-auto w-full px-3 py-2 rounded text-black font-bold items-center justify-center hover:bg-white-600 hover:text-white">
                  <PersonIcon />
                </a>

                <a className="lg:inline-flex lg:w-auto w-full px-3 py-2 rounded text-black font-bold items-center justify-center hover:bg-white-600 hover:text-white">
                  <StoreIcon />
                </a>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}
