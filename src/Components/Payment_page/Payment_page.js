import React, { Component } from 'react';
import './Payment_page.css'
import Navbar from '../Navbar/Navbar';
import FooterPage from '../Footer/Footer';
import pay from '../Images/payment.jpg';
import axios from 'axios';

import BrowserHistory from '../Utils/BrowserHistory';
import Checkoutform from '../CheckoutForm/CheckoutForm';
import Calendar_page from '../Calendar/Calendar_page';
import Admintable from '../AdminPage/Admintable';
import { Calendar, CalendarCell, CalendarWeekCell, CalendarNavigationItem, CalendarHeaderTitle, DateInput, DatePicker, TimePicker, MultiViewCalendar, DateRangePicker, DateTimePicker } from '@progress/kendo-react-dateinputs'
import '@progress/kendo-react-intl'
import '@progress/kendo-react-tooltip'
import '@progress/kendo-react-common'
import '@progress/kendo-react-popup'
import '@progress/kendo-date-math'
import '@progress/kendo-react-dropdowns'

class Payment_page extends Component {
  constructor(props) {
    super(props);
    this.state={
      firstname:'',
      email:'',
      address:'',
      city:'',
      state:'',
      showMe:true
    };
}
Operation()
{
this.setState({
showMe:!this.state.showMe
})
}
onHandleChange=(e)=>{
        this.setState({[e.target.name]:e.target.value});
    }
    // onHandleClicks = (e) => {

    //   BrowserHistory.push('/Admintable'); 
      
    //   }
  //   onHandleClick=()=>{
  //     debugger;
  //     const payload={Fullname:this.state.firstname,email:this.state.email,Address:this.state.address,
  //       City:this.state.city,State:this.state.state,Zip:this.state.zip, Name_on_card:this.state.cardname,
  //       Credit_Number:this.state.cardnumber,Exp_month:this.state.expmonth,Exp_year:this.state.expyear,CVV:this.state.cvv}
  //     console.log(payload)
  //     const options = {
  //         url: 'http://localhost:8008/Billing',
  //         method: 'POST',
  //         data: payload
  //         };
  //         axios(options)
  //         .then(response => {
  //         console.log(response.status);
        
  //       });
  // }

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
          
          <div class="col">
          <div className="example-wrapper" id="calendar">
               <DateTimePicker />
               <button onClick={this.onHandleClicks} className="btn_align" onClick={()=>this.Operation()}><b>Next</b></button>
            </div>
          </div>
          
                <div class="col" hidden={this.state.showMe}  id="backgr_color" >
                {/* <div hidden={this.state.showMe}> */}
                  <Admintable/>
                  <Checkoutform/>
                  </div>
                {/* </div>         */}
              </div>
              <FooterPage/>
      </div>
    );
  }
}

export default Payment_page;
