import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware, compose } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import { Router } from 'react-router-dom';
import history from './history';

import reducers from './components/reducers';
import App from './components/App';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducers, composeEnhancers(applyMiddleware(thunk)));

const app = (
  <Router history={history}>
    <App />
  </Router>
);

ReactDOM.render(
  <Provider store={store}>{app}</Provider>,
  document.querySelector('#root')
);
