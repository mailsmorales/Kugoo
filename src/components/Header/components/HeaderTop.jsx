import React from "react";
import Icons from "../../../assets/image/icons";

export const HeaderTop = () => {
  return (
    <div className="flex justify-between">
      <div className="text-xs flex-row flex justify-center items-center gap-7 text-gray-600">
        <span className="cursor-pointer hover:text-black">Сервис</span>
        <span className="cursor-pointer hover:text-black">Сотрудничество</span>
        <span className="cursor-pointer hover:text-black">Заказать звонок</span>
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
