import React, { useState } from "react";
import { Link } from "react-router-dom";
import Icons from "../../../assets/image/icons";

export const HeaderTop = () => {
  const [showContact, setShowContact] = useState(false);
  const contact = [
    {
      title: "Сервисный центр",
      number: "+ 7 (499) 350 76 92",
    },
    {
      title: "Оптовый отдел",
      number: "+7 (499) 281-64-52",
      time: "пн-сб 10:00 - 19:00",
    },
    {
      title: "Отдел рекламаций и претензий",
      number: "+7 (499) 350-76-92",
      time: "ср-вс с 10:00 до 19:00",
    },
  ];

  return (
    <div className="flex justify-between">
      <div className="text-xs flex-row flex justify-center items-center gap-7 text-gray-600">
        <Link className="hover:text-black">Сервис</Link>
        <Link className="hover:text-black">Сотрудничество</Link>
        <Link className="hover:text-black">Заказать звонок</Link>
        <div className="flex gap-2 cursor-pointer">
          <Icons.Viber />
          <Icons.Whatsapp />
          <Icons.Telegram />
        </div>
      </div>
      <div>
        <div className="flex items-center justify-center gap-2 relative">
          <a
            className="text-xs font-medium text-black cursor-pointer"
            href="tel:+78005055461"
          >
            +7 (800) 505-54-61
          </a>
          <div onClick={() => setShowContact(!showContact)}>
            <Icons.Plus className=" hover:fill-gray-200 cursor-pointer" />
          </div>
          <div
            className={`absolute w-60 right-0 top-5 bg-bg py-4 shadow-xl rounded-md flex duration-500 ${
              showContact
                ? "translate-y-0 opacity-1 visible"
                : "-translate-y-1 opacity-0 invisible"
            }`}
          >
            <div className="w-full">
              <ul>
                {contact.map((item) => (
                  <li
                    key={item.title}
                    className="px-5 py-3 first:pt-0 last:pb-0 border-b border-gray-200 last:border-b-0 last:mb-0"
                  >
                    <span className="text-xs text-gray-600">{item.title}</span>
                    <h3 className="font-medium cursor-pointer">
                      {item.number}
                    </h3>
                    <span className="text-xs">{item.time}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
