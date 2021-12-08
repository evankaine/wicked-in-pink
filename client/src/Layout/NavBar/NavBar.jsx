import React from 'react'
import { Link } from "react-router-dom"
import "./NavBar.css"
import WipLogo from "../../Images/wip-logo.png"
// import Countdown from "../../Components/Countdown/Countdown"
import { NavData } from "../../Data/NavData"



export default function Nav() {
  return (
    <div>
    <div className="navbar-wrapper">
      
{/*         
        <div>
          <Countdown />
        </div> */}


      <div className="navbar">
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
