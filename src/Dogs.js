import React, { Component } from "react";
import "./Dogs.css";
import { Link } from "react-router-dom";

export default class Dogs extends Component {
  render() {
    return (
      <div className="Dogs">
        <div className="row mt-5">
          {this.props.dogs.map(dog => (
            <div className="Dogs col-lg-4 text-center" key={dog.name}>
              <img src={dog.src} alt={dog.name} />
              <Link className="underline" to={`/dogs/${dog.name}`}>
                <h3>{dog.name}</h3>
              </Link>
            </div>
          ))}
        </div>
      </div>
    );
  }
}
