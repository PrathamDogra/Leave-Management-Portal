import React, { Component } from "react";
import Header from "../common/Header";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { logoutUser } from "../../actions/authActions";
import ManageLeavesList from './ManageLeaveList';

class ManageLeaves extends Component {
  
  render() {
    const { user } = this.props.auth;
    const fetch = {
      designation: user.type
    };
    return (
      <div>
        <Header type={fetch.designation} active='Manage Leaves'/>
        <ManageLeavesList />
      </div>
    );
  }
}

ManageLeaves.propTypes = {
  logoutUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  auth: state.auth,
});
export default connect(mapStateToProps, { logoutUser })(ManageLeaves);
