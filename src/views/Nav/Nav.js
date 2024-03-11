import React from "react";
import { NavLink } from "react-router-dom";
import "./Nav.scss";

class Nav extends React.Component {
  render() {
    return (
      <div className="topnav">
        <NavLink activeClassName="active" to="/" exact={true}>
          Home
        </NavLink>
        <NavLink activeClassName="active" to="/todos">
          Todo
        </NavLink>
        <NavLink activeClassName="active" to="/students">
          Student
        </NavLink>
        <NavLink activeClassName="active" to="/user">
          User
        </NavLink>
      </div>
    );
  }
}

export default Nav;
