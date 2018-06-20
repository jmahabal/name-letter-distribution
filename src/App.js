import React, { Component } from 'react';
import { connect } from 'react-redux';

import Button from './components/UI/Button';

import LoginContainer from './components/LoginContainer';
import LetterDistribution from './components/LetterDistribution';

const mapStateToProps = state => {
  return {
    loggedIn: state.loggedInState.isLoggedIn,
  }
}

const mapDispatchToProps = dispatch => {
  return {
    logOut: () => {
      dispatch({type: 'LOG_OUT' })
    },
  }
}

class App extends Component {

  constructor(props) {
    super(props);
    this.props.logOut();
  }

  render() {
    if (this.props.loggedIn === true) {
      return (
        <div>
          {/* TODO: extract to a separate component */}
          <p>You're logged in!</p>
          <LetterDistribution />
          <Button onClickFunction={this.props.logOut} buttonText="Log Out" />
        </div>
      )
    } else { 
      return (
        <div>
          <LoginContainer />
        </div>
      )
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)