import React, { Component } from 'react';
import './Miscellaneous_page.css';
import miscellaneous from '../Images/miscellaneous.jpg';
import miscellaneous1 from '../Images/miscellaneous1.jpg';
import miscellaneous2 from '../Images/miscellaneous2.png';
import miscellaneous3 from '../Images/miscellaneous3.png';
import axios from 'axios';
import Navbar from '../Navbar/Navbar';
import FooterPage from '../Footer/Footer';
import Cookies from 'js-cookie'

class Miscellaneous_page extends Component {
  onHandleClicks4 = (e) => {
    Cookies.set('Machinery_Name', 'Utility Tractor')
    Cookies.set('Hours', '2hrs')
    Cookies.set('Price', '1500rs/hr')

  }
  onHandleClicks5 = (e) => {
    Cookies.set('Machinery_Name', 'Grain Cart')
    Cookies.set('Hours', '2hrs')
    Cookies.set('Price', '1500rs/hr')

  }
  onHandleClicks6 = (e) => {
    Cookies.set('Machinery_Name', 'Compact Tractor')
    Cookies.set('Hours', '2hrs')
    Cookies.set('Price', '1500rs/hr')

  }
  onHandleClicks7 = (e) => {
    Cookies.set('Machinery_Name', 'Grain Cart 850 Model')
    Cookies.set('Hours', '2hrs')
    Cookies.set('Price', '1500rs/hr')

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
                <img class="card-img-top" src={miscellaneous}></img>
                <div class="card-body">
                  <h4 class="card-title">Utility Tractor</h4>
                  <p class="card-text">EPA Final Tier 4 (FT4) compliant engines with maximum fluid efficiency
                Power bulge and torque reserve pull through the tough spots
                32F/16R PowrReverser™ transmission for ultimate speed control
                Heavy-duty 3-point hitch lift capacity for implement versatility
Mid-frame design for support and strength.click below to book now</p>
                  <a href="LoginPage" class="btn btn-danger" onClick={this.onHandleClicks4}>Book Now</a>
                  <button class="btn btn-info" id="hour4">1500rs/hr</button>
                </div>
              </div>
            </div>
          </div>
          <div className="col-xs-1 col-sm-1 col-md-1 col-lg-1"></div>
          <div className="col-xs-2 col-sm-2 col-md-2 col-lg-2">
            <div class="container">
              <div class="card">
                <img class="card-img-top" src={miscellaneous2}></img>
                <div class="card-body">
                  <h4 class="card-title">Grain Cart</h4>
                  <p class="card-text">UltraFlyte made with 1008/1010 high carbon steel including a thicker outer edge, resulting in up to 50% longer wear and faster conveying.
                Automatic reset “cut-out” clutch with overrunning clutch to protect auger drive and tractor PTO 30" hydraulic controlled flow gate.
                Auger positioned for operator visibility.7000 lb. drop-leg tongue jack with separate storage positions provides tighter turning radius.
                Hand wheel operated clean-out door at bottom.
 </p>
                  <a href="LoginPage" class="btn btn-danger" onClick={this.onHandleClicks5}>Book Now</a>
                  <button class="btn btn-info" id="hour4">1500rs/hr</button>
                </div>
              </div>
            </div>
          </div>
          <div className="col-xs-1 col-sm-1 col-md-1 col-lg-1"></div>
          <div className="col-xs-2 col-sm-2 col-md-2 col-lg-2">
            <div class="container">
              <div class="card">
                <img class="card-img-top" src={miscellaneous1}></img>
                <div class="card-body">
                  <h4 class="card-title">Compact Tractor</h4>
                  <p class="card-text">Attractive styling provides improved visibility and serviceability
                Powerful Yanmar® diesel engine delivers plenty of power under heavy loads
                Maximize productivity with an eHydro™ transmission
                PowrReverser™ transmission allows for clutchless direction changes
Operator station is comfortable and convenient</p>
                  <a href="LoginPage" class="btn btn-danger" onClick={this.onHandleClicks6}>Book Now</a>
                  <button class="btn btn-info" id="hour4">1500rs/hr</button>
                </div>
              </div>
            </div>
          </div>
          <div className="col-xs-1 col-sm-1 col-md-1 col-lg-1"></div>
          <div className="col-xs-2 col-sm-2 col-md-2 col-lg-2">
            <div class="container">
              <div class="card">
                <img class="card-img-top" src={miscellaneous3}></img>
                <div class="card-body">
                  <h4 class="card-title">Grain Cart 850 Model</h4>
                  <p class="card-text">UltraFlyte made with 1008/1010 high carbon steel including a thicker outer edge, resulting in up to 50% longer wear and faster conveying.
                Optional chrome flighting for improved wear resistance.
                30" hydraulic controlled flow gate.
                Auger positioned for operator visibility.
                Auger folds within the width of the box for compact transporting and storage.
 </p>
                  <a href="LoginPage" class="btn btn-danger" onClick={this.onHandleClicks7}>Book Now</a>
                  <button class="btn btn-info" id="hour4">1500/hr</button>
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

export default Miscellaneous_page;