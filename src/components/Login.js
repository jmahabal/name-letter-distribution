import React, { Component } from 'react';
import Button from './UI/Button';

class Login extends Component {

  constructor(props) {
    super(props);
    this.logInHandler = this.logInHandler.bind(this);
  }

  logInHandler() {
    
    this.props.logIn();
  }

  render() {
    return (
      <div className="homepage--login-button">
        {/* Username: <input type="text" onChange={this.props.updateUsername} value={this.props.username} /> */}
        <Button onClickFunction={this.props.isLoggedIn ? this.props.logOut : this.logInHandler} 
                buttonText={this.props.isLoggedIn ? "Log Out" : "Log In"} 
                warning={this.props.isLoggedIn ? "warning" : ""} />
      </div>
    )
  }
}

export default Login;