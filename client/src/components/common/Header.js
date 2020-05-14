import React, { Component } from "react";
import logo from '../../images/logo.png'
import "./Header.css";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { logoutUser } from "../../actions/authActions";
import {Link} from 'react-router-dom';
class Header extends Component {
  onLogoutClick = (e) => {
    e.preventDefault();
    this.props.logoutUser();
  };
  menuOptions=(type)=>{
      if(type=='Teacher'){
        return (
                <div onClick={this.onLogoutClick} className="logout-btn-div active" >
                  Logout
                </div>
              )
      }
      if(type == 'Admin')  {
        return (
                <div style={{display:'flex', alignItems:'center'}}>
                  <Link style={{textDecoration:'none'}} to='faculty'><div className={ this.props.active=='Home' ? "admin-manage-user-div active" : "admin-manage-user-div "}>Home</div></Link>
                  <Link style={{textDecoration:'none'}} to='ManageLeaves'><div className={ this.props.active=='Manage Leaves' ? "admin-manage-user-div active" : "admin-manage-user-div "}>   Manage Leaves </div> </Link>
                   <div className={this.props.active=='Manage Users' ? "admin-manage-user-div active" : "admin-manage-user-div"}>   Manage Users </div> 
                   <div onClick={this.onLogoutClick} className= "logout-btn-div">
                      Logout
                  </div>
                </div>
              )
      }
  }
  render() {
    return (
      <div className="header-common">
        <div className="header-msit-logo">
          <img className="header-msit-logo-img" src={logo} />
        </div>
        <div>
          {this.menuOptions(this.props.type)}
          
        </div>
      </div>
    );
  }
}
Header.propTypes = {
  logoutUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  auth: state.auth,
});
export default connect(mapStateToProps, { logoutUser })(Header);