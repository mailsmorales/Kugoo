import clsx from "clsx";
import React, { useRef, useState } from "react";
import Icons from "../../../assets/image/icons";
import { catalogItems } from "./catalogItems";

export const CatalogItem = () => {
  const [showCatalog, setShowCatalog] = useState(false);
  const [selectedItem, setSelectedItem] = useState(0);
  const [selectedItems, setSelectedItems] = useState(0);

  const cotalogtRef = useRef();
  document.addEventListener("click", (e) => {
    if (!e.composedPath().includes(cotalogtRef.current)) {
      setShowCatalog(false);
    }
  });

  return (
    <div ref={cotalogtRef} className="relative max-lg:hidden">
      <div
        onClick={() => setShowCatalog(!showCatalog)}
        className="flex justify-center items-center bg-purple px-4 py-2 gap-3 border-2 border-purple hover:border-purple-200 ease-in duration-300 rounded-md hover:bg-purple-200 cursor-pointer"
      >
        <Icons.Line />
        <button className="font-medium text-white">Каталог</button>
      </div>
      <div
        className={`absolute left-0 top-13 bg-white px-3 py-3 shadow-xl rounded-md flex duration-500 ${
          showCatalog
            ? "translate-y-0 opacity-1 visible"
            : "-translate-y-1 opacity-0 invisible"
        }`}
      >
        <div className="bg-bg rounded-md px-6 py-5 mr-10">
          <ul>
            {catalogItems.map(({ Icon, ...item }, index) => (
              <li
                onClick={() => setSelectedItem(index)}
                key={item.title}
                className={clsx(
                  "flex items-center cursor-pointer gap-2 mb-4 font-medium hover:text-purple",
                  selectedItem === index ? "text-purple " : ""
                )}
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
            <h4 className="font-medium mb-4">Особенности</h4>
            <ul>
              {catalogItems[selectedItem].subItems.map((item, index) => (
                <li
                  onClick={() => setSelectedItems(index)}
                  key={item.titleType}
                  className={clsx(
                    "text-sm mb-2 cursor-pointer hover:text-purple",
                    selectedItems === index ? "text-purple" : "text-gray-600"
                  )}
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
            {catalogItems[selectedItem].subItems[selectedItems].subItems.map(
              (item) => (
                <li
                  key={item.title}
                  className="text-sm text-gray-600 mb-2 whitespace-nowrap cursor-pointer hover:text-purple"
                >
                  {item.title}
                </li>
              )
            )}
          </ul>
        </div>
      </div>
    </div>
  );
};
