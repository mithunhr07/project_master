import React, { Component } from 'react';
import './Planting_machines.css'
import Planter from '../Images/planter.jpg';
import planter1 from '../Images/planter1.jpg';
import planter2 from '../Images/planter2.jpg';
import planter3 from '../Images/planter3.jpg';
import Navbar from '../Navbar/Navbar';
import FooterPage from '../Footer/Footer';
import axios from 'axios';

class Planting_machines extends Component {
  onHandleClick = (e) => {
    const payload = {
      Machine_Name: "Potato Planter",
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
      onHandleClick1 = (e) => {
        const payload = {
          Machine_Name: "AgriMec Planter",
          Price: "1400"
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
          onHandleClick2 = (e) => {
            const payload = {
              Machine_Name: "Seed Drill",
              Price: "1200"
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
              onHandleClick3 = (e) => {
                const payload = {
                  Machine_Name: "Pneu Planter",
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
    <img class="card-img-top" src={Planter}></img>
    <div class="card-body">
      <h4 class="card-title">Potato Planter</h4>
      <p class="card-text">It is mounted on 3 points linkage system,takes the motion from its own wheel.
       you can work on the light soil and heavy soil at 5km/h.</p>
      <a href="LoginPage" class="btn btn-danger" onClick={this.onHandleClick}>Book Now</a>
      <button class="btn btn-info" id="hour">1500/hr</button>
    </div>
  </div>
  </div>
  </div>
  <div className="col-xs-1 col-sm-1 col-md-1 col-lg-1"></div>
  <div  className="col-xs-2 col-sm-2 col-md-2 col-lg-2">
  <div class="container">
  <div class="card">
    <img class="card-img-top" src={planter1}></img>
    <div class="card-body">
      <h4 class="card-title">AgriMec Planter</h4>
      <p class="card-text">It is an Universal Type can be used for cotton, corn,
        soy bean, etc.It is maintenance free machine and it is lower model of pneumatic seed drill.</p>
      <a href="LoginPage" class="btn btn-danger" onClick={this.onHandleClick1}>Book Now</a>
      <button class="btn btn-info" id="hour">1400/hr</button>
    </div>
  </div>
  </div>
  </div>
  <div className="col-xs-1 col-sm-1 col-md-1 col-lg-1"></div>
  <div  className="col-xs-2 col-sm-2 col-md-2 col-lg-2">
  <div class="container">
  <div class="card">
    <img class="card-img-top" src={planter2}></img>
    <div class="card-body">
      <h4 class="card-title">Seed Drill</h4>
      <p class="card-text">Agrional Trailed Mechanical Seed Drill, pulled by tractor and
         similar seeds together with fertilizer and depth continuously,thus how it works with supported machine. Click below to book now.
     </p>
      <a href="LoginPage" class="btn btn-danger" onClick={this.onHandleClick2}>Book Now</a>
      <button class="btn btn-info" id="hour">1200/hr</button>
    </div>
  </div>
  </div>
  </div>
  <div className="col-xs-1 col-sm-1 col-md-1 col-lg-1"></div>
  <div  className="col-xs-2 col-sm-2 col-md-2 col-lg-2">
  <div class="container">
  <div class="card">
    <img class="card-img-top" src={planter3}></img>
    <div class="card-body">
      <h4 class="card-title">Pneu Planter</h4>
      <p class="card-text">Agrional Mounted Precision Pneumatic Planter can precisely sow every kind of seeds
       in any sowing space and at any row space.
     </p>
      <a href="LoginPage" class="btn btn-danger" onClick={this.onHandleClick3}>Book Now</a>
     <button class="btn btn-info" id="hour">1500/hr</button>
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

export default Planting_machines;