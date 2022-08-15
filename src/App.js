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
        <Routes>
        <Route path="/" element={<Intro />}/>
        <Route path="/about" element={<About />}/>
        <Route path="/project" element={<ProjectList />}/>
        <Route path="/skills" element={<Skills />}/> 
        <Route path="/contact" element={<Contact />}/> 
        </Routes>
      </div>
   
  );
}

export default App;
