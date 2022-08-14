//components
import Intro from "./components/intro/Intro";
import About from "./components/About/About";
import Projects from "./components/Projects/Projects"
//styles
import './App.css';

function App() {
  return (
    <div className="App">
  <Intro/>
  <About/>
  <Projects/>
    </div>
  );
}

export default App;
