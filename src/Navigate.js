import React from "react";
import "./App.css"
import { Link } from "react-router-dom";

function Nav() {
  return (
    <nav className="navBar">
        <Link class="item" to="/" style={{ textDecoration: "none", color: "black" }}>
          Home
        </Link>
        <Link class="item" to="/About" style={{ textDecoration: "none", color: "black" }}>
          About
        </Link>
        <Link class="item" to="/Resume" style={{ textDecoration: "none", color: "black" }}>
          Resume
        </Link>
        <Link class="item" to="/Projects" style={{ textDecoration: "none", color: "black" }}>
          Projects
        </Link>
    </nav>
  );
}

export default Nav;
