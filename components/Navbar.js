import React, {useState} from "react";
import Link from "next/link";
import Dropdown from "./Dropdown.js";

import Navbaring from './Navbaring.js';
import Icons from './Icons.js';

export default function Navbar() {
  const [active, setActive] = useState(false);

  const handleClick = () => {
    console.log(active);
    setActive(!active);
  };

  return (
    <div className="">
      
      <nav  className="flex items-center flex-wrap p-3 bg-cream-light">
        <div className="grid grid-flow-row auto-rows-max">
          <Link href="/">
            <a className="inline-flex p-3 mr-4 ">
              <span className="ml-6 sm:ml-7 text-5xl text-black font-bold lowercase tracking-wide">
                bio:cule
              </span>
            </a>
          </Link>

          <div className="grid grid-flow-col auto-cols-max invisible sm:visible">
            <Dropdown text="skin:care" />
            <Dropdown text="bio:edge" />
            <Dropdown text="b:logs" />
          </div>
        </div>

        <Navbaring/>        

      <div className="invisible sm:visible lg:inline-flex lg:flex-row lg:ml-auto lg:w-auto w-full lg:items-center items-start  flex flex-col lg:h-auto">   
      <Icons/>
      </div>     


       
      </nav>
    </div>
  );
}
