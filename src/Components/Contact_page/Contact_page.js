import React, { Component } from 'react';
import './Contact_page.css';
import logo from '../Images/logo.png';
import company from '../Images/company.jpg';
import Navbar from '../Navbar/Navbar';
import FooterPage from '../Footer/Footer';
import axios from "axios";
import BrowserHistory from '../Utils/BrowserHistory'

class Contact_page extends Component {
    constructor(props) {
        super(props);
        this.state={
            name:'',
            phone_number:'',
            email:'',
            message:'',
        };
    }
    onHandleChange=(e)=>{
        this.setState({[e.target.name]:e.target.value});
    }
    onHandleClick=()=>{
        debugger;
        // const {name,phone_number,email,message}=this.state;
        const payload={Name:this.state.name,Mobnum:this.state.phone_number,email:this.state.email,Message:this.state.message}
        console.log(payload)
        const options = {
            url: 'http://localhost:8008/Contact',
            method: 'POST',
            data: payload
            };
            axios(options)
            .then(response => {
            console.log(response.status);
            // sessionStorage.setItem('authentication', response.data.token)
                // sessionStorage.setItem('userEmail', response.data.email)
            // BrowserHistory.push('/HomePage')
          });
    }
    render() {
        return (
            <div>
                <Navbar/>
               <div class="row">
               <div className="col-xs-1 col-sm-1 col-md-1 col-lg-1"></div>
               <div className="col-xs-3 col-sm-3 col-md-3 col-lg-3 contact_card2">
               <img class="logo_img2" src={logo}></img>
               <div class="card-body card-body1">
               <h4 className="card-text3 align3">Contact us to book a</h4>
               <h4 className="card-text3 align4">machinery and turn your</h4>
               <h4 className="card-text3 align3">dream into a reality.</h4>
            </div>
            </div>
            <div className="col-xs-1 col-sm-1 col-md-1 col-lg-1"></div>
            <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6 card2">
                <p className="text3">Please fill out this form and we will</p>
                <p className="text4">get back to you shortly</p>
                <form>
                  <div class="row">
      <div class="col">
      <label>Enter Your Name</label>
        <input type="text3" class="form-control" name="name" id="email" placeholder="Enter your name" onChange={this.onHandleChange} />
      </div>
      <div class="col">
      <label>Enter Your Phone Number</label>
        <input type="number" class="form-control" name="phone_number" placeholder="Enter your phone number" onChange={this.onHandleChange}/>
      </div>
    </div>
    <div class="row">
        <div class="col">
        <label>Enter Your Email</label>
        <input type="@gmail.com" class="form-control" id="email" name="email" placeholder="Enter your email" name="email" onChange={this.onHandleChange}/>
        </div>
    </div>
    <div class="row">
        <div class="col">
        <label>Type Your Message Here</label>
        <textarea name="message" class="form-control" rows="5"  id="comment" onChange={this.onHandleChange}></textarea>
        </div>
    </div>
    <button type="submit" className="button_align1" onClick={this.onHandleClick}>Submit</button>
                </form>
            </div>
            </div>
            <div class="row">
            <div className="col-xs-1 col-sm-1 col-md-1 col-lg-1"></div>
            <div class="card1">
    <div class="card-body card-body1">
      <h4 className="text5">Green World Technologies</h4>
      <p id="address_text_color3">P.Hosahalli SR Patna taluk Mandya Dist,</p>
      <p id="address_text_color4">Pin num:-571438</p>
      <div class="row top_align">
          <div class="col text6">
              <p>Tel: 123-456-7890;</p>
          </div>
          <div class="col text7">
              <p>Fax: 123-456-7890</p>
          </div>
      </div>
      <div class="row">
            <div class="col text_color">
                <p>greenworld@mysite.com</p>
            </div>
      </div>
      
    </div>
  </div>
  <div className="spacing4"></div>
  <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4">
      <img src={company} className="contact_img"></img>
  </div>
            </div>
            <FooterPage/>
            </div>
        );
    }
}

export default Contact_page;