import React from 'react'
import Link from "next/link";
import FacebookIcon from "@material-ui/icons/Facebook";
import InstagramIcon from "@material-ui/icons/Instagram";
import TwitterIcon from "@material-ui/icons/Twitter";
import PinterestIcon from "@material-ui/icons/Pinterest";
import SearchIcon from "@material-ui/icons/Search";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import StoreIcon from "@material-ui/icons/Store";
import PersonIcon from "@material-ui/icons/Person";

export default function Icons() {
    return (
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
    )
}
