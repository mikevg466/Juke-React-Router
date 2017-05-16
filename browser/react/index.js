import React from 'react';
import ReactDOM from 'react-dom';
import AppContainer from './containers/AppContainer';
import {Router, Route, hashHistory, browserHistory} from 'react-router';
import Albums from './components/Albums'

ReactDOM.render(
  <Router history={hashHistory}>
    <Route path='/' component={AppContainer} >
    <Route path='/' component={Albums} />
    </Route>
  </Router>,
  document.getElementById('app')
);
