import React from 'react'
import "./Sponsors.css"
import { SponsorLeft } from '../../Data/SponsorLeft'

export default function SponsorsLeft() {
  return (
    <div>
      
      <div className="sponsor-left">
        {SponsorLeft.map((item, index) => {
          return (
          <img key={index} className={item.className} src={item.leftimage} />
        )
        })}
      </div>
      
    </div>
  )
}
