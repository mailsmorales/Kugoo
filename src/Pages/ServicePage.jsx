import React, { useEffect } from 'react'
import { DiagnosticsCenter } from '../components/DiagnosticsCenter/DiagnosticsCenter'
import womanDrill from "../assets/image/woman-electric-drill.png"
import Icons from "../assets/image/icons";
export const ServicePage = () => {
  return (
    <>
      <div className='flex justify-center mt-8'>
        <div className='h-[420px] w-[1380px] bg-gradient-to-r to-[#FFC960] from-[#F3A712] rounded-[10px] flex justify-between'>
          <div className=' w-[780px] ml-[135px]'>
            <div className="mt-[60px]">
              <h2 className='font-semibold leading-[51px] text-[35px] w-[504px] h-[102px] text-white not-italic uppercase'>Ремонт и обслуживание товаров Kugoo Kirin</h2>
              <p className='font-normal leading-[29px] text-xl text-white not-italic'>в фирменных сервисых центрах</p>
            </div>
            <div className="flex mt-[30px]">
              <div className="flex items-center w-[268px] h-10">
                <div className='flex items-center justify-center rounded bg-[#ffffff33] w-10 h-10'>
                  <Icons.Location className="w-4 h-4" />
                </div>
                <p className="not-italic font-medium text-sm leading-[18px] ml-4 w-[213px] h-9 text-white">Сервисные центры в Москве, Санкт-Петербурге и Краснодаре</p>
              </div>
              <div className="flex items-center w-[167px] h-10 ml-9">
                <div className='flex items-center justify-center rounded bg-[#ffffff33] w-10 h-10'>
                  <Icons.Guarantee className="w-4 h-4" />
                </div>
                <p className="not-italic font-medium text-sm leading-[18px] ml-4 w-[112px] h-9 text-white">Гарантия 14 дней на ремонт</p>
              </div>
              <div className="flex items-center w-[265px] h-10 ml-9">
                <div className='flex items-center justify-center rounded bg-[#ffffff33] w-10 h-10'>
                  <Icons.Gear className="w-4 h-4" />
                </div>
                <p className="not-italic font-medium text-sm leading-[18px] ml-4 w-[213px] h-9 text-white">Всегда в наличии оригинальные запчасти от производителя</p>
              </div>
            </div>
            <div className="mt-11">
              <button className='w-40 h-[53px] bg-white rounded text-orange'>Записаться</button>
            </div>
          </div>
          <div className='mr-[110px]'>
            <img className='h-[420px] object-cover ' src={womanDrill} alt="" />
          </div>
        </div>
      </div>
      <DiagnosticsCenter />
    </>
  )
}
