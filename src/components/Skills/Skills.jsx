import React from 'react';
import {Link} from "react-router-dom";
//styles
import "./Skills.css";
//image
import RightArrow from "../../images/rightarrow.png";
import LeftArrow from "../../images/leftarrow.png";

function Skills() {
  return (
    <div>
      Skill
      <div className="arrow">
       <Link to="/projects"> <img src={LeftArrow} alt="left arrow" className="left-arrow" /></Link>
       <Link to="/contact"> <img src={RightArrow} alt="right arrow" className="right-arrow" /></Link>
       </div>
      </div>
  )
}

export default Skills