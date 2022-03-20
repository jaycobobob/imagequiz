import React, { Component } from "react";
import { Redirect } from "react-router-dom";

class LoginForm extends Component {
  state = { badLogin: false, goodLogin: false, redirect: null };

  handleSubmit = (event) => {
    event.preventDefault();
    let username = event.target.elements.username.value;
    let pswd = event.target.elements.pswd.value;

    let expectedPswd = localStorage.getItem(username);

    if (!expectedPswd || expectedPswd !== pswd) {
      this.setState({ badLogin: true });
    } else {
      this.setState({ goodLogin: true, badLogin: false });
      localStorage.setItem("activeUser", username);
      this.setState({ redirect: "/" });
    }
  };

  render() {
    if (this.state.redirect) {
      return <Redirect to={this.state.redirect} />;
    }
    return (
      <form onSubmit={this.handleSubmit}>
        <div className="mb-3 mt-3">
          <input
            type="username"
            className="form-control"
            placeholder="Enter username"
            name="username"
            required
          ></input>
        </div>
        <div className="mb-3">
          <input
            type="password"
            className="form-control"
            placeholder="Enter password"
            name="pswd"
            required
          ></input>
        </div>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>

        {this.state.badLogin && (
          <p className="text-danger">
            The username or password you entered was incorrect
          </p>
        )}
        {this.state.goodLogin && (
          <p>Welcome! Taking you to the homepage shortly.</p>
        )}
      </form>
    );
  }
}

export default LoginForm;
