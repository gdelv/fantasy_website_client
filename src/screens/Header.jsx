import React from "react";
import { NavLink } from "react-router-dom";
import Navbar from "../components/shared/Navbar";

const authenticatedOptions = (
  <div className="links">
    <NavLink to="/sign-out">Sign Out</NavLink>
  </div>
);

const unauthenticatedOptions = (
  <div>
    <NavLink to="/sign-up">Sign Up</NavLink>
    <NavLink to="/sign-in">Sign In</NavLink>
  </div>
);

const alwaysOptions = (
  <div>
    <NavLink to="/">Home Button Logo</NavLink>
  </div>
);

const Header = ({ user }) => (
  <Navbar>
    {user && <span className="navbar-text">Welcome, {user.userName}</span>}
    <div className="nav">
      {alwaysOptions}
      {user ? authenticatedOptions : unauthenticatedOptions }
    </div>
  </Navbar>
);

export default Header