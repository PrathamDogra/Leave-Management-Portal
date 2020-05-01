import React, { Component } from "react";
import logo from '../../images/logo.png'
import "./Header.css";
import { Button } from "reactstrap";
class Header extends Component {
    render(){
        return (
            <div className="header-common">
                <div className="header-msit-logo">
                    <img className="header-msit-logo-img" src={logo}/>
                </div>
                <div>
                    {/* <div className="people-name">
                        {this.props.name}
                    </div> */}
                    <div className="logout-btn-div">
                        Logout
                    </div>
                </div>
            </div>
        )
    }
}
export default Header;