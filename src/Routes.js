import React, { Component } from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import Dogs from "./Dogs";
import Dog from "./Dog";

export default class Routes extends Component {
  getDog = props => {
    let name = props.match.params.name;
    let currentDog = this.props.dogs.find(dog => {
      return dog.name.toLowerCase() === name.toLowerCase();
    });
    return <Dog {...props} dog={currentDog} />;
  };

  render() {
    return (
      <Switch>
        <Route exact path="/dogs" render={() => <Dogs {...this.props} />} />
        <Route exact path="/dogs/:name" render={this.getDog} />
        <Redirect to="/dogs" />
      </Switch>
    );
  }
}
