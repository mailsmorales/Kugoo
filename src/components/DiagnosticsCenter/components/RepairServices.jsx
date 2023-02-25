import React from 'react'

export const RepairServices = ({title, desc, width, height, mrTop, text}) => {
  return (
    <div style={{width: `${width}`, height: `${height}`, marginTop: `${mrTop}`}} className={`${text === "right" ? "ml" : "mr"}-auto`}>
        <h2 className={`not-italic font-bold text-xl uppercase text-black text-${text}`}>{title}</h2>
        <p className={`mt-3 not-italic font-normal text-sm text-black text-${text}`}>{desc}</p>
    </div>
  )
}
