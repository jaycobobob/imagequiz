import React, { Component } from "react";

class Navbar extends Component {
  state = {};
  render() {
    return (
      <nav className="navbar navbar-expand-sm bg-dark navbar-dark">
        <div className="container-fluid">
          <ul className="navbar-nav">
            <li className="nav-item">
              <a className="nav-link" href="/">
                Home
              </a>
            </li>
            <li>
              {isSignedIn() && (
                <a className="nav-link">{`Welcome ${localStorage.getItem(
                  "activeUser"
                )}!`}</a>
              )}
            </li>
          </ul>
          <ul className="navbar-nav">
            <li className="nav-item">
              {!isSignedIn() && (
                <a className="nav-link" href="/login">
                  Sign In
                </a>
              )}
            </li>
            <li className="nav-item">
              {isSignedIn() && (
                <a
                  className="nav-link"
                  onClick={() => localStorage.setItem("activeUser", "Guest")}
                  href="/"
                >
                  Sign Out
                </a>
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
