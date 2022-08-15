//router
import { Routes,Route } from "react-router-dom";
//components
import Intro from "./components/intro/Intro";
import About from "./components/About/About";
import ProjectList from "./components/ProjectList/ProjectList";
import Skills from "./components/Skills/Skills";
import Contact from "./components/Contact/Contact";
//styles
import "./App.css";

function App() {
  return (
 
      <div className="App">
        <Intro />
        <About />
        <ProjectList />
        <Skills />
        <Contact />
      </div>
   
  );
}

export default App;
