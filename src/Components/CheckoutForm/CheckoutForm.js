import React, { Component } from 'react';
import { Elements, StripeProvider } from 'react-stripe-elements';
import Payment from './Payment';
import Mithun from '../Mithun';
class Checkoutform extends Component{
    render() {
   return(
        <div>
             <StripeProvider apiKey="pk_test_TYooMQauvdEDq54NiTphI7jx">
          <div className="example">
            <Elements>
            <Mithun/>
            </Elements>
          </div>
        </StripeProvider>
        </div>


   )

    }


} 
export default Checkoutform;