import logo from './logo.svg';
import './App.css';


import React, {useState} from 'react'
import Home from "./components/home"
import Login from "./components/login"
import SignUp from './components/signup'
import AddItem from './components/addItem'


import {BrowserRouter as Router, Switch, Route} from "react-router-dom"


function App() {


  return (

    <div className='container'>
        <AddItem add= {AddItem} /> 
        <Router>
          <Switch>
            <Route exact path="/" component={Login}></Route>
            <Route path="/sign-up" component={SignUp}></Route>
            <Route path="/home" ><Home /></Route>
          </Switch>
          </Router> 
    </div>
  );
}

export default App;
