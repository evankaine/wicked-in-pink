import React from 'react'
import "./Media.css"
import { Photos } from '../../Data/Photos'

export default function Media() {
  return (
    <div className="photo">
      <div className="photo-wrapper">
        
        {/* <h1 className="media-header">MEDIA</h1> */}
        
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

      <div className="video-container">
        <iframe className="haymondvideo"
          width="550" height="315" 
          src="https://www.youtube.com/embed/l2q-UL5RNrE?rel=0&amp;autoplay=1&mute=1"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen>
        </iframe>
        <iframe className="wip2019"
          width="550" height="315"
          src="https://www.facebook.com/plugins/video.php?height=314&href=https%3A%2F%2Fwww.facebook.com%2FWickedInPink%2Fvideos%2F715366702659513%2F&show_text=false&width=550&t=0&amp;autoplay=1&mute=1"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen>
        </iframe>
      </div>

      <div>
        <img className="photo-ad" src="https://static.wixstatic.com/media/3b1f02_47c676207adb4bb1b052b061e32120cb.jpg/v1/fill/w_834,h_109,al_c,q_80,usm_0.66_1.00_0.01/3b1f02_47c676207adb4bb1b052b061e32120cb.webp" />
        </div>
      </div>
    </div>
  )
}
