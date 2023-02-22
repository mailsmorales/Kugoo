import React from "react";
import { Link } from "react-router-dom";
import Icons from "../../../assets/image/icons";

export const HeaderTop = () => {
  return (
    <div className="flex justify-between">
      <div className="text-xs flex-row flex justify-center items-center gap-7 text-gray-600">
        <Link className="hover:text-black">Сервис</Link>
        <Link className="hover:text-black">Сотрудничество</Link>
        <Link className="hover:text-black">Заказать звонок</Link>
        <div className="flex gap-2 cursor-pointer">
          <Icons.Viber/>
          <Icons.Whatsapp/>
          <Icons.Telegram/>
        </div>
      </div>
      <div>
        <div className="flex items-center justify-center gap-2 cursor-pointer">
          <span className="text-xs font-medium text-black">
            +7 (800) 505-54-61
          </span>
          <Icons.Plus className=" hover:fill-gray-200" />
        </div>
      </div>
    </div>
  );
};
