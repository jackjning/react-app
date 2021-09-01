import "./App.css";
import Home from "./Home";
import About from "./About";
import Resume from "./Resume";
import Projects from "./Projects";
import Nav from "./Navigate";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Drawer from "@material-ui/core/Drawer";
import { makeStyles } from "@material-ui/core/styles";

const drawerWidth = 150;

const useStyles = makeStyles({
  drawer: {
    width: drawerWidth,
  },
  drawerPaper: {
    width: drawerWidth,
    background: "white"
  },
  root: {
    display: "flex",
    marginLeft: "50px",
    marginRight: "50px",
  },
});

const App = () => {
  console.log("hello world");

  const classes = useStyles();
  return (
    <Router>
      <div className={classes.root}>
        <Drawer
          className={classes.drawer}
          variant="permanent"
          anchor="left"
          classes={{ paper: classes.drawerPaper }}
        >
          <div>
            <Nav />
          </div>
        </Drawer>
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
      </div>
    </Router>
  );
};

export default App;
