import React, { Component } from 'react';

class Button extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <button className={`button button__${this.props.warning}`} onClick={this.props.onClickFunction}>{this.props.buttonText}</button>
    )
  }
}

export default Button;