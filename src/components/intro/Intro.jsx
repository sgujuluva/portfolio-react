import React from "react";
//style
import "./Intro.css";
//images
import Myfoto from "../../images/foto1.png";
//link
import {Link} from "react-router-dom";
function Intro() {
  return (
    <>
    <div className="intro-navbar">
        <Link to="/">Intro</Link>
        <Link to="/about">About Me</Link>
        <Link to="/projects">Projects</Link>
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
          <svg
            className="intro-rightarrow"
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            class="bi bi-caret-right-fill"
            viewBox="0 0 16 16"
          >
            {" "}
            <path d="m12.14 8.753-5.482 4.796c-.646.566-1.658.106-1.658-.753V3.204a1 1 0 0 1 1.659-.753l5.48 4.796a1 1 0 0 1 0 1.506z" />{" "}
          </svg>
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
