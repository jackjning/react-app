import "./App.css";
import Nav from "./Navigate";
import Links from "./MediaLinks";
import Routes from "./routes";
import { HashRouter as Router } from "react-router-dom";
import styled from "@emotion/styled";

const bigContainer = styled.div`
  display: flex;
  height: 100%;
  width: 100%;
  justify-content: center;
`;

const App = () => {
  console.log("hello world");

  return (
    <Router>
      <bigContainer>
        <div className="smallContainer"/>
        <div className="root">
          <Nav />
          <Routes />
          <Links/>
        </div>
        <div className="smallContainer"/>
      </bigContainer>
    </Router>
  );
};

export default App;
