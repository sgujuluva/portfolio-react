import React from "react";
//style
import "./Intro.css";
//images
import Myfoto from "../../images/foto1.png";
import RightArrow from "../../images/rightarrow.png";
//link
import { Link } from "react-router-dom";
function Intro() {
  return (
    <>
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
            I am a enthusiastic MERN Stack web developer, who is about to graduate a one year Intensive Web Dev Training. I am seeking to obtain a creative and challenging position that utilizes current knowledge of web development and design. Having a positive outlook and am always willing to learn new traits. I work well both independently and as part of a team.
            </p>
            <Link to="/about">
              <img src={RightArrow} alt="right arrow" className="right-arrow" />
            </Link>
          </div>
        </div>
        <div className="intro-right">
          {/* <div className="i-bg"><img src={Myfoto} alt="my foto" /></div> */}
        </div>
      </div>
    </>
  );
}

export default Intro;
