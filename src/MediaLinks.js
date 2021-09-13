import React from "react";
import styled from "@emotion/styled";

function Links() {
  return (
    <Navi>
      <a href="https://github.com/jackjning">Github</a>
      <a href="https://www.linkedin.com/in/jack-ning-466bb6149/">LinkedIn</a>
    </Navi>
  );
}

export default Links;

const Navi = styled.nav`
  padding-top: 20px;

  a {
    text-decoration: none;
    color: black;
    margin: 5px;
  }
`;
