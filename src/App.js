import React, { Component } from 'react';
import { connect } from 'react-redux';

import Button from './components/UI/Button';

import LoginContainer from './components/LoginContainer';
import LetterDistribution from './components/LetterDistribution';

const mapStateToProps = state => {
  return {
    username: state.LoginUsername.username,
    loggedIn: state.loggedInState.isLoggedIn
  }
}

class App extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <LoginContainer />
        <div className="homepage--intro-screen">
          {this.props.loggedIn === true ? (
            <div>
              {/* TODO: extract to a separate, logged-in, state component */}
              <h1>Welcome, {this.props.username}!</h1>
              <LetterDistribution />
            </div>
          ) : (
            <div>
              <h1>Letter Distribution App</h1>
              <p>This React application requests the user to log-in and then displays the distribution of letters in their username.</p>
            </div>
          )
        }
        </div>
      </div>
    )
  }
}

// TODO: Extract into separate functional / presentational components
export default connect(mapStateToProps)(App)