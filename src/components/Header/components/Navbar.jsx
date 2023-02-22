import React from "react";
import { Link } from "react-router-dom";
import Icons from "../../../assets/image/icons";

export const Navbar = () => {
  return (
    <div className="mt-10 flex items-center">
      <div className="flex gap-8 items-center">
        <Link className="font-bold text-3xl cursor-pointer">KUGOO</Link>
        <div className="flex justify-center items-center bg-purple px-4 py-2 gap-3 border-2 border-purple hover:border-purple-200 ease-in duration-300 rounded-md hover:bg-purple-200 cursor-pointer">
          <Icons.Line />
          <button className="font-medium text-white">Каталог</button>
        </div>
      </div>
      <div className="flex ml-5 rounded-md border-purple border-2  gap-5 items-center justify-between max-w-xl w-full">
        <div className="flex items-center">
          <button className="flex justify-center items-center gap-1 bg-bg rounded-md py-1 px-3 m-1">
            Везде
            <Icons.Polygon />
          </button>
          <input
            type="text"
            placeholder="Искать самокат KUGO"
            className=" outline-none text-gray-600 w-52"
          />
        </div>
        <div className="cursor-pointer bg-purple border-2 border-purple hover:border-purple-200 ease-in duration-300 hover:bg-purple-200 rounded-tr-sm rounded-br-sm w-10 h-10 flex items-center justify-center">
          <Icons.Search />
        </div>
      </div>
      <div className=" ml-12 flex items-center gap-6">
        <Link>
          <div className="px-2 py-2 rounded-full border-2 border-gray-200 hover:bg-bg hover:border-bg ease-in duration-300">
            <Icons.Balance className="hover:fill-purple" />
          </div>
        </Link>
        <Link>
          <div className="px-2 py-2 rounded-full border-2 border-gray-200 hover:bg-bg hover:border-bg ease-in duration-300">
            <Icons.Like className="hover:fill-purple" />
          </div>
        </Link>
        <Link>
          <div className="flex items-center gap-2 font-medium px-2 py-1 rounded-full border-2 border-gray-200 hover:bg-bg hover:border-bg ease-in duration-300">
            <Icons.Shopp className="fill-purple" />
            Корзина
          </div>
        </Link>
      </div>
    </div>
  );
};
