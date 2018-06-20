import React, { Component } from 'react';
import { connect } from 'react-redux';
import { countBy } from 'lodash';

const mapStateToProps = state => {
  return {
    username: state.LoginUsername.username
  }
}

// returns the distribution of characters of a string
const stringToDistribution = text => {
  return JSON.stringify(countBy(text));
}

class LetterDistribution extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <p>Distribution: {stringToDistribution(this.props.username)}</p>
      </div>
    );
  }
}

export default connect(mapStateToProps)(LetterDistribution)
