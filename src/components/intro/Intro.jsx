import React from 'react'
//style
import "./Intro.css";

function Intro() {
  return (
    <div className="intro-container">
     <div className="intro-left">
        <h2 className="intro-title">Hi, I am </h2>
        <h1 className="intro-name">Sangeetha Gujuluva</h1>
        <div className="my-title">
            <div className="my-title-wrapper">
                <div className="my-title-item">Web Developer</div>
                <div className="my-title-item">
                    Passionate Cook
                </div>
                <div className="my-title-item">
                    Gardener
                </div>
                <div className="my-title-item">Event Organiser</div>
            </div>
        </div>
     </div>
     <div className="intro-right">right</div>
    </div>
  )
}

export default Intro