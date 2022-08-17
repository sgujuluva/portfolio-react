import React from "react";
import { Link } from "react-router-dom";
//styles
import "./About.css";
//image
import Collage from "../../images/collage.png";
import RightArrow from "../../images/rightarrow.png";
import LeftArrow from "../../images/leftarrow.png";

function About() {
  return (
    <div className="about-container">
      <div className="about-left">
        <img src={Collage} alt="collage" />
      </div>
      <div className="about-right">
        <h1>About Me</h1>
        <p className="desc">
          My name is Sangeetha, located in Köln Germany. I have been graduated
          in 2004, India with bachelor's degree in Electronics and Communication
          Engineering. <br />
          After encountering in various fields as a Teacher,Sales Manager,
          currently in my dream field Web Developing creating Websites. <br />
          I am intrested in learning, experimenting new things. <br />
          Team player, Easygoing, Easily adjustable to new environment.
        </p>
      </div>
      <div className="arrow">
        <Link to="/">
          
          <img src={LeftArrow} alt="left arrow" className="left-arrow" />
        </Link>
        <Link to="/Project">
         
          <img src={RightArrow} alt="right arrow" className="right-arrow" />
        </Link>
      </div>
    </div>
  );
}

export default About;
