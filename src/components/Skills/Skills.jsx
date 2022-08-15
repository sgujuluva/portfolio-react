import React from 'react';
import {Link} from "react-router-dom";
//styles
import "./Skills.css";
//image
import RightArrow from "../../images/rightarrow.png";
import LeftArrow from "../../images/leftarrow.png";
import Html from "../../images/html.png";
import Css from "../../images/css.png";
import Javascript from "../../images/js.png";
import ReactImg from "../../images/react.png";
import Bootstrap from "../../images/bootstrap.png";
import GitHub from "../../images/github.png";
import MaterialUi from "../../images/material.png";

function Skills() {
  return (
    <div className="skills-container">
      <h1 className="skills-heading">My Techinal Skills</h1>
      <p className="skills-desc">These are my Tools Stack currently working on :</p>
      <div className="skills-icons">
        <img src={Html} alt="html" />
        <img src={Css}alt="css" />
        <img src={Javascript} alt="javascript" />
        <img src={ReactImg } alt="react" />
        <img src={ Bootstrap} alt="bootstrap" />
        <img src={GitHub} alt="github" />
        <img src={MaterialUi} alt="material ui" />
      </div>
      <div className="arrow">
       <Link to="/projects"> <img src={LeftArrow} alt="left arrow" className="left-arrow" /></Link>
       <Link to="/contact"> <img src={RightArrow} alt="right arrow" className="right-arrow" /></Link>
       </div>
      </div>
  )
}

export default Skills