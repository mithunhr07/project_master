import React, { Component } from 'react';
import BrowserHistory from '../Utils/BrowserHistory';
import './Navbar.css';

import logo from '../Images/logo_image.jpeg'

class Navbar extends Component {
  logout=()=>{
    sessionStorage.removeItem('authentication')
    BrowserHistory.push('/')
  }
    render() {
        return (
            <div>
            <nav class="navbar navbar-expand-sm bg-dark navbar-dark cursor:pointer">
 
  <a href="http://www.Agriculturalmachinery.com/">
  <span>
  <img className="logo-img" src={logo}/>
  </span>
  <span className="text-color">agri machinery</span>
  </a>
  <a href="LoginPage"><span className="glyphicon glyphicon-user fa-2x" id="login-icon"></span></a>
  <a className="text-color" href="LoginPage">Log In</a>
  
 
  <ul class="navbar-nav" id="nav">
    <li class="nav-item">
      <a class="nav-link" href="HomePage">Home</a>
    </li>
    <div class="dropdown">
    <li class="nav-item">
   <a class="nav-link" id="services">Services</a>
  <div class="dropdown-content">
    <a href="Planting_machines">Planting machines</a>
    <a href="Irrigation_page">Irrigation machinery</a>
    <a href="Harvest_page">Harvesting implements</a>
    <a href="Cultivation_page">Soil cultivation implements</a>
    <a href="Miscellaneous_page">Miscellaneous agricultural equipments</a>
  </div>

    </li>
    </div>
    <li class="nav-item" id="services">
      <a class="nav-link" href="About_page">About</a>
    </li>
    <li class="nav-item" id="services">
      <a class="nav-link" href="Contact_page">Contact Us</a>
    </li>
    <li class="nav-item"  id="services">
      <a class="nav-link"  onClick={this.logout}>Logout</a>
    </li>
    
  </ul>
</nav>
</div>
        );
    }
}

export default Navbar;


