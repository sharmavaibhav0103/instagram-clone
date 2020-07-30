import React from "react";
import { Signup as Signupbox } from "../components/SignupBox";

class Signup extends React.Component {
  constructor() {
    super();
    this.state = {
      styles1: {},
      styles2: {},
      styles3: {},
      styles4: {},
      email: "",
      fullname: "",
      username: "",
      password: "",
      styles5: { opacity: "0.5" }
    };
  }

  onFocus = e => {
    switch (e.target.name) {
      case "email":
        this.setState({
          styles1: {
            transform: "translate(-2%, -55%)",
            fontSize: "12px}"
          }
        });
        break;
      case "fullname":
        this.setState({
          styles2: {
            transform: "translate(-2%, -55%)",
            fontSize: "12px}"
          }
        });
        break;
      case "username":
        this.setState({
          styles3: {
            transform: "translate(-2%, -55%)",
            fontSize: "12px}"
          }
        });
        break;
      case "password":
        this.setState({
          styles4: {
            transform: "translate(-2%, -55%)",
            fontSize: "12px}"
          }
        });
        break;
      default:
        return null;
    }
  };
  onBlur = e => {
    switch (e.target.name) {
      case "email":
        if (e.target.value.length === 0)
          this.setState({
            styles1: {}
          });
        break;
      case "password":
        if (e.target.value.length === 0)
          this.setState({
            styles4: {}
          });
        if (e.target.value.length < 6)
          this.setState({
            styles5: {
              opacity: "0.5"
            }
          });
        break;
      case "fullname":
        if (e.target.value.length === 0)
          this.setState({
            styles2: {}
          });
        break;
      case "username":
        if (e.target.value.length === 0)
          this.setState({
            styles3: {}
          });
        break;
        default: return null;
    }
  };
  onChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
    if (e.target.name === "password" && e.target.value.length > 6)
      this.setState({
        styles5: { opacity: "1" }
      });
  }
  render() {
    return (
      <>
        <div className="home-reg-box">
          <img
            className="logo-img"
            src="https://i.postimg.cc/Z5Y4cHkT/kissclipart-instagram-marketing-how-to-turn-your-pictures-int-941e5341eb7471a5.png"
            alt="text-logo"
          />
          <span className="reg-text">
            Sign up to see photos and videos <br /> from your friends.
          </span>
          <div className="login-div">
            <p className="over-txt" style={this.state.styles1}>
              Email address
            </p>
            <input
              type="text"
              name="email"
              className="loginCreds typo"
              value={this.state.email}
              onFocus={this.onFocus}
              onBlur={this.onBlur}
              onChange={this.onChange}
            />
          </div>
          <div className="login-div">
            <p className="over-txt" style={this.state.styles2}>
              Full Name
            </p>
            <input
              type="text"
              name="fullname"
              className="loginCreds typo"
              value={this.state.fullname}
              onFocus={this.onFocus}
              onBlur={this.onBlur}
              onChange={this.onChange}
            />
          </div>
          <div className="login-div">
            <p className="over-txt" style={this.state.styles3}>
              Username
            </p>
            <input
              type="text"
              name="username"
              className="loginCreds typo"
              value={this.state.username}
              onFocus={this.onFocus}
              onBlur={this.onBlur}
              onChange={this.onChange}
            />
          </div>
          <div className="password-div">
            <p className="over-txt" style={this.state.styles4}>
              Password
            </p>
            <input
              type="password"
              name="password"
              className="loginPass typo"
              value={this.state.password}
              onFocus={this.onFocus}
              onBlur={this.onBlur}
              onChange={this.onChange}
            />
          </div>

          <button
            type="submit"
            style={this.state.styles5}
            className="home-submit typo reg-submit"
          >
            Sign Up
          </button>
        </div>
        <br />
        <Signupbox text1="Have an account ?" text2="Login" />
      </>
    );
  }
}

export default Signup;
