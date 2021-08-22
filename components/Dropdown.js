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
                "text-black font-bold lowercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150 " +
                bgColor
              }
              type="button"
              ref={btnDropdownRef}
              onClick={() => {
                dropdownPopoverShow
                  ? closeDropdownPopover()
                  : openDropdownPopover();
              }}
            >
              {headliner}
            </button>

            {/* <Items dropdownPopoverShow={dropdownPopoverShow} popoverDropdownRef={popoverDropdownRef} color={color}/> */}

            <div
              ref={popoverDropdownRef}
              className={
                (dropdownPopoverShow ? "block " : "hidden ") +
                (color === "white" ? "bg-white " : bgColor + " ") +
                "bg-red-200 hover:bg-red-300  text-base z-50 float-left py-2 list-none text-left rounded shadow-lg mt-1"
              }
              style={{ minWidth: "12rem" }}
            >
              <div className="flex justify-between flex-grow">
                <Items color={color} />

                <div>
                  <Items2 color={color} />
                </div>

                <div>
                  <p className="text-l font-sans font-bold max-w-prose">
                    Natural Skincare Products
                    <img
                      src="https://media.allure.com/photos/5e9f44d3286b260008a65be5/16:9/w_2560%2Cc_limit/reporter-wild-beauty-social.jpg"
                      alt="products"
               
                    />
                  </p>
                </div>
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
