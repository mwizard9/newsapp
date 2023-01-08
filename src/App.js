import './App.css';

import React, { Component } from 'react'
import NavBar from './components/NavBar';
import News from './components/News';
import{
  BrowserRouter as Router,
  Routes,
  Route,
  Link 
}from "react-router-dom";

export default class App extends Component {
  render() {
    return (
      <div className='contaner'>
        <NavBar/>
        <News pageSize={5} country="in" category="science"/>
      </div>
    )
  }
}
