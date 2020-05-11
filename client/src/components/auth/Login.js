import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { loginUser } from "../../actions/authActions";
import classnames from "classnames";
import Button from '@material-ui/core/Button';
import './Login.css'
import ieee from '../../images/ieee.png'
import logo from '../../images/logo.png'

class Login extends Component {
  constructor() {
    super();
    this.state = {
      email: "",
      password: "",
      errors: {}
    };
  }

  componentDidMount() {
    // If logged in and user navigates to Login page, should redirect them to dashboard
    if (this.props.auth.isAuthenticated) {
      this.props.history.push("/faculty");
    }
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.auth.isAuthenticated) {
      this.props.history.push("/faculty");
    }

    if (nextProps.errors) {
      this.setState({
        errors: nextProps.errors
      });
    }
  }

  onChange = e => {
    this.setState({ [e.target.id]: e.target.value });
  };

  onSubmit = e => {
    e.preventDefault();

    const userData = {
      email: this.state.email,
      password: this.state.password
    };

    this.props.loginUser(userData);
  };

  render() {
    const { errors } = this.state;

    return (
      
          <div className="login-outer">
            <div className="login-inner">
              
              <div className="outer-header-div">
                <div>
                    <img className="outer-header-logo" src={logo} />
                </div>
                <div className="college-head">
                    LEAVE MANAGEMENT PORTAL
                </div>
                <div className="ieee-logo-div">
                    <img className="ieee-logo" src={ieee} />
                </div>
              </div>
                <div className="login-form-div">
                    <form noValidate onSubmit={this.onSubmit}>
                      <div className="input-field">
                        <input 
                          onChange={this.onChange}
                          value={this.state.email}
                          error={errors.email}
                          id="email"
                          type="email"
                          className={classnames("input-details", {
                            invalid: errors.email || errors.emailnotfound
                          })}
                        />
                        <label className="label-input" htmlFor="email">Email</label>
                        <span className="red-text">
                          {errors.email}
                          {errors.emailnotfound}
                        </span>
                      </div>
                      <div className="input-field">
                        <input
                          onChange={this.onChange}
                          value={this.state.password}
                          error={errors.password}
                          id="password"
                          type="password"
                          className={classnames("input-details", {
                            invalid: errors.password || errors.passwordincorrect
                          })}
                        />
                        <label className="label-input" htmlFor="password">Password</label>
                        <span className="red-text">
                          {errors.password}
                          {errors.passwordincorrect}
                        </span>
                      </div>
                      <div className="btn-login-div">
                        <Button className="btn-login" variant="contained" color="primary"
                          type="submit"
                        >
                          Login
                        </Button>
                      </div>
                    </form>
                </div>
           
          </div>
          </div>
       
    );
  }
}

Login.propTypes = {
  loginUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth,
  errors: state.errors
});

export default connect(
  mapStateToProps,
  { loginUser }
)(Login);
