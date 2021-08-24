import React from "react";
import { createPopper } from "@popperjs/core";
import { column1, column2, column3 } from "./Items.js";

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
  let bgColor = "bg-blueGray-700";

  return (
    <>
      <div className="flex flex-wrap">
        <div className="w-full sm:w-6/12 md:w-4/12 px-4">
          <div className="relative inline-flex align-middle w-full">

            <button
              className={
                " text-black font-bold lowercase text-xl px-6 py-3 transition delay-150 duration-300 ease-in-out hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150 false link-lg cursor-pointer border-transparent border-b group-hover:border-black pb-2" +
                bgColor
              }
              type="button"
              ref={btnDropdownRef}
              onMouseEnter={() => {
                dropdownPopoverShow
                  ? closeDropdownPopover()
                  : openDropdownPopover();
              }}
              onClick={() =>{
                dropdownPopoverShow
                ? closeDropdownPopover()
                : openDropdownPopover();

              }}
            >
              {headliner}
            </button>

            <div
              ref={popoverDropdownRef}
              className={
                (dropdownPopoverShow ? "block " : "hidden ") +
                "bg-cream-light text-base z-50 float-left py-2 list-none text-left rounded shadow-lg mt-1 dropdown mega-menu text-black"
              }
              style={{
                minWidth: "95vw",
                transition: "0.3s",
                transform: "translate(-20px, 60px)",
              }}
              onMouseEnter={() => {
                !dropdownPopoverShow
                  ? closeDropdownPopover()
                  : openDropdownPopover();
              }}
              onMouseLeave={() => {
                return closeDropdownPopover();
              }}
            >
              <div className="col-span-2 pt-8 pb-28  grid grid-cols-4 flex justify-center animate-fade-in-down">
                <div style={{ marginLeft: "7px" }}>
                  <h1 className="heading-lg ml-6 text-black font-bold">
                    Skin Type
                  </h1>

                  {column1.map((item) => {
                    return (
                      <div className="heading-sm-lite mt-6 ml-6 cursor-pointer">
                        {item}
                      </div>
                    );
                  })}
                </div>

                <div>
                  <h1 className="heading-lg text-black font-bold">
                    Skin Goals
                  </h1>
                  {column2.map((item) => {
                    return (
                      <div className="heading-sm-lite mt-6 cursor-pointer">
                        {item}
                      </div>
                    );
                  })}
                </div>

                <div>
                  <h1 className="heading-lg text-black font-bold">
                    Product Type
                  </h1>
                  {column3.map((item) => {
                    return (
                      <div className="heading-sm-lite mt-6 cursor-pointer">
                        {item}
                      </div>
                    );
                  })}
                </div>
                <img
                  src="https://media.allure.com/photos/5e9f44d3286b260008a65be5/16:9/w_2560%2Cc_limit/reporter-wild-beauty-social.jpg"
                  alt="products"
                  style={{ width: "300px", height: "300px" }}
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
