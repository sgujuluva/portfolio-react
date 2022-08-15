import React from "react";
//styles
import "./Project.css";

function Project({ img, link }) {
  return (
    <div className="projects">
      

      <a href={link} target="_blank" rel="noreferrer">
        <img src={img} alt="pics" className="images" />
      </a>
    </div>
  );
}

export default Project;
