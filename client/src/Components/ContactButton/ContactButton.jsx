import React from 'react'
import { Link } from 'react-router-dom'
import "./ContactButton.css"
import SponsorIcon from "./sponsor-icon-3.jpeg"

export default function ContactButton() {
  return (
    <div className="button-wrapper">
      <Link className="arrow-link" to="/contact">
      <button className="arrow">
            <img src={SponsorIcon} className="arrowlogo" />
            <span className="sponsor">SPONSOR</span>
          </button>
      </Link>
    </div>
  )
}
