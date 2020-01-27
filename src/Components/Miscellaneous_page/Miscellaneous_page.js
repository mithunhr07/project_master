import React, { Component } from 'react';
import './Miscellaneous_page.css';
import miscellaneous from '../Images/miscellaneous.jpg';
import miscellaneous1 from '../Images/miscellaneous1.jpg';
import miscellaneous2 from '../Images/miscellaneous2.png';
import miscellaneous3 from '../Images/miscellaneous3.png';
import axios from 'axios';
import Navbar from '../Navbar/Navbar';
import FooterPage from '../Footer/Footer';

class Miscellaneous_page extends Component {
  onHandleClicks4 = (e) => {
    const payload = {
      Machine_Name: "Utility Tractor",
      Price: "1500"
    }
    const options = {
      url: 'http://localhost:8008/Services',
      method: 'POST',
      data: payload
      };
       
      axios(options)
      .then(response => {
      console.log(response.status);
      // BrowserHistory.push('./login')
      window.alert("booked successfully")
      });
      }
      onHandleClicks5 = (e) => {
        const payload = {
          Machine_Name: "Grain Cart",
          Price: "1500"
        }
        const options = {
          url: 'http://localhost:8008/Services',
          method: 'POST',
          data: payload
          };
           
          axios(options)
          .then(response => {
          console.log(response.status);
          // BrowserHistory.push('./login')
          window.alert("booked successfully")
          });
          }
          onHandleClicks6 = (e) => {
            const payload = {
              Machine_Name: "Compact Tractor",
              Price: "1500"
            }
            const options = {
              url: 'http://localhost:8008/Services',
              method: 'POST',
              data: payload
              };
               
              axios(options)
              .then(response => {
              console.log(response.status);
              // BrowserHistory.push('./login')
              window.alert("booked successfully")
              });
              }
              onHandleClicks7 = (e) => {
                const payload = {
                  Machine_Name: "Grain Cart 850 Model",
                  Price: "1500"
                }
                const options = {
                  url: 'http://localhost:8008/Services',
                  method: 'POST',
                  data: payload
                  };
                   
                  axios(options)
                  .then(response => {
                  console.log(response.status);
                  // BrowserHistory.push('./login')
                  window.alert("booked successfully")
                  });
                  }
    render() {
        return (
            <div>
            <Navbar/>
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
  <a href="LoginPage" class="btn btn-danger"onClick={this.onHandleClick4}>Book Now</a>
  <button class="btn btn-info" id="hour4">1500/hr</button>
</div>
</div>
</div>
</div>
<div className="col-xs-1 col-sm-1 col-md-1 col-lg-1"></div>
<div  className="col-xs-2 col-sm-2 col-md-2 col-lg-2">
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
  <a href="LoginPage" class="btn btn-danger" onClick={this.onHandleClick5}>Book Now</a>
  <button class="btn btn-info"  id="hour4">1500/hr</button>
</div>
</div>
</div>
</div>
<div className="col-xs-1 col-sm-1 col-md-1 col-lg-1"></div>
<div  className="col-xs-2 col-sm-2 col-md-2 col-lg-2">
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
  <a href="LoginPage" class="btn btn-danger" onClick={this.onHandleClick6}>Book Now</a>
  <button class="btn btn-info"  id="hour4">1500/hr</button>
</div>
</div>
</div>
</div>
<div className="col-xs-1 col-sm-1 col-md-1 col-lg-1"></div>
<div  className="col-xs-2 col-sm-2 col-md-2 col-lg-2">
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
  <a href="LoginPage" class="btn btn-danger" onClick={this.onHandleClick7}>Book Now</a>
  <button class="btn btn-info"  id="hour4">1500/hr</button>
</div>
</div>
</div>
</div>
</div>
<FooterPage/>
</div>
        );
    }
}

export default Miscellaneous_page;