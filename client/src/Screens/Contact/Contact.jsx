import React from 'react'
import "./Contact.css"
import ContactForm from '../../Components/ContactForm/ContactForm'

export default function Contact() {
  return (
    <div className="contact-wrapper">
      <div className="contact-container">
        <ContactForm />
      </div>
    </div>
  )
}
