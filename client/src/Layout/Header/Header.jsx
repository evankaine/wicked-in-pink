import React from 'react'
import './Header.css'
import { Link } from 'react-router-dom'

import WipLogo from "../../Images/wip-logo.png"
import ContactButton from '../../Components/ContactButton/ContactButton';
import PayPalButton from '../../Components/PayPalButton/PayPalButton';

const Header = () => {
  return (
    <div className="header-wrapper"> 
      <div className="wip-container">
        <Link to="/">
          <img className="wip-logo-nav"
            src={WipLogo}
            alt="Wicked In Pink Logo" />
        </Link>
      </div>
      <div className="button-div">
        <ContactButton />
        <PayPalButton />
      </div>
  </div>
  )
}

export default Header
