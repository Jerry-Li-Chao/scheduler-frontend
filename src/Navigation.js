import React from "react";
import { Link, NavLink } from "react-router-dom";

export default class Navigation extends React.Component {
  render() {
    return (
      <nav>
        <ul className="nav justify-content-center">
          <li className="nav-item">
            <NavLink exact={true} className="nav-link" to="/">
              My Schdule
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink exact={true} className="nav-link" to="/posts/new">
              Create a task
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink exact={true} className="nav-link" to="/favorited">
              Favorited
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink exact={true} className="nav-link" to="/procrastinatometer">
              Procrastinatometer
            </NavLink>
          </li>
        </ul>
      </nav>
    );
  }
}
