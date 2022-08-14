import React from "react";
//style
import "./Intro.css";
//images
import Myfoto from "../../images/foto1.png"
function Intro() {
  return (
    <div className="intro-container">
      <div className="intro-left-wrapper">
        <div className="intro-left">
          <h2 className="intro-title">Hi, I am </h2>
          <h1 className="intro-name">Sangeetha Gujuluva</h1>
          <div className="my-title">
            <div className="my-title-wrapper">
              <div className="my-title-item">Web Developer</div>
              <div className="my-title-item">Passionate Cook</div>
              <div className="my-title-item">Gardener</div>
              <div className="my-title-item">Event Organiser</div>
            </div>
          </div>
          <div className="my-desc">
            I am new bee in developing websites and have been loving every
            minute of it. I am student in Digital Carrier Institute, Germany
            currently doing REACT and Node JS{" "}
          </div>
        </div>
      </div>
      <div className="intro-right">
       <div className="i-bg"></div>
        <img src={Myfoto} alt="" />
      </div>
    </div>
  );
}

export default Intro;
