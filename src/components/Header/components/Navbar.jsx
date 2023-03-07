import React, { useRef, useState } from "react";
import { Link } from "react-router-dom";
import Icons from "../../../assets/image/icons";
import { Basket } from "./Basket";
import { CatalogItem } from "./CatalogItem";

export const Navbar = () => {
  const [showBasket, setShowBasket] = useState(false);
  const basketRef = useRef();
  document.addEventListener("click", (e) => {
    if (!e.composedPath().includes(basketRef.current)) {
      setShowBasket(false);
    }
  });
  return (
    <div className="mt-10 flex items-center">
      <div className="flex gap-8 items-center">
        <Link className="font-bold text-3xl cursor-pointer">KUGOO</Link>
        <CatalogItem />
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
      <div className="ml-12 flex items-center gap-6">
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
        <div ref={basketRef}>
          <div className="relative">
            <div
              onClick={() => setShowBasket(!showBasket)}
              className="flex items-center cursor-pointer gap-2 px-2 py-1 font-medium rounded-full border-2 border-gray-200 hover:bg-bg hover:border-bg ease-in duration-300"
            >
              <Icons.Shopp className="fill-purple" />
              Корзина
            </div>
            <div
              className={`absolute right-0 top-10 bg-bg shadow-xl rounded-md flex duration-500 ${
                showBasket
                  ? "translate-y-0 opacity-1 visible"
                  : "-translate-y-1 opacity-0 invisible"
              }`}
            >
              <Basket />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
