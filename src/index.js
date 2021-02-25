import React from 'react';
import ReactDOM from 'react-dom';
import Home from './Pages/Home';
import NotFound from './Pages/404';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom"

ReactDOM.render(
  <Router>
    <Switch>
      <Route path='/' exact component={Home}/>
      <Route component={NotFound}/>
    </Switch>
  </Router>,document.getElementById('root'));

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
