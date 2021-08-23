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
              <span className="sm:ml-6 text-5xl text-black font-bold lowercase tracking-wide text-center">
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

        <Navbaring/>        

        <Icons/>

       
      </nav>
    </div>
  );
}
