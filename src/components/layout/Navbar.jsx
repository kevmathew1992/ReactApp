import React, { Component } from "react";
import { Link } from "react-router-dom";

class Navbar extends Component {
  state = {};
  render() {
    return (
      <div>
        <h1>Simple User System</h1>
        <br />
        <Link to="/adminLogin" className="btn btn-success m-4">
          Admin Login
        </Link>
        <Link to="/userLogin" className="btn btn-success m-4">
          User Login
        </Link>
      </div>
    );
  }
}

export default Navbar;
