import React, { Component } from 'react';
import './Harvest_page.css';
import harvest from '../Images/harvest.jpeg';
import harvest1 from '../Images/harvest1.jpeg';
import harvest2 from '../Images/harvest2.jpeg';
import harvest3 from '../Images/harvest3.jpeg';
import Navbar from '../Navbar/Navbar';
import FooterPage from '../Footer/Footer';

class Harvest_page extends Component {
    render() {
        return (
            <div>
           <Navbar/>
            <div class="row main_container">
            <div className="col-xs-1 col-sm-1 col-md-1 col-lg-1"></div>
                <div className="col-xs-2 col-sm-2 col-md-2 col-lg-2">
                <div class="container">
<div class="card">
<img class="card-img-top" src={harvest}></img>
<div class="card-body">
  <h4 class="card-title">Raggi-Cut</h4>
  <p class="card-text">The Greaves power reaper is a high performing farm equipment. It is powered by the powerful Greaves
   Engine. It is suitable for the harvesting of Ragi. It gives very high speed cutting productivity with minimum lossage.Click below button to book now.</p>
  <a href="Calendar" class="btn btn-primary">Book Now</a>
</div>
</div>
</div>
</div>
<div className="col-xs-1 col-sm-1 col-md-1 col-lg-1"></div>
<div  className="col-xs-2 col-sm-2 col-md-2 col-lg-2">
<div class="container">
<div class="card">
<img class="card-img-top" src={harvest1}></img>
<div class="card-body">
  <h4 class="card-title">S Paddy cut-mac</h4>
  <p class="card-text">The combine harvester consists of cutting unit, threshing unit and cleaning and grain handling units.
   The cutting section includes reel,an auger and a feeder conveyer.paddy harvest through Super-SMS(Super straw management system)
    equipment attached to Combine Harvester.</p>
  <a href="Calendar" class="btn btn-primary">Book Now</a>
</div>
</div>
</div>
</div>
<div className="col-xs-1 col-sm-1 col-md-1 col-lg-1"></div>
<div  className="col-xs-2 col-sm-2 col-md-2 col-lg-2">
<div class="container">
<div class="card">
<img class="card-img-top" src={harvest2}></img>
<div class="card-body">
  <h4 class="card-title">Corn-cut mac</h4>
  <p class="card-text">The combine harvester consists of a cutting unit, threshing unit and cleaning and grain handling units.
   The cutting section is specially designed to harvest maize crop and the header can be fitted to conventional grain combines.
 </p>
  <a href="Calendar" class="btn btn-primary">Book Now</a>
</div>
</div>
</div>
</div>
<div className="col-xs-1 col-sm-1 col-md-1 col-lg-1"></div>
<div  className="col-xs-2 col-sm-2 col-md-2 col-lg-2">
<div class="container">
<div class="card">
<img class="card-img-top" src={harvest3}></img>
<div class="card-body">
  <h4 class="card-title">L Paddy cut-mac</h4>
  <p class="card-text">The combine harvester consists of cutting unit, threshing unit and cleaning and grain handling units.
   The cutting section includes reel, cutter bar, an auger and a feeder conveyer. Threshing section has threshing cylinder, concave. 
 </p>
  <a href="Calendar" class="btn btn-primary">Book Now</a>
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

export default Harvest_page;