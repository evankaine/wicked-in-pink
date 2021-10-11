import React from 'react'
import "./Donate.css"
import PayPalButton from '../../Components/PayPalButton/PayPalButton'


export default function Donate() {
  return (
    <div className="donate">
      <div className="donate-wrapper">

        <div className="donate-content-container">
          <p className="donate-article">If you can't make our yearly motorcycle run but would still like to help, there's a donate button below. Just click on it and you can make a donation using Paypal, a credit card or a debit card. We thank you for your support.</p>
          <PayPalButton />
        </div>

      </div>
    </div>
  )
}
