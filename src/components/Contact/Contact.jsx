import React from 'react'
//styles
import "./Contact.css"
//images
import Phone from "../../images/phone.png";
import Email from "../../images/email.png";
import Address from "../../images/address.png";

function Contact() {
  return (
    <div className = "contact">
        <div className="contact-title">
            <h1>Contact Me</h1>
        </div>
<div className="contact-wrapper">
    <div className="contact-left">
        <div className="contact-info">
            <div className="contact-info-icon">
                <img src={Phone} alt="phone" />0 17634402690
            </div>
            <div className="contact-info-icon">
                <img src={Email} alt="email" />sanghee04@gmail.com
            </div>
            <div className="contact-info-icon">
                <img src={Address} alt="address" />Köln
            </div>
        </div>
    </div>
    <div className="contact-right"></div>
</div>
    </div>
  )
}

export default Contact