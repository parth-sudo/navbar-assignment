import React from "react";
import { createPopper } from "@popperjs/core";
import Items from "./Items.js";
import Items2 from "./Items2.js";

const Dropdown = ({ color, headliner }) => {
  // dropdown props
  const [dropdownPopoverShow, setDropdownPopoverShow] = React.useState(false);
  const btnDropdownRef = React.createRef();
  const popoverDropdownRef = React.createRef();

  const openDropdownPopover = () => {
    createPopper(btnDropdownRef.current, popoverDropdownRef.current, {
      placement: "bottom-start",
    });
    setDropdownPopoverShow(true);
  };
  const closeDropdownPopover = () => {
    setDropdownPopoverShow(false);
  };
  // bg colors
  let bgColor;
  color === "white"
    ? (bgColor = "bg-blueGray-700")
    : (bgColor = "bg-" + color + "-500");
  return (
    <>
      <div className="flex flex-wrap">
        <div className="w-full sm:w-6/12 md:w-4/12 px-4">
          <div className="relative inline-flex align-middle w-full">
            <button
              className={
                "text-black font-bold lowercase text-sm px-6 py-3 hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150 " +
                bgColor
              }
              type="button"
              ref={btnDropdownRef}
              onMouseEnter={() => {
                dropdownPopoverShow
                  ? closeDropdownPopover()
                  : openDropdownPopover()
              }}
            >
              {headliner}
            </button>

            <div
              ref={popoverDropdownRef}
              className={
                (dropdownPopoverShow ? "block " : "hidden ") +
                (color === "white" ? "bg-white " : bgColor + " ") +
                "bg-red-200 hover:bg-red-300  text-base z-50 float-left py-2 list-none text-left rounded shadow-lg mt-1 dropdown"
              }
      
              style={{ minWidth: "80vw", backgroundColor: '#fffef4', transform: 'translate(-20px, 60px)'}} 
              onMouseEnter={() => {
                !dropdownPopoverShow
                  ? closeDropdownPopover()
                  : openDropdownPopover()
              }}
               onMouseLeave = {() => {
                return closeDropdownPopover();
              }}
            >
              <div className="col-span-2 pt-8 pb-28  grid grid-cols-4">
                <div style={{marginLeft: '7px'}}><h1 className="heading-lg text-black font-bold">Skin Type</h1>
                  <div className="heading-sm-lite mt-6 cursor-pointer">All Skin Types</div>
                  <div className="heading-sm-lite mt-6 cursor-pointer">Combination Skin</div>
                  <div className="heading-sm-lite mt-6 cursor-pointer">Dry Skin</div>
                  <div className="heading-sm-lite mt-6 cursor-pointer">Oily Skin</div>
                  <div className="heading-sm-lite mt-6 cursor-pointer">Normal Skin</div>
                  <div className="heading-sm-lite mt-6 cursor-pointer">Sensitive Skin</div>
                </div>
                
                <div><h1 className="heading-lg text-black font-bold">Skin Goals</h1>
                  <div className="heading-sm-lite mt-6 cursor-pointer">Acne & Blemishes</div>
                  <div className="heading-sm-lite mt-6 cursor-pointer">Brightening & Glow</div>
                  <div className="heading-sm-lite mt-6 cursor-pointer">Acne and Scars</div>
                  <div className="heading-sm-lite mt-6 cursor-pointer">Hair Strength</div>
                  <div className="heading-sm-lite mt-6 cursor-pointer">Anti Aging</div>
                  <div className="heading-sm-lite mt-6 cursor-pointer">Skin Glow</div>
                </div>
                
                <div><h1 className="heading-lg text-black font-bold">Product Type</h1>
                  <div className="heading-sm-lite mt-6 cursor-pointer">Face Mist</div>
                  <div className="heading-sm-lite mt-6 cursor-pointer">Face Wash</div>
                  <div className="heading-sm-lite mt-6 cursor-pointer">Face Serum</div>
    
                </div>
                <img
                      src="https://media.allure.com/photos/5e9f44d3286b260008a65be5/16:9/w_2560%2Cc_limit/reporter-wild-beauty-social.jpg"
                      alt="products"
                      style={{width: "300px", height: "300px"}}
                    />
              </div>
         

            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default function DropdownRender({ text }) {
  return (
    <>
      <Dropdown headliner={text} color="white" />
    </>
  );
}
