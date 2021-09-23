import React, { useState, useEffect, useRef} from 'react'
import "./Home.css"
import { HeroImages } from "../../Data/HeroImages";
import WipLogo from "../../Images/wip-logo.png"


const delay = 4500;

export default function Home() {

  const [index, setIndex] = useState(0);
  const timeoutRef = useRef(null);

  function resetTimeout() {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
  }

  useEffect(() => {
    resetTimeout();
    timeoutRef.current = setTimeout(
      () =>
        setIndex((prevIndex) =>
          prevIndex === HeroImages.length - 1 ? 0 : prevIndex + 1
        ),
      delay
    );

    return () => {
      resetTimeout();
    };
  }, [index]);
  
  return (
  <div className="home-wrapper">

<div className="slideshow">
      <div
        className="slideshowSlider"
        style={{ transform: `translate3d(${-index * 100}%, 0, 0)` }}
      >
        {HeroImages.map((item, backgroundColor, index) => (
          <img
            className="slide"
            src={item.image}
            key={index}
            style={{ backgroundColor }}
          ></img>
        ))}
      </div>

      <div className="slideshowDots">
        {HeroImages.map((_, idx) => (
          <div
            key={idx}
            className={`slideshowDot${index === idx ? " active" : ""}`}
            onClick={() => {
              setIndex(idx);
            }}
          ></div>
        ))}
      </div>
    </div>

    {/* <div className="hero">
        <h1 className="text-hero">
          Helping To Support All In The Fight Against Cancer!
        </h1>
      </div> */}
    </div>
  )
}
