import React from 'react'
//styles
import "./About.css";
//image
import Collage from "../../images/collage.png"

function About() {
  return (
    <div className="about-container">
       <div className="about-left">
        <img src={Collage} alt="collage photo" />
       
       </div>
       <div className="about-right">
       <p className="desc">
        My name is Sangeetha, located in Köln Germany. I have been graduated in 2004, India with bachelor's degree in Electronics and Communication Engineering. <br/>
       After encountering in various fields as a Teacher,Sales Manager, currently in my dream field Web Developing creating Websites. <br/>
            I am intrested in learning, experimenting new things. <br/>
            Team player, Easygoing, Easily adjustable to new environment.
            </p>
       </div>
        </div>
  )
}

export default About