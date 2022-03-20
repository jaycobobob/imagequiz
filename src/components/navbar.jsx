import React, { Component } from "react";
import { Link } from "react-router-dom";

class Navbar extends Component {
  state = {};
  render() {
    return (
      <nav className="navbar navbar-expand-sm bg-dark navbar-dark">
        <div className="container-fluid">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link className="nav-link" to="/">
                Home
              </Link>
            </li>
            <li>
              {isSignedIn() && (
                <p>{`Welcome ${localStorage.getItem("activeUser")}!`}</p>
              )}
            </li>
          </ul>
          <ul className="navbar-nav">
            <li className="nav-item">
              {!isSignedIn() && (
                <Link className="nav-link" to="/login">
                  Sign In
                </Link>
              )}
            </li>
            <li className="nav-item">
              {isSignedIn() && (
                <Link
                  className="nav-link"
                  onClick={() => {
                    localStorage.setItem("activeUser", "Guest");
                    window.location.reload();
                  }}
                  to="/"
                >
                  Sign Out
                </Link>
              )}
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}

function isSignedIn() {
  return localStorage.getItem("activeUser") !== "Guest";
}

export default Navbar;
