import React from "react";
//styles
import "./Project.css";

function Project({ img, link, title }) {
  return (
    <div className="projects">
      <a href={link} target="_blank" rel="noreferrer">
        <img src={img} alt="pics" className="images" />
      </a>
     <p> {title}</p> 
    </div>
  );
}

export default Project;
