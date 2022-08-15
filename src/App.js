//components
import Intro from "./components/intro/Intro";
import About from "./components/About/About";
import ProjectList from "./components/ProjectList/ProjectList"
//styles
import './App.css';

function App() {
  return (
    <div className="App">
  <Intro/>
  <About/>
  <ProjectList/>
    </div>
  );
}

export default App;
