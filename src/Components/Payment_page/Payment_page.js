import React, { Component } from 'react';
import './Payment_page.css'
import Navbar from '../Navbar/Navbar';
import FooterPage from '../Footer/Footer';
import pay from '../Images/payment.jpg'
class Payment_page extends Component {
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
              <input type="text" className="input_width" name="firstname" placeholder="Enter your full name"/>
              <label><i class="fa fa-envelope"></i> Email</label>
              <input type="text" className="input_width" name="email" placeholder="mithunhrm07@gmail.com"/>
              <label><i class="fa fa-address-card-o"></i> Address</label>
              <input type="text" className="input_width" name="address" placeholder="Enter your address"/>
              <label><i class="fa fa-institution"></i> City</label>
              <input type="text" className="input_width" name="city" placeholder="Enter your city name"/>
              <div class="row">
              <div class="col">
              <label>State</label>
              <input type="text" className="input_width" name="state" placeholder="Enter your state name"/>
              </div>
              <div class="col">
              <label>Zip</label>
              <input type="text" className="input_width" name="zip" placeholder="571438"/>
              </div>
              </div>
              </div>
              <div class="col card_container2">
              <h3 className="payment_align">Payment</h3>
              <label className="payment_align">Accepted Cards</label>
              <div>
              <i class="fa fa-cc-visa"></i>
              <i class="fa fa-cc-amex"></i>
              <i class="fa fa-cc-mastercard"></i>
              <i class="fa fa-cc-discover"></i>
              </div>
              <label>Name on Card</label>
              <input type="text" className="input_width1" name="cardname" placeholder="Mithun"/>
              <label>Credit card number</label>
              <input type="text" className="input_width1" name="cardnumber" placeholder="1234-1234-1234-1234"/>
              <label>Exp Month</label>
              <input type="text" className="input_width1" name="expmonth" placeholder="March"/>
              <div class="row">
              <div class="col">
              <label>Exp Year</label>
              <input type="text" className="input_width2" name="expyear" placeholder="2021"/>
              </div>
              <div class="col">
              <label>CVV</label>
              <input type="text" className="input_width2" name="cvv" placeholder="352"/>
              </div>
              </div>
              </div>
              </div>
              
              <input type="submit" id="button" value="Continue to checkout" class="btn"/>
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
