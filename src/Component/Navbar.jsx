import React from "react";
import { NavLink } from "react-router-dom";
import Logo from "../Component/movies.png";
import "./Navbar.css";

const Navbar = () => {
  return (
    <>
      <div className="navbar">
        <div className="logo">
        <NavLink to="/"><img src={Logo} alt="" height={50} /></NavLink>
        </div>
        <ul className="links">
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/watchlist">Wishlist</NavLink>
          </li>
        </ul>
        </div>
    </>
  );
};

export default Navbar;
