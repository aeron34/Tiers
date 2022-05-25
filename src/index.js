import React from 'react';
import ReactDOM from 'react-dom/client';
import Home from './Pages/Home';
import Character from './Pages/Character';
import NotFound from './Pages/404';
import {BrowserRouter, Routes, Route} from "react-router-dom"

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path='/home' exact element={<Home/>}/>
      <Route path='/character/:char' exact component={Character}/>
      <Route component={NotFound}/>
    </Routes>
  </BrowserRouter>);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
