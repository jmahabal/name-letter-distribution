import React, { Component } from 'react';
import Button from './UI/Button';
import { TweenMax } from 'gsap';

// TODO: extract out so that it can be shared
const transitionTime = 1000;

class Login extends Component {

  constructor(props) {
    super(props);
    this.fadeInModal = this.fadeInModal.bind(this);
    this.fadeOutModal = this.fadeOutModal.bind(this);
  }

  // FIXME: don't use div ids to locate a DOM element
  // TODO: fade out background
  // TODO: disable the login-button
  // TODO: close modal on x mark or outside div
  fadeInModal() {
    TweenMax.to("#modal", transitionTime/1000, { y: "0", opacity: 1 });
  }

  fadeOutModal() {
    TweenMax.to("#modal", transitionTime/1000, { 
        y: "100", 
        opacity: 0, 
        onComplete: () => {
          this.props.logIn();
        }
      }
    )
  }

  render() {
    return (
      <div>
        <div id="modal">
          <div className="homepage--modal-inputs">
            <div className="homepage--modal-input-field">
              <label htmlFor="username">Username
              <input type="text" onChange={this.props.updateUsername} value={this.props.username} name="username" />
            </label>
            </div>
            <div className="homepage--modal-input-field">
              <label htmlFor="password">Password
              {/* FIXME: change to type password */}
              <input type="text" onChange={this.props.updatePassword} value={this.props.password} name="password" />
              </label>
            </div>
            <Button onClickFunction={this.fadeOutModal}
                    buttonText={"Sign In"} />
          </div>
        </div>
        <div className="homepage--login-button">
          <Button onClickFunction={this.props.isLoggedIn ? this.props.logOut : this.fadeInModal} 
                  buttonText={this.props.isLoggedIn ? "Log Out" : "Log In"} 
                  warning={this.props.isLoggedIn ? "warning" : ""} />
        </div>
      </div>
    )
  }
}

export default Login;