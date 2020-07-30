import React from "react";
import Home from './components/Home'
import "./styles.css";
import Signup from './components/Signup';
import {  Route, Switch } from 'react-router-dom';

export default function App() {
  return (
    <div className="App">
        <Switch>
            <Route exact path='/' component={Home} />
            <Route exact path='/signup' component={Signup} />
          </Switch>
    </div>
  );
}
