import React from "react";
import { NavLink } from "react-router-dom";
import "../style/Navigation.scss";

const Navigation = () => {
  return (
    <div className="navigation">
      <ul>
        <NavLink
          to="/"
          className={(nav) => (nav.isActive ? "nav-active hover" : "hover")}
        >
          <li>Home</li>
        </NavLink>
        <NavLink
          to="/favorites"
          className={(nav) => (nav.isActive ? "nav-active hover" : "hover")}
        >
          <li>Favorites</li>
        </NavLink>
        <NavLink
          to="/suggestion"
          className={(nav) => (nav.isActive ? "nav-active hover" : "hover")}
        >
          <li>Suggestion</li>
        </NavLink>
      </ul>
    </div>
  );
};

export default Navigation;
