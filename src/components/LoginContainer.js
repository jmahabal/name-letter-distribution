import React, { Component } from 'react';
import { connect } from 'react-redux';

import Login from './Login';

const mapStateToProps = state => {
  return {
    username: state.LoginUsername.username,
    password: state.LoginPassword.password,
    isLoggedIn: state.loggedInState.isLoggedIn
  }
}

const mapDispatchToProps = dispatch => {
  return {
    updateUsername: (event) => {
      dispatch({type: 'UPDATE_USERNAME', username: event.target.value })
    },
    updatePassword: (event) => {
      dispatch({type: 'UPDATE_PASSWORD', password: event.target.value })
    },
    logIn: () => {
      dispatch({type: 'LOG_IN' })
    },
    logOut: () => {
      dispatch({type: 'LOG_OUT' })
    },
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Login)