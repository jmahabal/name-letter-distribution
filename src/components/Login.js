import React, { Component } from 'react';
import Button from './UI/Button';
import { TweenMax } from 'gsap';
import Icon from './UI/Icon'

const transitionTime = 500;

class Login extends Component {

  constructor(props) {
    super(props);
    this.fadeInModal = this.fadeInModal.bind(this);
    this.fadeOutModal = this.fadeOutModal.bind(this);
    this.fadeOutModalOnly = this.fadeOutModalOnly.bind(this);

  }

  // FIXME: don't use div ids to locate a DOM element (use refs?)
  // TODO: disable the other login button
  // TODO: add password strength "checks"
  fadeInModal() {
    TweenMax.to("#homepage--login-modal", transitionTime/1000, { 
      y: "0", 
      opacity: 1 
    });
    TweenMax.to(".homepage--login-background", transitionTime/1000, { 
      opacity: 1
    });
  }

  fadeOutModal() {
    TweenMax.to("#homepage--login-modal", transitionTime/1000, { 
      y: "100", 
      opacity: 0, 
      onComplete: this.props.logIn
    })
    TweenMax.to(".homepage--login-background", transitionTime/1000, { 
      opacity: 0
    });
  }

  // FIXME: figure out the best way to pass in a function to fadeOutModal

  fadeOutModalOnly() {
    TweenMax.to("#homepage--login-modal", transitionTime/1000, { 
      y: "100", 
      opacity: 0 
    })
    TweenMax.to(".homepage--login-background", transitionTime/1000, { 
      opacity: 0
    });
  }

  render() {
    return (
      <div>
        <div className="homepage--login-background" onClick={this.fadeOutModalOnly}></div>
        <div id="homepage--login-modal" className="homepage--login-modal">
          <div className="homepage--login-modal-close" onClick={this.fadeOutModalOnly}>
            <Icon type="close"/>
          </div>
          <div className="homepage--modal-inputs">
            <div className="homepage--modal-input-field">
              <label htmlFor="username">
                <span>Username:</span>
                <input type="text" onChange={this.props.updateUsername} value={this.props.username} name="username" />
            </label>
            </div>
            <div className="homepage--modal-input-field">
              <label htmlFor="password">
                <span>Password:</span>
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