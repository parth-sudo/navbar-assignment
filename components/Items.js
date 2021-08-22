import React from "react";

export default function Items({ color }) {
  return (
    <div>
      <a
        href="#"
        className={
          "text-bold py-2 px-4 font-extrabold font-sans md:font-serif block w-full whitespace-nowrap bg-transparent " +
          (color === "white" ? " text-blueGray-700" : "text-white")
        }
      >
        Skin Type
      </a>

      <a
        href="#"
        className={
          "text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent " +
          (color === "white" ? " text-blueGray-700" : "text-white")
        }
      >
        All Skin Type
      </a>

      <a
        href="#"
        className={
          "text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent " +
          (color === "white" ? " text-blueGray-700" : "text-white")
        }
      >
        Combination Skin
      </a>

      <a
        href="#"
        className={
          "text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent " +
          (color === "white" ? " text-blueGray-700" : "text-white")
        }
      >
        Dry Skin
      </a>

      <a
        href="#"
        className={
          "text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent " +
          (color === "white" ? " text-blueGray-700" : "text-white")
        }
        onClick={(e) => e.preventDefault()}
      >
        Oily Skin
      </a>
      <a
        href="#"
        className={
          "text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent " +
          (color === "white" ? " text-blueGray-700" : "text-white")
        }
        onClick={(e) => e.preventDefault()}
      >
        Sensitive Skin
      </a>
    </div>
  );
}
