import React from 'react'
import { RepairServices } from './components/RepairServices'
import batteryCharge from "../../assets/image/battery-charge.png"
import Icons from '../../assets/image/icons'

const repairServicesLeft = [
  {
    id: 1,
    mrTop: "0",
    width: "278px",
    height: "101px",
    text: "right",
    title: "Ремонт от 1 дня",
    desc: "Устраним любую неисправность. Обычно делаем это за 1-3 дня, если ремонт сложный — предупредим заранее."
  },
  {
    id: 2,
    mrTop: "40px",
    width: "278px",
    height: "110px",
    text: "right",
    title: "Ремонтируем только то, что сломалось",
    desc: "Не навязываем услуги, диагностируем и заранее обговариваем стоимость ремонта."
  },
  {
    id: 3,
    mrTop: "40px",
    width: "297px",
    height: "101px",
    text: "right",
    title: "Оригинальные запчасти",
    desc: "Благодаря прямой связи с производителем имеем в наличии все необходимые новые комплектующие для ремонта."
  }
]

const repairServicesRight = [
  {
    id: 1,
    mrTop: "0",
    width: "117px",
    height: "61px",
    text: "left",
    title: "гарантия",
    desc: "14 дней на ремонт"
  },
  {
    id: 2,
    mrTop: "80px",
    width: "223px",
    height: "55px",
    text: "left",
    title: "бесплатный ремонт",
    desc: "в течение 1 года после покупки"
  },
  {
    id: 3,
    mrTop: "95px",
    width: "297px",
    height: "61px",
    text: "left",
    title: "расширенная гарантия",
    desc: "до 36 месяцев"
  }
]

export const DiagnosticsCenter = () => {
  return (
    <div className='flex justify-center items-center flex-col mt-[100px]'>
      <h2 className='not-italic font-semibold text-4xl leading-[51px] uppercase text-black w-[825px] h-[102px] text-center'>Проведем диагностику и отремонтируем любую неисправность</h2>
      <div className="w-[1121px] h-[442px] flex mt-16">
        <div className='w-[297px] h-[392px]'>
          {repairServicesLeft.map(service => (
            <RepairServices key={service.id + Math.random()} text={service.text} mrTop={service.mrTop} width={service.width} height={service.height} title={service.title} desc={service.desc} />
          ))}
        </div>

        <div className='ml-10 mr-11 w-[442px]' >
          <img src={batteryCharge} className="rounded-[50%] text-center m-auto" />
          <Icons.PlayButton className="relative bottom-[247px] left-[170px]" />
        </div>

        <div className='w-[297px] h-[352px]'>
          {repairServicesRight.map(service => (
            <RepairServices key={service.id + Math.random()} text={service.text} mrTop={service.mrTop} width={service.width} height={service.height} title={service.title} desc={service.desc} />
          ))}
        </div>
      </div>
    </div>
  )
}
