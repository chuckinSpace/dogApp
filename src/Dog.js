import React, { Component } from "react";
import uuid from "uuid";
import "./Dog.css";
import { Link } from "react-router-dom";

export default class Dog extends Component {
  render() {
    let { dog } = this.props;
    return (
      <div className="Dog row justify-content-center mt-5" key={uuid()}>
        <div className="col-11 col-lg-5">
          <div className="Dog-card card">
            <img
              className="card-img-top"
              src={dog.src}
              alt={`A dog named ${dog.name}`}
            />
            <div className="card-body">
              <h2 className="card-title">{dog.name}</h2>
              <h4 className="card-subtitle text-muted">{dog.age} Years Old</h4>
            </div>
            <ul className="list-group list-group-flush">
              {dog.facts.map((fact, i) => (
                <li className="list-group-item" key={i}>
                  {fact}
                </li>
              ))}
            </ul>
            <div className="card-body">
              <Link to="/dogs" className="btn btn-info">
                Go Back
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
