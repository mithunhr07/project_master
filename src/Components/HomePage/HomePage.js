import React, { Component } from 'react';
import agri_img from '../Images/office.jpg';
import './HomePage.css';
import corn_cutter from '../Images/corn_cutter_img.jpeg';
import mini_tractor from '../Images/mini_tractor_img.jpeg';
import tiller from '../Images/tiller_img.jpg';
import card_img from '../Images/homepage_img.jpg';
import FooterPage from '../Footer/Footer';
import Navbar from '../Navbar/Navbar';




class HomePage extends Component {
    render() {
        return (
            <div>
                <div>
                 <Navbar/>
                <img id="homepage_img" src={agri_img}></img>
                    <h2 class="text-block">Creating Machinery World</h2>
                    <a href="/#section1" class="fa fa-arrow-down arrow"></a>
                    </div>
                    <section id="section1">
                    <div class="row">
                    <div class="col-md-1"></div>
                    <div class="col-md-3">
         <div class="card md-3 text-white bg-dark card-body1">
            <div class="card-body">
               <h5 class="card-title">SERVICES</h5>
               <p class="card-text">Use Machine For Better Improvement</p><br></br><br></br><br></br><br></br>
               <a href="http://www.jquery2dotnet.com/" class="btn btn-outline-light btn-sm" id="Service_button">DISCOVER</a>
            </div>
       </div> 
      </div>
      <div class="col-md-1"></div>
      <div class="col-md-6">
               
                    <img src={card_img} class="img-fluid" alt="photo"></img>
                
                </div>
                </div>
                </section>
                <div className="spacing">
                <i class="fa fa-quote-right" id="inverted_comma_icon"></i>
                <div className="services">
                <h2>Focused on the needs of the farmer.</h2>
                <p>We have placed a set of services and tools for farmers at your disposal
                   to help<br></br> make your day-to-day work easier,in order to optimise profits from your investment and<br></br>
                    allow you to find out the requirements of your land in greater detail.
                </p>
                </div>
                </div>
    <div class="row spacing">
    <div class="col-md-1"></div>
    <div class="col-md-3">
    <div id="demo" class="carousel slide, carousel_container" data-ride="carousel" >





<div class="carousel-inner">
  <div class="carousel-item active">
    <img src={corn_cutter}></img>
  </div>
  <div class="carousel-item">
    <img src={mini_tractor}></img>
  </div>
  <div class="carousel-item">
    <img src={tiller}></img>
  </div>
</div>


<a class="carousel-control-prev" href="#demo" data-slide="prev">
  <span class="carousel-control-prev-icon"></span>
</a>
<a class="carousel-control-next" href="#demo" data-slide="next">
  <span class="carousel-control-next-icon"></span>
</a>
</div>
</div>
    <div class="col-md-4"></div>
   
    <div class="card mb-4 text-white bg-dark card_edit">
            <div class="card-body">
               <h5 class="card-title">Machines with New Technology</h5>
               <p class="card-text">Newly Invented Machines</p><br></br><br></br><br></br><br></br>
               <a href="http://www.jquery2dotnet.com/" class="btn btn-outline-light btn-sm" id="Machinery_button">DISCOVER</a>
            </div>
       </div> 

    <div class="col-md-3"></div>
    </div><br></br><br></br><br></br><br></br><br></br><br></br><br></br>
    <FooterPage/>
    </div>
          
            
        );
    }
}

export default HomePage;