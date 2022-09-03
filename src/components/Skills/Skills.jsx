import React from "react";
import { Link } from "react-router-dom";
import Progressbar from "./Progressbar";
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
import Git from "../../images/git.png";
import Mongodb from "../../images/mongo2.png";

function Skills() {
  return (
    <div className="skills-container">
      <h1 className="skills-heading">My Techinal Skills</h1>
      <p className="skills-desc">
        These are my Tools Stack currently working on :
      </p>
      <div className="skills-icons">
        <img src={Html} alt="html" />
        <img src={Css} alt="css" />
        <img src={Javascript} alt="javascript" />
        <img src={ReactImg} alt="react" />
        <img src={Bootstrap} alt="bootstrap" />
        <img src={GitHub} alt="github" />
        <img src={MaterialUi} alt="material ui" />
        <img src={Git} alt="git" />
        <img src={Mongodb} alt="Mongo" />
      </div>
      <div className="technical-progressbar">
        <h1>Technicall Skills Progress :</h1>
        <div className="html">
          <div className="progress-skill">
          <span>HTML</span>{" "}
          <Progressbar bgcolor="	orange" progress="95" height={20} />
          </div>
          <div className="progress-skill">
          <span>CSS</span>{" "}
          <Progressbar bgcolor="orange" progress="85" height={20} />
          </div>
          <div className="progress-skill">
        <span>Javascript</span>{" "}
        <Progressbar bgcolor="orange" progress="80" height={20} />
        </div>
        <div className="progress-skill">
        <span>REACT</span>{" "}
        <Progressbar bgcolor="orange" progress="90" height={20} />
        </div>
        <div className="progress-skill">
        <span>Node Js</span>{" "}
        <Progressbar bgcolor="orange" progress="80" height={20} />
        </div>
        <div className="progress-skill">
        <span>Express Js</span>{" "}
        <Progressbar bgcolor="orange" progress="80" height={20} />
        </div>
        </div>
      </div>
      <div className="arrow">
        <Link to="/projects">
          {" "}
          <img src={LeftArrow} alt="left arrow" className="left-arrow" />
        </Link>
        <Link to="/contact">
          {" "}
          <img src={RightArrow} alt="right arrow" className="right-arrow" />
        </Link>
      </div>
    </div>
  );
}

export default Skills;
