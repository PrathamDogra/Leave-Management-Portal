import React, { Component } from "react";
import { Link } from "react-router-dom";
import Login from "../auth/Login";

class Landing extends Component {
  render() {
    return (
      <div style={{ height: "75vh" }} className="container valign-wrapper">
        <div className="row">
          <div className="col s12 center-align">
            <Login />
          </div>
        </div>
      </div>
    );
  }
}

export default Landing;
