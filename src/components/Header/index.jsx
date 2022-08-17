import React from 'react'
import { Link } from 'react-router-dom'
import logo from "../../images/logo2.png";
function Header() {
  return (
    <div className="intro-navbar">
    <span><img src={logo} alt="logo" /></span>  
        <Link to="/">Intro</Link>
        <Link to="/about">About Me</Link>
        <Link to="/project">Projects</Link>
        <Link to="/skills">Skills</Link>
        <Link to="/contact">Contact</Link>
      </div>
  )
}

export default Header