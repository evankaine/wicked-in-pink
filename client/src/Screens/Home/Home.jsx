import React, { useState, useEffect, useRef } from 'react'

import "./Home.css"
import { HeroImages } from "../../Data/HeroImages";
import SponsorsLeft from '../../Components/Sponsors/SponsorsLeft';
import SponsorsRight from '../../Components/Sponsors/SponsorsRight';
import Article from '../../Components/Article/Article';
import ContactButton from '../../Components/ContactButton/ContactButton';
import PayPalButton from '../../Components/PayPalButton/PayPalButton';
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
    <div className="home">
      <div>
        <p className="tagline">Ride For The Ones You Love • Ride For The Ones You Lost</p>
      </div>
    <div className="home-wrapper">
      
    <div className="slideshow">
      <div
        className="slideshowSlider"
        style={{ transform: `translate3d(${-index * 100}%, 0, 0)` }}>
        {HeroImages.map((item, backgroundColor, index) => (
          <a className="slide-link" href="https://www.facebook.com/WickedInPink/events" target="_blank">
            <img
              className="slide"
              src={item.image}
              key={index}
              style={{ backgroundColor }}>
            </img>
          </a>
        ))}
    </div>
    <div className="slideshowDots">
      {HeroImages.map((_, idx) => (
        <div
          key={idx}
          className={`slideshowDot${index === idx ? " active" : ""}`}
          onClick={() => {
            setIndex(idx);
          }}>
        </div>
        ))}
      </div>
    </div>

      <div className="hero-grid">
        <h1 className="text-hero">
          WICKED IN <span className="pink-text">PINK</span> RUN
        </h1>
        <h2 className="slogan-hero">
          Helping To Support All In The Fight Against Cancer!
        </h2>
        <p className="legal-text">
          501 (c) 3 Non-Profit Charity Organization
        </p>
    </div>

      <div className="about-grid">
        <SponsorsLeft className="left-gird" />
        <Article className="middle-grid" />
        <SponsorsRight className="right-gird" />
      </div>
        
      <div className="button-div">
        <ContactButton />
        <PayPalButton />
      </div>
    </div>
  </div>
  )
}
