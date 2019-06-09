import React, { Component } from "react";
import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { NavLink } from "react-router-dom";

export default class NavBar extends Component {
  render() {
    let dogLinks = this.props.dog.map((dog,i) => {
      return (
        <li key={i} className="nav-item">
          <NavLink
            exact
            to={`/dogs/${dog.name}`}
            className="nav-link"
            key={dog.name}
          >
            {dog.name}
          </NavLink>
        </li>
      );
    });
    return (
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <NavLink className="navbar-brand" to="/dogs">
          DogApp
        </NavLink>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>

        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item">
              <NavLink exact className="nav-link" to="/dogs">
                Home
              </NavLink>
            </li>
            {dogLinks}
          </ul>
        </div>
      </nav>
    );
  }
}
