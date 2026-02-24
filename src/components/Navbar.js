import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import logo from "../assets/global.png";

export class Navbar extends Component {
  render() {
    return (
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark sticky-top">
        <div className="container">
          <NavLink className="navbar-brand d-flex align-items-center" to="/">
            <img
              src={logo}
              alt="Global News logo"
              width="32px"
              height="32px"
              className="me-2 rounded-circle shadow-sm"
              style={{ background: "#fff", padding: "2px" }}
            />
            <span className="fw-bold">Global<span style={{ color: "var(--primary-color)" }}>News</span></span>
          </NavLink>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <div className="navbar-nav ms-auto">
              <NavLink 
                className={({ isActive }) => isActive ? "nav-link active fw-bold" : "nav-link"} 
                to="/"
              >
                Home
              </NavLink>
              <NavLink 
                className={({ isActive }) => isActive ? "nav-link active fw-bold" : "nav-link"} 
                to="/about"
              >
                About
              </NavLink>
            </div>
          </div>
        </div>
      </nav>
    );
  }
}

export default Navbar;
