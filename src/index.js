import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {Provider } from 'react-redux';
import {combineReducers, createStore} from 'redux';
import  {search, acting} from './reducer'

const root = combineReducers({search, acting});
const store = createStore(root);

ReactDOM.render(
    <Provider store={store}>
      <App name="bro" />
    </Provider>,
document.getElementById('root'));

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
