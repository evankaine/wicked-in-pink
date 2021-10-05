import React from 'react'
import "./ContactForm.css"

export default function ContactForm() {
  return (
    <form className="contact-form" >
      <h1 className="contact-text">CONTACT US</h1>

    <div className="contact-row">
      <input
        placeholder="First Name"
        type="text"
        name="name"
        required />
      <input
        placeholder="Last Name"
        type="text"
        name="name"
        required />
    </div>
      
    <div className="contact-row">
      <input
        placeholder="Email"
        type="email"
        name="user_email"
        required />
      <input
        placeholder="Phone"
        type="tel"
        name="phone"
        pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}"
        required />
    </div>
      <input id="subject"
        placeholder="Subject"
        type="text"
        name="subject"
        required />
      <textarea
        placeholder="Message"
        name="message"
        rows="4"
        required />
      <input className="input-button"
        type="submit"
        value="Send">
      </input>
    </form>
  )
}
