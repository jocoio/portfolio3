import React, { Fragment } from "react";
import { matchPath } from 'react-router-dom'
import { TransitionGroup } from 'react-transition-group'

import { Provider } from 'react-redux'
import store from '../../redux/store'

import Nav from '../nav/Nav'
import Curtain from '../curtain/Curtain'

import './App.css'

export default class App extends React.Component {
  matchPath = path =>
    matchPath(window.location.pathname, path)

  componentDidMount() {
    if ('scrollRestoration' in window.history) {
      // Back off, browser, I got this...
      window.history.scrollRestoration = 'manual';
    }
    setTimeout(() => {  document.getElementById("loadingBuffer").remove() }, 1000);
  }

  render() {
    return (
      <Provider store={store} id="app">
        <Fragment>
          <Curtain />
          <Nav />
          <TransitionGroup id="content">
            {this.props.routes
              .filter(({ path }) => this.matchPath(path))
              .map(({ Component, key }) => (
                <Component key={key} />
              ))}
          </TransitionGroup>
        </Fragment>
      </Provider>
    )
  }
}
