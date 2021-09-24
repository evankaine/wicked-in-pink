import React from 'react'
import "./Media.css"
import { Photos } from '../../Data/Photos'
import { PhotosRow2 } from '../../Data/Photos'

export default function Media() {
  return (
    <div className="photo-wrapper">
      <h1 className="media-header">MEDIA</h1>
      <div className="year-container">
      {Photos.map((item, index) => {
        return (
          <div key={index} className="years">
            <a href={item.link} target="_blank">
              <h1 className={item.className}>
                {item.year}
              </h1>
            </a>
          </div>
        )
      })}
      </div>
      <div className="year-container">
      {PhotosRow2.map((item, index) => {
        return (
          <div key={index} className="yearsrow2">
            <a href={item.link} target="_blank">
              <h1 className={item.className}>
                {item.year}
              </h1>
            </a>
          </div>
        )
        })}
        </div>
    </div>
  )
}
