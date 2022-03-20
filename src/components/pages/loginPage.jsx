import React, { Component } from "react";
import LoginForm from "../loginForm";
import Navbar from "../navbar";
import { Link } from "react-router-dom";

class LoginPage extends Component {
  state = {};

  render() {
    return (
      <div>
        <Navbar />
        <div className="container-sm p-5">
          <h2>Sign in here:</h2>
          <LoginForm />
          <Link to="/register">Don't have an account? Create one here.</Link>
        </div>
      </div>
    );
  }
}

export default LoginPage;
