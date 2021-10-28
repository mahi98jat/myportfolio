import Navbar from "./components/navbar/Navbar";
import { Route, Switch } from "react-router-dom";
import About from "./components/about/About";
import Contact from "./components/contact/Contact";
import Projects from "./components/project/Projects";

import Skills from "./components/Skills";
function App() {
  return (
    <>
     
      
      <div className="App">
      <Navbar />
        <Switch>
          <Route path="/" exact>
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
