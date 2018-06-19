import React, { Component } from 'react';

class ColoredText extends Component {

  constructor(props) {
    super(props);
  }

  render() {

    const textColor = {color: `${this.props.color}`}

    return (
      <div className="homepage--colored-text" style={textColor}>
        {this.props.text}
      </div>
    );
  }
}

export default ColoredText;