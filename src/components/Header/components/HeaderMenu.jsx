import React from "react";
import { Link } from "react-router-dom";
import Icons from "../../../assets/image/icons";

export const HeaderMenu = () => {
  // const menuArr = ['О магазине', 'Доставка и оплата', 'Тест-драйв','Блог','Контакты','Акции'];
  // const menuList = menuArr.map((item,index) => <Link className="items-center mr-12" key={index}>{item}</Link>)
  return (
    <div className="mt-9 bg-bg py-2">
      <div className="custom-container">
        <div className="flex items-center font-medium text-sm gap-12">
          <Link>О магазине</Link>
          <div>
            <Link>Доставка и оплата</Link>
            <Link className="bg-purple rounded-full px-2 font-normal text-white text-xs ml-2 hover:bg-purple-200 ease-in duration-300">
              Доступна рассрочка
            </Link>
          </div>
          <Link>Тест-драйв</Link>
          <Link>Блог</Link>
          <Link>Контакты</Link>
          <div className="flex items-center">
            <Link>Акции</Link>
            <Icons.Percent className="ml-2 fill-purple hover:fill-purple-200 ease-in duration-300 cursor-pointer" />
          </div>
        </div>
      </div>
    </div>
  );
};
