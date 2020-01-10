import React, { Component } from 'react';
import './Cultivation_page.css'
import cultivation from '../Images/cultivation.jpg';
import cultivation1 from '../Images/cultivation1.png';
import cultivation2 from '../Images/cultivation2.jpg';
import cultivation3 from '../Images/cultivation3.jpeg';
import Navbar from '../Navbar/Navbar';
import FooterPage from '../Footer/Footer';

class Cultivation_page extends Component {
    render() {
        return (
            <div>
            <Navbar/>
            <div class="row main_container">
            <div className="col-xs-1 col-sm-1 col-md-1 col-lg-1"></div>
                <div className="col-xs-2 col-sm-2 col-md-2 col-lg-2">
                <div class="container">
<div class="card">
<img class="card-img-top" src={cultivation}></img>
<div class="card-body">
  <h4 class="card-title">Potato Cultivater</h4>
  <p class="card-text">The potato is the largest vegetable which very quickly required mechanized planting, 
  first of all using simple planters with cups on a belt. This was followed by belt planters with electronic control for
   high speed planting.</p>
  <a href="#" class="btn btn-primary">Book Now</a>
</div>
</div>
</div>
</div>
<div className="col-xs-1 col-sm-1 col-md-1 col-lg-1"></div>
<div  className="col-xs-2 col-sm-2 col-md-2 col-lg-2">
<div class="container">
<div class="card">
<img class="card-img-top" src={cultivation1}></img>
<div class="card-body">
  <h4 class="card-title">Cabbage Cultivater</h4>
  <p class="card-text">Weed control machine that uses computer 
  technology and a spinning blade to remove weeds. Note the disc-shaped cultivation blade with a notched cut-out to
   allow the blade to spin around transplanted cabbage.</p>
  <a href="#" class="btn btn-primary">Book Now</a>
</div>
</div>
</div>
</div>
<div className="col-xs-1 col-sm-1 col-md-1 col-lg-1"></div>
<div  className="col-xs-2 col-sm-2 col-md-2 col-lg-2">
<div class="container">
<div class="card">
<img class="card-img-top" src={cultivation2}></img>
<div class="card-body">
  <h4 class="card-title">Paddy Cultivater</h4>
  <p class="card-text">Paddy cultivation is a very water intensive and laborious job. Paddy crop can be cultivated in 
  different methods with different level of water and labour requirement. If you want to do rice cultivation then 
  here is the complete guide on scientifically.
 </p>
  <a href="#" class="btn btn-primary">Book Now</a>
</div>
</div>
</div>
</div>
<div className="col-xs-1 col-sm-1 col-md-1 col-lg-1"></div>
<div  className="col-xs-2 col-sm-2 col-md-2 col-lg-2">
<div class="container">
<div class="card">
<img class="card-img-top" src={cultivation3}></img>
<div class="card-body">
  <h4 class="card-title">Sugarcane Cultivater</h4>
  <p class="card-text">This is a tractor mounted machine and can be drawn by any tractor of 35 hp. 
  This can be lifted or lowered by the hydraulic system of the tractor.If you want to do cultivation then 
  here is the complete guide on scientifically.
 </p>
  <a href="#" class="btn btn-primary">Book Now</a>
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

export default Cultivation_page;