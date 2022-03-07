import React, { Component } from "react";
import Navbar from "../navbar";
import RegistrationForm from "../registerForm";

class RegistrationPage extends Component {
  state = {};
  render() {
    return (
      <div>
        <Navbar />
        <div className="container-sm p-5">
          <h2>Create an account</h2>
          <RegistrationForm />
        </div>
      </div>
    );
  }
}

export default RegistrationPage;
