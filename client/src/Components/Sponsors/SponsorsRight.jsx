import React from 'react'
import "./Sponsors.css"
import { SponsorRight } from '../../Data/SponsorRight'

export default function SponsorsRight() {
  return (
    <div>

      <div className="sponsor-right">
        {SponsorRight.map((item, index) => {
          return (
            <a href={item.link} target="_blank">
              <img key={index} className={item.className} src={item.rightimage} />
            </a>
        )
        })}
      </div>
      
    </div>
  )
}
