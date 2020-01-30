import React, { Component } from 'react';
import BrowserHistory from '../Utils/BrowserHistory';
import './Navbar.css';

import logo from '../Images/logo_image.jpeg'

class Navbar extends Component {
  state = {
    visible: false,
    role: ''
  }
  logout = () => {
    sessionStorage.removeItem('authentication')
    BrowserHistory.push('/LoginPage')
    sessionStorage.removeItem('role', " ")
    this.setState({ visible: false })

  }
  componentDidMount = () => {
    sessionStorage.getItem('role') === 'admin' ? this.setState({ visible: false }) : this.setState({ visible: true })
  }
  render() {
    return (
      <div>
        <nav class="navbar navbar-expand-sm bg-dark navbar-dark cursor:pointer">

          <a href="http://www.Agriculturalmachinery.com/">
            <span>
              <img className="logo-img" src={logo} />
            </span>
            <span className="text-color">Yanthra Gaara</span>
          </a>
          <a href="LoginPage"><span className="glyphicon glyphicon-user fa-2x" id="login-icon"></span></a>
          <a className="text-color" href="LoginPage">Log In</a>

          <ul class="navbar-nav" id="nav">
            <li class="nav-item">
              <a class="nav-link" id="link" href="HomePage">Home</a>
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
            <li class="nav-item">
              <a class="nav-link" id="services" href="About_page">About</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" id="services" href="Contact_page">Contact Us</a>
            </li>

            <li class="nav-item">
              <a class="nav-link" id="services">{sessionStorage.getItem('role')}</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" id="services" onClick={this.logout}>Logout</a>
            </li>

          </ul>
        </nav>
      </div>
    );
  }
}

export default Navbar;


