import Home from "./Home";
import About from "./About";
import Resume from "./Resume";
import Projects from "./Projects";
import { Route, Switch } from "react-router-dom";

const Routes = () => {
  return (
    <Switch>
      <Route exact path="/">
        <Home />
      </Route>
      <Route path="/About">
        <About />
      </Route>
      <Route path="/Resume">
        <Resume />
      </Route>
      <Route path="/Projects">
        <Projects />
      </Route>
    </Switch>
  );
};

export default Routes;
