import React from "react";
//styles
import "./ProjectList.css";
//components
import Project from "../Project/Project";
//data import
import { projects } from "../../data";

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
        {projects.map(item =>(<Project key={item.id} img={item.img} link={item.link} />))}
      </div>
    </div>
  );
}

export default ProjectList;
