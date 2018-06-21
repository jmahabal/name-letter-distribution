import React, { Component } from 'react';
// FIXME: we don't need a component w/ props, we can import the appropiate icon and render in parent instead
// i.e. import { close-icon, save-icon } from Icons

class Icon extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    switch (this.props.type) {
      case 'close':
        return (
          // https://iconmonstr.com/x-mark-9-svg/
          <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24">
            <path d="M23 20.168l-8.185-8.187 8.185-8.174-2.832-2.807-8.182 8.179-8.176-8.179-2.81 2.81 8.186 8.196-8.186 8.184 2.81 2.81 8.203-8.192 8.18 8.192z"/>
          </svg>
        )
      default:
        return (null)
    }
  }
}

export default Icon;