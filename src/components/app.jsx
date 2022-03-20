import React, { Component } from "react";
import { HashRouter as Router, Switch, Route, Link } from "react-router-dom";
import HomePage from "./pages/homePage";
import LoginPage from "./pages/loginPage";
import RegistrationPage from "./pages/registrationPage";

class App extends Component {
  state = {};

  render() {
    if (!localStorage.getItem("activeUser")) {
      localStorage.setItem("activeUser", "Guest");
    }
    return (
      <Router>
        <Switch>
          <Route exact path="/">
            <HomePage />
          </Route>
          <Route exact path="/login">
            <LoginPage />
          </Route>
          <Route exact path="/register">
            <RegistrationPage />
          </Route>
        </Switch>
      </Router>
    );
  }
}

export default App;
