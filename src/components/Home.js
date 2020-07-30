import React from "react";
import { InsProgressBar, insProgress } from 'react-ins-progress-bar';
import { Signup } from '../components/SignupBox';
import  firebase from 'firebase';

class Home extends React.Component {
  constructor() {
    super();
    this.state = {
      styles1: {},
      styles2: {},
      loginPass: "",
      loginCreds: "",
      styles3: { opacity: "0.5", cursor: 'pointer'}
    };
  }
  logInUser = () => {
    insProgress.start();
    const { loginCreds, loginPass } = this.state;
    if(loginCreds.length > 0 && loginPass.length > 0){
      firebase.auth().signInWithEmailAndPassword(loginCreds, loginPass)
      .then(function(res){
        console.log('hey', res.user);
        if(res.user)
         window.location.href = "/signup";
        insProgress.finish();
      })
      .catch(function(error) {
        console.log(error.code);
        console.log(error.message);
        alert(error.code);
         insProgress.finish();
      });
    }
  }
  onFocus = e => {
    switch (e.target.name) {
      case "loginCreds":
        this.setState({
          styles1: {
            transform: "translate(-2%, -55%)",
            fontSize: "12px}"
          }
        });
        break;
      case "loginPass":
        this.setState({
          styles2: {
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
      case "loginCreds":
        if (e.target.value.length === 0)
          this.setState({
            styles1: {}
          });
        break;
      case "loginPass":
        if (e.target.value.length === 0)
          this.setState({
            styles2: {}
          });
        if (e.target.value.length < 6)
          this.setState({
            styles3: {
              opacity: "0.5"
            }
          });
        break;
      default:
        return null;
    }
  };
  onChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
    if (e.target.name === "loginPass" && e.target.value.length > 6)
      this.setState({
        styles3: { opacity: "1" }
      });
  };
  render() {
    return (<>
    <InsProgressBar />
      <div className="home-box">
        <img
          className="logo-img"
          src="https://i.postimg.cc/Z5Y4cHkT/kissclipart-instagram-marketing-how-to-turn-your-pictures-int-941e5341eb7471a5.png"
          alt="text-logo"
        />
        <div className="login-div">
          <p className="over-txt" style={this.state.styles1}>
            Mobile number or email
          </p>
          <input
            type="text"
            name="loginCreds"
            className="loginCreds typo"
            value={this.state.loginCreds}
            onFocus={this.onFocus}
            onBlur={this.onBlur}
            onChange={this.onChange}
          />
        </div>

        <div className="password-div">
          <p className="over-txt" style={this.state.styles2}>
            Password
          </p>
          <input
            type="password"
            name="loginPass"
            className="loginPass typo"
            value={this.state.loginPass}
            onFocus={this.onFocus}
            onBlur={this.onBlur}
            onChange={this.onChange}
          />
        </div>

        <button
          type="submit"
          style={this.state.styles3}
          className="home-submit typo"
          onClick={ this.logInUser}
        >
          Log In
        </button>

        <p className="home-mid-text">or</p>

        <span className="loginWithFacebook">
          <i className="fab fa-facebook-square"></i>
          Log in with Facebook
        </span>
        <span className="forgot-password">Forgot Password?</span>
      </div>
      <br />
      <Signup text1="Don't have an account?" text2="Sign up" />
      </>
    );
  }
}

export default Home;
