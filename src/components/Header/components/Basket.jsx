import React from "react";
import Icons from "../../../assets/image/icons";
import { ButtonKit } from "../../Ui/ButtonKit";

export const Basket = () => {
  const basketItem = [
    {
      Icon: Icons.ScooterItem,
      title: "Kugoo Kirin M4",
      sum: "29 900 ₽",
      quantity: "1 шт",
    },
    {
      Icon: Icons.ScooterItem,
      title: "awdwadawd",
      sum: "29 900 ₽",
      quantity: "1 шт",
    },
    {
      Icon: Icons.ScooterItem,
      title: "awdawdwada",
      sum: "29 900 ₽",
      quantity: "1 шт",
    },
  ];
 
  return (
    <div className="w-[305px]">
      <div className="flex items-center justify-between py-4 px-5">
        <h3 className="font-medium">В вашей корзине</h3>
        <span className="font-normal text-sm text-gray-600">2 товара</span>
      </div>
      <div className="bg-white py-4 w-full">
        <ul className="overflow-y-auto h-48 scrollbar-hide">
          {basketItem.map(({ Icon, ...item }) => (
            <li
              key={item.title}
              className=" px-5 py-4 first:pt-0 last:pb-0 border-b border-gray-200 last:border-b-0 last:mb-0"
            >
              <div className="flex items-center justify-between">
                <div className="flex">
                  <Icon className="cursor-pointer"  />
                  <div className="ml-4 cursor-pointer">
                    <h3 className="font-medium text-sm">{item.title}</h3>
                    <span className="font-normal text-xs">{item.sum}</span>
                    <span className="font-normal text-xs ml-3">
                      {item.quantity}
                    </span>
                  </div>
                </div>
                <div>
                  <Icons.Delete className="cursor-pointer hover:stroke-red" />
                </div>
              </div>
            </li>
          ))}
        </ul>
        <div className="flex items-center justify-between pt-4 px-5">
          <div>
            <span className="font-normal text-xs text-gray-600">Сумма: </span>
            <h2 className="font-medium text-lg">59 800 ₽</h2>
          </div>
           <ButtonKit name="Оформить заказ"/>
        </div>
      </div>
    </div>
  );
};
