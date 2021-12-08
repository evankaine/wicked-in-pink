import React from 'react'
import PayPalLogo from "./paypalcircle.png"
import Mastercard from "./MasterCard-light.png"
import Visa from "./Visa-card-light.png"
import AmericanExpress from "./AmericanExpress-light.png"
import Discover from "./Discover-card-light.png"

export default function PayPalButton() {
  return (
    <div id="container" className="button-wrapper">
        <a className="arrow-link" target="_blank" href="https://www.paypal.com/donate/?cmd=_s-xclick&hosted_button_id=EYMC3LJYD3LEL&source=url">
          <button className="learn-more">
            <span class="circle" aria-hidden="true">
              <img src={PayPalLogo} className="icon arrow" />
            </span>
              <span className="button-text">DONATE</span>
          </button>
        </a>
    {/* <div className="card-wrapper">
      <div className="card-container">
        <img src={Mastercard} className="cards"/>
      </div>
      <div className="card-container">
        <img src={Visa} className="cards"/>
      </div>
      <div className="card-container">
        <img src={AmericanExpress} className="cards"/>
      </div>
      <div className="card-container">
        <img src={Discover} className="cards"/>
      </div>
    </div> */}
    </div>
  )
}
