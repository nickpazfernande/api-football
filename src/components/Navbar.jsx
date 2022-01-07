import React from "react";
import "../style/navbar.css";
import { Link } from "react-router-dom";
import logo from "../assets/img/Logo2.png";

const Navbar = () => {
  return (
    <nav className="navBar">
      <ul>
        <img src={logo} className="img-logo-nav" alt="logo Nick" />

        <li>
          <Link to="/">HOME</Link>
        </li>
        <li>
          <Link to="/teams">EQUIPOS</Link>
        </li>
        <li>
          <Link to="/stadiums">ESTADIOS</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
