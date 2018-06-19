import React, { Component } from 'react';

class Login extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="homepage--login-form">
        <input type="text" onChange={this.props.updateUsername} value={this.props.username} />
      </div>
    );
  }
}

export default Login;