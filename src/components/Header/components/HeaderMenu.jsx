import React, { useState } from "react";
import { Link } from "react-router-dom";

export const HeaderMenu = () => {
  const [activeItem, setActiveItem] = useState(null);
  const menuArr = [
    {
      title: "О магазине",
      subTitle: "",
    },
    {
      title: "Доставка и оплата",
      subTitle: "Доступна рассрочка",
    },
    {
      title: "Тест-драйв",
      subTitle: "",
    },
    {
      title: "Блог",
      subTitle: "",
    },
    {
      title: "Контакты",
      subTitle: "",
    },
    {
      title: "Акции",
      subTitle: "%",
    },
  ];
  const menuList = menuArr.map((item, index) => (
    <Link
      // className={
      //   activeItem === index
      //     ? "px-2 py-px rounded-full border-2 border-gray flex items-center"
      //     : "items-center px-2"
      // }
      key={index}
      // onClick={() => setActiveItem(index)}
    >
      {item.title}
      {item.subTitle ? (
        <span className="bg-purple rounded-full px-1.5 py-0.5 font-normal text-white text-xs  hover:bg-purple-200 ease-in duration-300 ml-2">
          {item.subTitle}
        </span>
      ) : null}
    </Link>
  ));

  return (
    <div className="mt-9 bg-bg py-3 max-lg:hidden">
      <div className="custom-container">
        <div className="flex gap-12">
        {menuList}
        </div>
      </div>
    </div>
  );
};
