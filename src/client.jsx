import React from 'react';
import { createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';
import App from '../shared/components/app';
import * as reducers from '../shared/reducers/index';

const combinedReducers = combineReducers(reducers);
const store = createStore();

function app() {
  return <App />;
}

document.addEventListener('DOMContentLoaded', () => {
  React.render(
    <Provider store={store}>
      {app}
    </Provider>,
    document.getElementById('app')
  );
});
