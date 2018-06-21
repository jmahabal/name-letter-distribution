import React, { Component } from 'react';
import Button from './UI/Button';
import { TweenMax } from 'gsap';
import Icon from './UI/Icon'
import validation from '../utils/validation';

const transitionTime = 500;

class Login extends Component {

  constructor(props) {
    super(props);
    this.fadeInModal = this.fadeInModal.bind(this);
    this.fadeOutModal = this.fadeOutModal.bind(this);
    this.fadeOutModalOnly = this.fadeOutModalOnly.bind(this);
  }

  // FIXME: don't use div ids/classes to locate a DOM element (use refs?)
  // TODO: disable the login button when modal is open
  // TODO: ability to press enter to submit form
  // TODO: for the password error, display a specific message
  fadeInModal() {
    TweenMax.to("#homepage--login-modal", transitionTime/1000, { 
      opacity: 1 
    });
    TweenMax.to(".homepage--login-background", transitionTime/1000, { 
      opacity: 1
    });
  }

  fadeOutModal() {
    if (validation(this.props.password)) {
      TweenMax.to("#homepage--login-modal", transitionTime/1000, { 
        opacity: 0, 
        onComplete: this.props.logIn
      })
      TweenMax.to(".homepage--login-background", transitionTime/1000, { 
        opacity: 0
      });
    }
  }

  // FIXME: figure out the best way to pass in a function to fadeOutModal
  fadeOutModalOnly() {
    TweenMax.to("#homepage--login-modal", transitionTime/1000, { 
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
                <input className={validation(this.props.password) ? "homepage--modal-input" : "homepage--modal-input__error"} 
                       type="password" onChange={this.props.updatePassword} 
                       value={this.props.password} 
                       name="password" />
              </label>
            </div>
            <Button onClickFunction={this.fadeOutModal} buttonText={"Sign In"} />
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