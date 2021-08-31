import "./App.css";
import Home from "./Home"
import About from "./About";
import Resume from "./Resume"
import Projects from "./Projects"
import Nav from "./Navigate"
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom'

const App = (props) => {
    console.log("hello world");
    return (
      <Router>
      <div>
          <Nav />
          <Switch>
            <Route exact path="/"><Home /></Route>
            <Route path="/About"><About /></Route>
            <Route path="/Resume"><Resume /></Route>
            <Route path="/Projects"><Projects /></Route>
          </Switch>
      </div>
      </Router>
  );
}

export default App;
