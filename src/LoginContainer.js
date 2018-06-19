import React, { Component } from 'react';
import { connect } from 'react-redux'

import Login from './Login';

const mapStateToProps = state => {
  return {
    username: state.LoginUsername.username
  }
}

const mapDispatchToProps = dispatch => {
  return {
    updateUsername: (event) => {
      dispatch({type: 'UPDATE_USERNAME', username: event.target.value })
    },
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Login)