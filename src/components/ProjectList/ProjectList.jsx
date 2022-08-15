import React from "react";
//styles
import "./ProjectList.css";
//components
import Projects from "../Projects/Projects";
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
        {projects.map(item =>(<Projects key={item.id} img={item.img} link={item.link} />))}
      </div>
    </div>
  );
}

export default ProjectList;
