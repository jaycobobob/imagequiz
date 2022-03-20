import React, { Component } from "react";
import { Redirect } from "react-router-dom";

class RegistrationForm extends Component {
  state = { badLogin: false, goodLogin: false, errorMsg: "", redirect: null };

  handleSubmit = (event) => {
    event.preventDefault();
    let username = event.target.elements.username.value;
    let pswd1 = event.target.elements.pswd1.value;
    let pswd2 = event.target.elements.pswd2.value;

    let doesUserExist = localStorage.getItem(username);

    if (doesUserExist) {
      this.setState({ badLogin: true, errorMsg: "User already exists" });
    } else if (pswd1 !== pswd2) {
      this.setState({ badLogin: true, errorMsg: "Passwords do not match" });
    } else {
      this.setState({ badLogin: false, goodLogin: true, errorMsg: "" });
      localStorage.setItem(username, pswd1);
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
            name="pswd1"
            required
          ></input>
        </div>
        <div className="mb-3">
          <input
            type="password"
            className="form-control"
            placeholder="Confirm password"
            name="pswd2"
            required
          ></input>
        </div>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>

        {this.state.badLogin && (
          <p className="text-danger">{this.state.errorMsg}</p>
        )}
        {this.state.goodLogin && (
          <p>Welcome! Taking you to the homepage shortly.</p>
        )}
      </form>
    );
  }
}

export default RegistrationForm;
