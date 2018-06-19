import React, { Component } from 'react';
import { connect } from 'react-redux'

const mapStateToProps = state => {
  return {
    username: state.LoginUsername.username
  }
}

class LetterDistribution extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <p>Distribution: {this.props.username}</p>
      </div>
    );
  }
}

export default connect(mapStateToProps)(LetterDistribution)
