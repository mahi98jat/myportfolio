import Navbar from "./components/navbar/Navbar";
import { Route, Switch } from "react-router-dom";
import About from "./components/about/About";
import Contact from "./components/contact/Contact";
import Projects from "./components/project/Projects";
import Welcome from "./components/Welcome/Welcome";
import Skills from "./components/Skills";
function App() {
  return (
    <>
      <Navbar />
      <div className="App">
        <Switch>
          <Route exact path="/">
            <Welcome />
          </Route>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/project">
            <Projects />
          </Route>
          <Route path="/skills">
            <Skills />
          </Route>
          <Route path="/contact">
            <Contact />
          </Route>
         
        </Switch>
      </div>
    </>
  );
}

export default App;
