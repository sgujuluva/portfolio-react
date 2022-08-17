import React from "react";
import { Link } from "react-router-dom";
//styles
import "./ProjectList.css";
//components
import Project from "../Project/Project";
//data import
import { projects } from "../../data";
//image
import RightArrow from "../../images/rightarrow.png";
import LeftArrow from "../../images/leftarrow.png";

function ProjectList() {
  return (
    <div className="project-header">
      <div className="project-text">
        <h1>My Projects</h1>
        <p>
          Here are my collection of Projects done with HTML, CSS, DOM and REACT
        </p>
      </div>
      <div className="projects-list">
        {projects.map((item) => (
          <Project
            key={item.id}
            img={item.img}
            link={item.link}
            title={item.title}
          />
        ))}
      </div>
      <div className="arrow">
        <Link to="/about">
          {" "}
          <img src={LeftArrow} alt="left arrow" className="left-arrow" />
        </Link>
        <Link to="/skills">
          {" "}
          <img src={RightArrow} alt="right arrow" className="right-arrow" />
        </Link>
      </div>
    </div>
  );
}

export default ProjectList;
