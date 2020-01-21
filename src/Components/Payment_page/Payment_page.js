import React, { Component } from 'react';
import './Payment_page.css'
import Navbar from '../Navbar/Navbar';
import FooterPage from '../Footer/Footer';
import pay from '../Images/payment.jpg';
import axios from 'axios';

import BrowserHistory from '../Utils/BrowserHistory';

class Payment_page extends Component {
  constructor(props) {
    super(props);
    this.state={
      firstname:'',
      email:'',
      address:'',
      city:'',
      state:'',
      zip:'',
      cardname:'',
      cardnumber:'',
      expmonth:'',
      expyear:'',
      cvv:'',
    };
}
onHandleChange=(e)=>{
        this.setState({[e.target.name]:e.target.value});
    }
    onHandleClicks = (e) => {

      BrowserHistory.push('/Payment'); 
      
      }
    onHandleClick=()=>{
      debugger;
      const payload={Fullname:this.state.firstname,email:this.state.email,Address:this.state.address,
        City:this.state.city,State:this.state.state,Zip:this.state.zip, Name_on_card:this.state.cardname,
        Credit_Number:this.state.cardnumber,Exp_month:this.state.expmonth,Exp_year:this.state.expyear,CVV:this.state.cvv}
      console.log(payload)
      const options = {
          url: 'http://localhost:8008/Billing',
          method: 'POST',
          data: payload
          };
          axios(options)
          .then(response => {
          console.log(response.status);
        
        });
  }

render() {
    return (
      <div>
        <Navbar/>
          <h4 className="bill_text">Easiest Way to Pay the Bill</h4>
          <p className="service_text">For your professional services</p>
          <div class="row">
            <div class="col">
            <img src={pay} className="payment_img"></img>
          </div>
              <div class="col"  id="backgr_color">
              <div id="container_width">
              <form>
              <div class="row">
              <div class="col card_container1">
              <h3 className="billing_align">Billing Address</h3>
              <label><i class="fa fa-user"></i> Full Name</label>
              <input type="text" className="input_width" name="firstname" placeholder="Enter your full name" onChange={this.onHandleChange}/><br></br><br></br>
              <label><i class="fa fa-envelope"></i> Email</label>
              <input type="text" className="input_width" name="email" placeholder="mithunhrm07@gmail.com" onChange={this.onHandleChange}/><br></br><br></br>
              <label><i class="fa fa-address-card-o"></i> Address</label>
              <input type="text" className="input_width" name="address" placeholder="Enter your address" onChange={this.onHandleChange}/><br></br><br></br>
              <label><i class="fa fa-institution"></i> City</label>
              <input type="text" className="input_width" name="city" placeholder="Enter your city name" onChange={this.onHandleChange}/><br></br><br></br>
              
              <label>State</label>
              <input type="text" className="input_width" name="state" placeholder="Enter your state name" onChange={this.onHandleChange}/>
              
              </div>
             
              </div>
          
            
            
              {/* <input type="submit" id="button" value="Continue to checkout" onClick={this.onHandleClicks} class="btn" onClick={this.onHandleClick}/> */}
              </form>
     
              </div>
              </div>

              </div>
              <FooterPage/>
      </div>
    );
  }
}

export default Payment_page;
