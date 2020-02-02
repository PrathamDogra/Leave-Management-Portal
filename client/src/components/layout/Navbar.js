import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Navbar } from "react-bootstrap";

class Nav extends Component {
  render() {
    return (
      <Navbar bg="dark" variant="dark">
        <Navbar.Brand>
          <Link to="/">
            <img
              alt=""
              src="/logo512.png"
              width="30"
              height="30"
              className="d-inline-block align-top"
            />
          </Link>

          <Link
            to="/"
            style={{
              color: "#ffffff"
            }}
          >
            Leave Management Portal
          </Link>
        </Navbar.Brand>
        <Link
          to="/register"
          style={{
            textAlign: "right",
            color: "#ffffff"
          }}
          className="btn btn-large waves-effect waves-light hoverable blue accent-3"
        >
          Register
        </Link>
      </Navbar>
    );
  }
}

export default Nav;
