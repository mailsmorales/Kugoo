import React, { useState } from "react";
import "./index.css";

export const Navbar = () => {
  const [open, setOpen] = useState(false);
  return (
    <div className="mt-10 flex items-center">
      <div className="flex gap-8">
        <h1 className="font-bold text-3xl">KUGOO</h1>
        <div className="flex justify-center items-center bg-purple px-4 py-2 gap-3 border-2 border-purple hover:border-purple-200 rounded-md hover:bg-purple-200 cursor-pointer">
          <svg
            width="13"
            height="12"
            viewBox="0 0 13 12"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <line
              x1="0.65"
              y1="1.35"
              x2="12.35"
              y2="1.35"
              stroke="white"
              strokeWidth="1.3"
              strokeLinecap="round"
            />
            <line
              x1="0.65"
              y1="6.35"
              x2="12.35"
              y2="6.35"
              stroke="white"
              strokeWidth="1.3"
              strokeLinecap="round"
            />
            <line
              x1="6.65"
              y1="11.35"
              x2="12.35"
              y2="11.35"
              stroke="white"
              strokeWidth="1.3"
              strokeLinecap="round"
            />
          </svg>
          <button className="font-medium text-white">Каталог</button>
        </div>
      </div>
      <div className="flex ml-5 rounded-md border-purple border-2  gap-5 items-center justify-between max-w-xl w-full">
        <div className="flex items-center">
        <button className="flex justify-center items-center gap-1 bg-bg rounded-md py-1 px-3 m-1">
          Везде
          <svg
            width="6"
            height="6"
            viewBox="0 0 6 6"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M3.83467 4.73501C3.43943 5.33402 2.56057 5.33402 2.16532 4.73501L0.559123 2.30074C0.120431 1.63589 0.597252 0.75 1.3938 0.75L4.6062 0.75C5.40275 0.75 5.87957 1.63589 5.44088 2.30074L3.83467 4.73501Z"
              fill="#282739"
            />
          </svg>
        </button>
        <input
          type="text"
          placeholder="Искать самокат KUGO"
          className=" outline-none text-gray-600 w-52"
        />
        </div>
        <div className=" bg-purple border-2 border-purple rounded-tr-sm rounded-br-sm w-10 h-10 flex items-center justify-center">
          <svg
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g clipPath="url(#clip0_217_18812)">
              <path
                d="M15.9519 14.8499L10.758 9.65596C11.564 8.61396 11.9999 7.33997 11.9999 5.99997C11.9999 4.39598 11.374 2.89199 10.242 1.75799C9.10996 0.623997 7.60197 0 5.99997 0C4.39798 0 2.88999 0.625997 1.75799 1.75799C0.623997 2.88999 0 4.39598 0 5.99997C0 7.60197 0.625997 9.10996 1.75799 10.242C2.88999 11.376 4.39598 11.9999 5.99997 11.9999C7.33997 11.9999 8.61196 11.564 9.65396 10.76L14.8479 15.9519C14.8632 15.9672 14.8812 15.9793 14.9012 15.9875C14.9211 15.9958 14.9424 16 14.9639 16C14.9855 16 15.0068 15.9958 15.0267 15.9875C15.0466 15.9793 15.0647 15.9672 15.0799 15.9519L15.9519 15.0819C15.9672 15.0667 15.9793 15.0486 15.9875 15.0287C15.9958 15.0088 16 14.9875 16 14.9659C16 14.9444 15.9958 14.9231 15.9875 14.9032C15.9793 14.8833 15.9672 14.8652 15.9519 14.8499ZM9.16796 9.16796C8.31996 10.014 7.19597 10.48 5.99997 10.48C4.80398 10.48 3.67998 10.014 2.83199 9.16796C1.98599 8.31996 1.51999 7.19597 1.51999 5.99997C1.51999 4.80398 1.98599 3.67798 2.83199 2.83199C3.67998 1.98599 4.80398 1.51999 5.99997 1.51999C7.19597 1.51999 8.32196 1.98399 9.16796 2.83199C10.014 3.67998 10.48 4.80398 10.48 5.99997C10.48 7.19597 10.014 8.32196 9.16796 9.16796Z"
                fill="white"
              />
            </g>
            <defs>
              <clipPath id="clip0_217_18812">
                <rect width="16" height="16" fill="white" />
              </clipPath>
            </defs>
          </svg>
        </div>
      </div>
      
      <div className=" ml-12">awdwa</div>
    </div>
  );
};
