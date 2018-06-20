import React, { Component } from 'react';
import LoginContainer from './LoginContainer';
import LetterDistribution from './LetterDistribution';
import { connect } from 'react-redux';

const mapStateToProps = state => {
  return {
    loggedIn: state.loggedIn.loggedIn,
  }
}

class App extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    console.log(this.props)
    if (this.props.loggedIn === true) {
      return (
        <div>You're logged in!</div>
      )
    } else { 
      return (
        <div>
          <LoginContainer />
          <LetterDistribution />
        </div>
      )
    }
  }
}

export default connect(mapStateToProps)(App)