import React from 'react'
import { Link } from 'react-router-dom'
import "./ContactButton.scss"
import SponsorIcon from "./sponsor-icon-3.jpeg"

export default function ContactButton() {
  return (
    <div id="container" className="button-wrapper">
      <Link className="arrow-link" to="/contact">
        <button className="learn-more">
          <span class="circle" aria-hidden="true">
            <img src={SponsorIcon} className="icon arrow" />
          </span>
            <span className="button-text">SPONSOR</span>
          </button>
      </Link>
    </div>
  )
}
