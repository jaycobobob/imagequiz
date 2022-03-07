import React, { Component } from "react";
import Flowers from "../flowers";
import Navbar from "../navbar";

class HomePage extends Component {
  state = {};
  render() {
    return (
      <div>
        <Navbar />
        <Flowers />
      </div>
    );
  }
}

export default HomePage;
