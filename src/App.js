import styled from "@emotion/styled";
import Nav from "./Navigate";
import Links from "./MediaLinks";
import Routes from "./routes";
import { HashRouter as Router } from "react-router-dom";

const App = () => {
  return (
    <Router>
      <Box>
        <Fill>
          <Nav />
          <Routes />
          <Links/>
        </Fill>
      </Box>
    </Router>
  );
};

export default App;

const Box= styled.div`
  display: flex;
  justify-content: center;
`

const Fill = styled.div ({
  width: '700px',
  margin: '10px',
});

