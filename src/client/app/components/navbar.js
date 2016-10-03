import React, { Component } from 'react';
import { Link } from 'react-router';

class NavBar extends Component {
  render() {
    return (
      <nav className="navbar navbar-default navbar-fixed-top">
        <div className="container">
          <ul className="nav masthead-nav">
            <li><Link to="/about">About</Link></li>
            <li><Link to="/portfolio">Portfolio</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
          <a className="navbar-brand" href="https://www.linkedin.com/in/alemneh" target="_blank">Alemneh Asefa</a>
        </div>
      </nav>
    );
  }
}

export default NavBar;
