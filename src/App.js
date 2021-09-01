import "./App.css";
import Nav from "./Navigate";
import Routes from "./Routes";
import { BrowserRouter as Router } from "react-router-dom";
import Drawer from "@material-ui/core/Drawer";

const App = () => {
  console.log("hello world");

  return (
    <Router>
      <div className="root">
        <Drawer
          className="drawer"
          variant="permanent"
          anchor="left"
          classes={{ paper: "drawerPaper" }}
        >
          <div>
            <Nav />
          </div>
        </Drawer>
        <Routes />
      </div>
    </Router>
  );
};

export default App;
