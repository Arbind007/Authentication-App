import React, { Component } from "react";
import { Link } from "react-router-dom";
import AuthOptions from "../auth/AuthOptions";

class Header extends Component {
  render() {
    return (
      <nav class="navbar navbar-dark bg-dark mb-2">
        <Link to="/">
          <h1 className=" text-white ">MERN auth app</h1>
        </Link>

        <AuthOptions />
      </nav>
    );
  }
}

export default Header;
