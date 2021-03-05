import React from "react";
import { NavLink } from "react-router-dom";
const Navbar = () => {
  return (
    <div>
      <NavLink
        to="/"
        exact
        activeClassName="selected"
        activeStyle={{
          fontWeight: "bold",
          color: "red",
          backgroundColor: "green",
          fontSize: "30px"
        }}
      >
        Home
      </NavLink>
      <NavLink
        to="/Contact"
        exact
        activeClassName="selected"
        activeStyle={{
          fontWeight: "bold",
          color: "red",
          backgroundColor: "green",
          fontSize: "30px"
        }}
      >
        contact
      </NavLink>
      <NavLink
        to="/about"
        exact
        activeClassName="selected"
        activeStyle={{
          fontWeight: "bold",
          color: "red",
          backgroundColor: "green",
          fontSize: "30px"
        }}
      >
        about
      </NavLink>

      <NavLink
        to="/User/waqas"
        exact
        activeClassName="selected"
        activeStyle={{
          fontWeight: "bold",
          color: "red",
          backgroundColor: "green",
          fontSize: "30px"
        }}
      >
        user
      </NavLink>

      <NavLink
        to="/Search"
        exact
        activeClassName="selected"
        activeStyle={{
          fontWeight: "bold",
          color: "red",
          backgroundColor: "green",
          fontSize: "30px"
        }}
      >
        search
      </NavLink>
    </div>
  );
};
export default Navbar;
