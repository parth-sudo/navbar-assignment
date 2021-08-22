import React from 'react';

export default function Items({color}) {
    return (
      <div> 
            <a
                href="#"
                className={
                  "text-sm font-extrabold font-sans md:font-serif py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent " +
                  (color === "white" ? " text-blueGray-700" : "text-white")
                }
                onClick={(e) => e.preventDefault()}
              >
                Skin goals
              </a>

              <a
                href="#"
                className={
                  "text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent " +
                  (color === "white" ? " text-blueGray-700" : "text-white")
                }
              >
                 Acne & Blemish
              </a>

              <a
                href="#"
                className={
                  "text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent " +
                  (color === "white" ? " text-blueGray-700" : "text-white")
                }
              >
                 Oil Controls
              </a>

              <a
                href="#"
                className={
                  "text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent " +
                  (color === "white" ? " text-blueGray-700" : "text-white")
                }
              >
                 Pores
              </a>

              <a
                href="#"
                className={
                  "text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent " +
                  (color === "white" ? " text-blueGray-700" : "text-white")
                }
              >
                 Hydration
              </a>

              <a
                href="#"
                className={
                  "text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent " +
                  (color === "white" ? " text-blueGray-700" : "text-white")
                }
              >
                 Lines & Wrinkles
              </a>
              
              <a
                href="#"
                className={
                  "text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent " +
                  (color === "white" ? " text-blueGray-700" : "text-white")
                }
              >
                 Lifting & Firming
              </a>
     
    </div>
    )
}
