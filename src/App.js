import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { APP_LOAD, REDIRECT } from './constants/ActionTypes';
import { store } from './store/Store';
import { connect } from 'react-redux';
import { push } from 'react-router-redux';
import RequestConfiguration from './RequestConfiguration';
import AppRouter from './routers/AppRouter';

const mapStateToProps = state => {
  console.log(state);
  return {
    appLoaded: state.common.appLoaded,
    appName: state.common.appName,
    currentUser: state.common.currentUser,
    redirectTo: state.common.redirectTo
  }
};

const mapDispatchToProps = dispatch => ({
  onLoad: (payload, token) =>
    dispatch({ type: APP_LOAD, payload, token, skipTracking: true }),
  onRedirect: () =>
    dispatch({ type: REDIRECT })
});

class App extends Component {
  componentDidUpdate(nextProps) {
    if (nextProps.redirectTo) {
      this.context.router.replace(nextProps.redirectTo);
      store.dispatch(push(nextProps.redirectTo));
      this.props.onRedirect();
    }
  }
  componentDidMount() {
    const token = window.localStorage.getItem('jwt');
    if (token) {
      RequestConfiguration.setToken(token);
    }

    this.props.onLoad(token ? RequestConfiguration.Authentication.current() : null, token);
  }
  render() {
    return (
        <AppRouter appName={this.props.appName}
        currentUser={this.props.currentUser} />
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);