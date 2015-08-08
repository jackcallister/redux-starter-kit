import 'babel/polyfill';
import React from 'react';
import { createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';
import App from '../shared/components/app';
import * as reducers from '../shared/reducers/index';

const store = createStore(combineReducers(reducers));

document.addEventListener('DOMContentLoaded', () => {
  React.render(
    <Provider store={store}>
      {() =>
        <App />
      }
    </Provider>,
    document.getElementById('app')
  );
});
