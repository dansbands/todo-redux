import React from 'react';
import ReactDOM from 'react-dom';
import './css/index.css';
import App from './App';

import { Provider } from 'react-redux';
import reducer from './reducers'
import configureStore from './configureStore';


const store = configureStore(reducer)




ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root'));
