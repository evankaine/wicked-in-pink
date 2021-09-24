import React from 'react'
import { Link } from 'react-router-dom'
import "./ContactButton.css"

export default function ContactButton() {
  return (
    <div className="button-wrapper">
      <Link className="arrow-link" to="/contact">
        <button className="arrow">Become a Sponsor...</button>
      </Link>
    </div>
  )
}
