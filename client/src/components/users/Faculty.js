import React, { Component } from "react";
import Header from "../common/Header";
import "./faculty.css";
import LeavesLeft from "./LeavesLeft";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { logoutUser } from "../../actions/authActions";
import img from "../../images/professor.jfif";

class Faculty extends Component {
  
  render() {
    const { user } = this.props.auth;
    const fetch = {
      name: user.name,
      designation: user.type,
      department: "CSE-E",
      image: img,
      leaves: [
        {
          title: "Earned Leave",
          count: 10,
        },
        {
          title: "Earned Leave",
          count: 10,
        },
        {
          title: "Earned Leave",
          count: 10,
        },
        {
          title: "Earned Leave",
          count: 10,
        },
        {
          title: "Earned Leave",
          count: 10,
        },
        {
          title: "Earned Leave",
          count: 10,
        },
      ],
    };
    return (
      <div>
        <Header name="Gunjan Beniwal" />
        <LeavesLeft data={fetch} />
      </div>
    );
  }
}

Faculty.propTypes = {
  logoutUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  auth: state.auth,
});
export default connect(mapStateToProps, { logoutUser })(Faculty);
