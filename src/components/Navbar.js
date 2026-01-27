import React, { Component } from "react";
import logo from '../assets/Gobal.png'
export class Navbar extends Component {
  render() {
    return (
      <div>
        <nav className="navbar navbar-dark navbar-expand-lg" style={{ backgroundColor: '#1a1a1a' }}>
          <div className="container-fluid">
            <a className="navbar-brand" href="#" style={{ color: '#ffffff' }}>
              <img
                src={logo}
                width="420px"
                height="130px"
                className="d-inline-block align-text-top"
              />
            </a>

            <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
              <div className="navbar-nav ms-auto">
                <a className="nav-link active" aria-current="page" href="/" style={{ color: '#ffffff' }}>
                  Home
                </a>
                <a className="nav-link" href="/about" style={{ color: '#ffffff' }}>
                  About
                </a>
                <a className="nav-link" href="/pricing" style={{ color: '#ffffff' }}>
                  Pricing
                </a>
              </div>
            </div>
          </div>
        </nav>
      </div>
    );
  }
}

export default Navbar;
