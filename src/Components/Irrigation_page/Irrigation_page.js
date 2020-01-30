import React, { Component } from 'react';
import './Irrigation_page.css';
import irrigation from '../Images/irrigation.jpeg';
import irrigation1 from '../Images/irrigation1.jpeg';
import irrigation2 from '../Images/irrigation2.jpeg';
import irrigation3 from '../Images/irrigation3.jpeg';
import axios from 'axios';
import Navbar from '../Navbar/Navbar';
import FooterPage from '../Footer/Footer';
import Cookies from 'js-cookie'
class Irrigation_page extends Component {
  onHandleClick4 = (e) => {
    Cookies.set('Machinery_Name', 'Sprayer nozzles')
    Cookies.set('Hours', '4hrs')
    Cookies.set('Price', '1500rs/hr')

  }
  onHandleClick5 = (e) => {
    Cookies.set('Machinery_Name', 'Sprinkler')
    Cookies.set('Hours', '2.5hrs')
    Cookies.set('Price', '1300rs/hr')

  }
  onHandleClick6 = (e) => {
    Cookies.set('Machinery_Name', 'misting')
    Cookies.set('Hours', '3.5hrs')
    Cookies.set('Price', '1500rs/hr')

  }
  onHandleClick7 = (e) => {
    Cookies.set('Machinery_Name', 'Irrigation kit')
    Cookies.set('Hours', '2hrs')
    Cookies.set('Price', '1800rs/hr')

  }
  render() {
    return (
      <div>
        <Navbar />
        <div class="row main_container">
          <div className="col-xs-1 col-sm-1 col-md-1 col-lg-1"></div>
          <div className="col-xs-2 col-sm-2 col-md-2 col-lg-2">
            <div class="container">
              <div class="card">
                <img class="card-img-top" src={irrigation}></img>
                <div class="card-body">
                  <h4 class="card-title">Sprayer nozzles</h4>
                  <p class="card-text">fixed spray nozzles come in circular spray patterns,
       but recently there are some rectangular patterns on the market as well.</p>
                  <a href="LoginPage" class="btn btn-danger" onClick={this.onHandleClick4}>Book Now</a>
                  <button class="btn btn-info" id="hour1">1500rs/hr</button>
                </div>
              </div>
            </div>
          </div>
          <div className="col-xs-1 col-sm-1 col-md-1 col-lg-1"></div>
          <div className="col-xs-2 col-sm-2 col-md-2 col-lg-2">
            <div class="container">
              <div class="card">
                <img class="card-img-top" src={irrigation1}></img>
                <div class="card-body">
                  <h4 class="card-title">Sprinkler</h4>
                  <p class="card-text">used to irrigate agricultural crops, lawns and other areas.
                   They are also used for cooling. Irrigation sprinklers can be used for the residential, industrial and agricultural usage.
        It is useful on uneven land where sufficient water is not available </p>
                  <a href="LoginPage" class="btn btn-danger" onClick={this.onHandleClick5}>Book Now</a>
                  <button class="btn btn-info" id="hour1">1300rs/hr</button>
                </div>
              </div>
            </div>
          </div>
          <div className="col-xs-1 col-sm-1 col-md-1 col-lg-1"></div>
          <div className="col-xs-2 col-sm-2 col-md-2 col-lg-2">
            <div class="container">
              <div class="card">
                <img class="card-img-top" src={irrigation2}></img>
                <div class="card-body">
                  <h4 class="card-title">misting</h4>
                  <p class="card-text">There is probably only one measure that could have saved
                  your plants from the recent sizzling heat wave and that would have been an overhead misting system.
                  The plant absorb small amount of water, thus how it helps to save water in agriculture
     </p>
                  <a href="LoginPage" class="btn btn-danger" onClick={this.onHandleClick6}>Book Now</a>
                  <button class="btn btn-info" id="hour1">1500rs/hr</button>
                </div>
              </div>
            </div>
          </div>
          <div className="col-xs-1 col-sm-1 col-md-1 col-lg-1"></div>
          <div className="col-xs-2 col-sm-2 col-md-2 col-lg-2">
            <div class="container">
              <div class="card">
                <img class="card-img-top" src={irrigation3}></img>
                <div class="card-body">
                  <h4 class="card-title">Irrigation kit</h4>
                  <p class="card-text">It is a highly efficient form of watering system with
                   less water consumption and even distribution of available water thereby ensuring the highest crop output, thus how it helps to supply water through pipe.
     </p>
                  <a href="LoginPage" class="btn btn-danger" onClick={this.onHandleClick7}>Book Now</a>
                  <button class="btn btn-info" id="hour1">1800rs/hr</button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <FooterPage />
      </div>
    );
  }
}

export default Irrigation_page;