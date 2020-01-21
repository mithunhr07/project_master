import React, { Component } from 'react';
import { CardElement, injectStripe } from 'react-stripe-elements';
import './Payment.css';

class Payment extends Component {
  constructor(props) {
    super(props);
    this.state = { complete: false };
    this.submit = this.submit.bind(this);
  }

  async submit(ev) {
      // debugger;
    const { token } = await this.props.stripe.createToken({ name: "Name" });
    const response = await fetch("/charge", {
      method: "POST",
      headers: { "Content-Type": "text/plain" },
      body: token.id
    });
  
    if (response)
      alert("Your booking successfully")
      // if (response.ok) this.setState({complete: true});

}


  render() {
    if (this.state.complete) return <h1>Purchase Complete</h1>;
    return (
        <div class="container">
          <div class="row">
            <div class="col-sm-1 col-lg-1 col-md-1 col-xs-1"></div>
            <div class="col-sm-6 col-lg-6 col-md-6 col-xs-6">
              <div className="Checkout">
                <p></p>
                <CardElement />
                <button class="pay" onClick={this.submit}>Pay</button>
              </div>
            </div>
            <div class="col-sm-3 col-lg-3 col-md-3 col-xs-3"></div>
          </div>
        </div>
    );
  }
}

export default injectStripe(Payment);