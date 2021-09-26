import React from 'react'
import { Link } from "react-router-dom"
import "./NavBar.css"
import WipLogo from "../../Images/wip-logo.png"
import Countdown from "../../Components/Countdown/Countdown"
import { NavData } from "../../Data/NavData"



export default function Nav() {
  return (
    <div>
    <div className="navbar-wrapper">
      <div className="wip-container">
        <Link to="/">
          <img className="wip-logo-nav"
            src={WipLogo}
            alt="Wicked In Pink Logo" />
        </Link>
        </div>
        
        <div>
          <Countdown />
        </div>

      <div className="navbar-data-container">
        {NavData.map((item, index) => {
          return (
          <li key={index} className={item.className}>
            <Link className="link" to={item.path}>
              <span>{item.title}</span>
            </Link>
          </li>
        )
        })}
      </div>
    </div>
    </div>
  )
}
