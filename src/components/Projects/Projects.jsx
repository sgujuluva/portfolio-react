import React from "react";
//styles
import "./Projects.css";

function Projects({img,link}) {
  return (
    
      <div className="projects">
        <div className="browser">
          <div className="circle"></div>
          <div className="circle"></div>
          <div className="circle"></div>
        </div>

        <a href={link} target="_blank" rel="noreferrer">
          <img className="images" src={img} alt="pics" />
        </a>
      </div>
   
  );
}

export default Projects;
