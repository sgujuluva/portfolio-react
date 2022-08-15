import React from "react";
//styles
import "./Projects.css";
//images
import WeatherImage from "../../images/weather5.png"
function Projects() {
  return (
    <div className="project-header">
      <div className="project-text">
        <h1 >My Projects</h1>
        <p >
          Projects are done in HTML , CSS, DOM and REACT
        </p>
      </div>
      <div className="projects-list">
    <div className="card">
        <div className="browser">
            <div className="circle"></div>
            <div className="circle"></div>
            <div className="circle"></div>
        </div>
     <div className="project-images">
      <a href="https://github.com/sgujuluva/weather-app" target="_blank" rel="noreferrer">
        <img className="images" src={WeatherImage} alt="weather" />
      </a>
     </div>
    </div>
      </div>
    </div>
  );
}

export default Projects;
