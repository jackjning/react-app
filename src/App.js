import "./App.css";
import Home from "./Home"
import About from "./About";
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom'

const App = (props) => {
    console.log("hello world");
    return (
      <Router>
      <div>
          <Switch>
            <Route exact path="/">
              <Home>
              </Home>
            </Route>
            <Route path="/About">
              <About />
            </Route>
          </Switch>
      </div>
      </Router>
  );
}

export default App;
