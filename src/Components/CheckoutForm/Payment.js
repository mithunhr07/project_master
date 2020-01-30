import React, { Component } from 'react';
import { CardElement, injectStripe } from 'react-stripe-elements';
import './Payment.css'

class Payment extends Component {
    constructor(props) {
        super(props);
        this.state = { complete: false };
        this.submit = this.submit.bind(this);
    }

    async submit(ev) {
        debugger;
        const { token } = await this.props.stripe.createToken({ name: "Name" });
        const response = await fetch("/charge", {
            method: "POST",
            headers: { "Content-Type": "text/plain" },
            body: token.id
        });

        if (response.ok)
            window.alert("Your booking successfully")
        if (response.ok) this.setState({ complete: true });

    }

    render() {
        if (this.state.complete) return <h1 className="purchase">Purchase Complete </h1>
        return (
            <div class="container_check">
                <CardElement />
                <button class="pay" onClick={this.submit}>Proceed to Purchase</button>
            </div>
        );
    }
}

export default injectStripe(Payment);