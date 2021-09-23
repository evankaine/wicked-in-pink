import React from 'react'
import "./Sponsors.css"
import { SponsorRight } from '../../Data/SponsorRight'

export default function SponsorsRight() {
  return (
    <div>

      <div className="sponsor-right">
        {SponsorRight.map((item, index) => {
          return (
          <img key={index} className={item.className} src={item.rightimage} />
        )
        })}
      </div>
      
    </div>
  )
}
