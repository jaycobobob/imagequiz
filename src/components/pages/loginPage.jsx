import React, { Component } from "react";
import LoginForm from "../loginForm";
import Navbar from "../navbar";

class LoginPage extends Component {
  state = {};

  render() {
    return (
      <div>
        <Navbar />
        <div className="container-sm p-5">
          <h2>Sign in here</h2>
          <LoginForm />
          <a href="/register">Don't have an account? Create one here.</a>
        </div>
      </div>
    );
  }
}

export default LoginPage;
