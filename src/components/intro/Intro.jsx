import React from "react";
//style
import "./Intro.css";
//images
import logo from "../../images/logo2.png";
import Myfoto from "../../images/foto1.png";
import RightArrow from "../../images/rightarrow.png"
//link
import {Link} from "react-router-dom";
function Intro() {
  return (
    <>
    <div className="intro-navbar">
      <img src={logo} alt="logo" />
        <Link to="/">Intro</Link>
        <Link to="/about">About Me</Link>
        <Link to="/project">Projects</Link>
        <Link to="/skills">Skills</Link>
        <Link to="/contact">Contact</Link>
      </div>
    <div className="intro-container">
      
      <div className="intro-left-wrapper">
        <div className="intro-left">
          <h2 className="intro-title">Hi, I am </h2>
          <h1 className="intro-name">Sangeetha Gujuluva</h1>
          <div className="my-title">
            <div className="my-title-wrapper">
              <div className="my-title-item">Web Developer</div>
              <div className="my-title-item">Event Organiser</div>
              <div className="my-title-item">Nature Lover</div>
              <div className="my-title-item">Passionate Cook</div>
            </div>
          </div>
          <p className="my-desc">
            I am new bee in developing websites and have been loving every
            minute of it. I am student in Digital Carrier Institute, Germany
            currently doing REACT and Node JS
          </p>
         <img src={RightArrow} alt="right arrow" className="right-arrow" />
        </div>
      </div>
      <div className="intro-right">
        <div className="i-bg">
          <img src={Myfoto} alt="my foto" />
        </div>
      </div>
    </div>
    </>
  );
}

export default Intro;
