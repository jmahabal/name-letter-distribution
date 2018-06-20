import React, { Component } from 'react';
import Button from './UI/Button';

class Login extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="homepage--login-form">
        Username: <input type="text" onChange={this.props.updateUsername} value={this.props.username} />
        <Button onClickFunction={this.props.logIn} buttonText="Log In" />
      </div>
    )
  }
}

export default Login;