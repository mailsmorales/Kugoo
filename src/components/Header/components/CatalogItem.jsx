import React, { useState } from "react";
import Icons from "../../../assets/image/icons";
import { catalogItems } from "./catalogItems";

export const CatalogItem = () => {
  const [showCatalog, setShowCatalog] = useState(false);
  const [selectedItem, setSelectedItem] = useState(0);
  return (
    <div className="relative">
      <div
        onClick={() => setShowCatalog(!showCatalog)}
        className="flex  justify-center items-center bg-purple px-4 py-2 gap-3 border-2 border-purple hover:border-purple-200 ease-in duration-300 rounded-md hover:bg-purple-200 cursor-pointer"
      >
        <Icons.Line />
        <button className="font-medium text-white">Каталог</button>
      </div>
      {(
        <div
          className={`absolute left-0 top-13 bg-white px-3 py-3 shadow-xl rounded-md flex duration-300 ${
            showCatalog
              ? " translate-y-0 opacity-1 visible"
              : " -translate-y-1/2 opacity-0 invisible"
          }`}
        >
          <div className="bg-bg rounded-md px-6 py-5 mr-10">
            <ul>
              {catalogItems.map(({ Icon, ...item }, index) => (
                <li
                  onClick={() => setSelectedItem(index)}
                  key={item.title}
                  className={`${
                    selectedItem === index ? " text-purple " : ""
                  }flex items-center cursor-pointer gap-2 mb-4 font-medium`}
                >
                  <div>
                    <Icon />
                  </div>
                  <span>{item.title}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="py-5 mr-14">
            <div>
              <h4 className=" font-medium mb-4">Особенности</h4>
              <ul>
                {catalogItems[selectedItem].subItems.map((item) => (
                  <li
                    key={item.titleType}
                    className="text-sm text-gray-600 mb-2 cursor-pointer"
                  >
                    {item.titleType}
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="py-5 mr-14">
            <h4 className="font-medium">Для кого</h4>
            <ul>
              {catalogItems[selectedItem].subItems[0].subItems.map((item) => (
                <li
                  key={item.title}
                  className="text-sm text-gray-600 mb-2 whitespace-nowrap cursor-pointer"
                >
                  {item.title}
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </div>
  );
};
