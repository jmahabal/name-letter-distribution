import React, { Component } from 'react';

class Login extends Component {

  constructor(props) {
    super(props);
  }

  componentDidMount() {
    console.log(this.props)
    this.props.logOut();
  }

  render() {
    return (
      <div className="homepage--login-form">
        <input type="text" onChange={this.props.updateUsername} value={this.props.username} />
        <button onClick={this.props.logIn}>Log In</button>
      </div>
    )
  }
}

export default Login;