import "./App.css";
import Nav from "./Navigate";
import Links from "./MediaLinks";
import Routes from "./Routes";
import { BrowserRouter as Router } from "react-router-dom";

const App = () => {
  console.log("hello world");

  return (
    <Router>
      <div className="bigContainer">
        <div className="smallContainer"/>
        <div className="root">
          <Nav />
          <Routes />
          <Links/>
        </div>
        <div className="smallContainer"/>
      </div>
    </Router>
  );
};

export default App;
