import React, { Component } from 'react';
import { connect } from 'react-redux';
import { countBy } from 'lodash';

const mapStateToProps = state => {
  return {
    username: state.Login.username
  }
}

// returns the distribution of characters of a string
const stringToDistribution = text => {
  return JSON.stringify(countBy(text));
}

class LetterDistribution extends Component {

  constructor(props) {
    super(props);
    this.state = {
      loadingState: 'notloaded'
    }
  }

  componentDidMount() {
    // we can use mocky.io with a delay to simulate how a network call might take a while
    // we would then load in what data was returned to the state / redux store and update the DOM
    // FIXME: make sure to cancel call if component unmounts
    fetch("https://www.mocky.io/v2/5185415ba171ea3a00704eed?mocky-delay=3s")
      .then(response => {
        this.setState({ loadingState: 'loaded' })
      })
      .catch()
  }

  render() {
    if (this.state.loadingState === 'notloaded') {
      return (<div className="loading-spinner"></div>)
    } else {
      return (
        <div>
          {/* TODO: display visually with d3 */}
          <p>Thanks for waiting, here's your data.</p>
          <p>Distribution: {stringToDistribution(this.props.username)}</p>
        </div>
      );
    }
  }
}

export default connect(mapStateToProps)(LetterDistribution)
