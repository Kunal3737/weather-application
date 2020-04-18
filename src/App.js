import React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'; 
import logo from './logo.svg';
import './App.css';
import Header from './components/header/Header'
import Dropdown from './components/Dropdown/Dropdown'
import Navbar from './components/Navbar/Navbar'
import Home from './components/Home/Home'
import Cities from './components/Cities/Cities'

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar/>
        <Route exact path="/" component={Home} />
        <Route path="/cities" component={Cities} />
      </div>
    </Router>
  );
}

export default App;

{/* <Header/> */}