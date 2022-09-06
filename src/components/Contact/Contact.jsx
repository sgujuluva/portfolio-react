import React from "react";
import { Link } from "react-router-dom";
//styles
import "./Contact.css";
//images
import Phone from "../../images/phone.png";
import Email from "../../images/email.png";
import Address from "../../images/address.png";
import RightArrow from "../../images/rightarrow.png";
import LeftArrow from "../../images/leftarrow.png";
//hooks
import { useRef } from "react";
//emailjs
import emailjs from "@emailjs/browser";

function Contact() {
  const formReference = useRef();
  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_rqkdiwt",
        "template_cd2ccjh",
        formReference.current,
        "zY9xHmTXG5anMPmsi"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };
  return (
    <div className="contact">
      <div className="contact-title">
        <h1>Contact Me</h1>
      </div>
      <div className="contact-wrapper">
        <div className="contact-left">
        <h2> You can connect me @</h2>
          <div className="contact-info">
           
            <div className="contact-info-icon">
              <img src={Phone} alt="phone" />0 17634402690
            </div>
            <div className="contact-info-icon">
              <img src={Email} alt="email" />
              sanghee04@gmail.com
            </div>
            <div className="contact-info-icon">
              <img src={Address} alt="address" />
              Köln
            </div>
          </div>
        </div>
        <div className="contact-right">
          <div className="contact-user-text">
            Kindly Leave your details here:
          </div>
          <form ref={formReference} onSubmit={handleSubmit}>
            <input type="text" name="user_name" placeholder="Name" />
            <input type="text" name="user_subject" placeholder="Subject" />
            <input type="email" name="user_email" placeholder="Email" />
            <textarea rows="7" cols="20" name="comment">
              Enter your message here...
            </textarea>
            <button>Submit</button>
          </form>
        </div>
      </div>
      <div className="arrow">
        <Link to="/skills">
          <img src={LeftArrow} alt="left arrow" className="left-arrow" />
        </Link>
        <Link to="/">
          <img src={RightArrow} alt="right arrow" className="right-arrow" />
        </Link>
      </div>
    </div>
  );
}

export default Contact;
