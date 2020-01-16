import React, { Component } from 'react';
import LoginPage from './Components/LoginPage/LoginPage';
import RegisterPage from './Components/RegisterPage/RegisterPage';
import { BrowserRouter as Router, Route , Switch} from 'react-router-dom';
import HomePage from './Components/HomePage/HomePage';
import Planting_machines from './Components/Planting_machines/Planting_machines';
import Irrigation_page from './Components/Irrigation_page/Irrigation_page';
import Harvest_page from './Components/Harvest_page/Harvest_page';
import Cultivation_page from './Components/Cultivation_page/Cultivation_page';
import Miscellaneous_page from './Components/Miscellaneous_page/Miscellaneous_page';
import About_page from './Components/About_page/About_page';
import Contact_page from './Components/Contact_page/Contact_page';
import Calendar from './Components/Calendar/Calendar_page';
import Payment_page from './Components/Payment_page/Payment_page';
import { Admin_page } from './Components/Admin_page/Admin_page';
import CheckoutForm from './Components/CheckoutForm/CheckoutForm';
import {Elements, StripeProvider} from 'react-stripe-elements';



class App extends Component {
  render() {
    return (
      <div className="App">
   <Router> 
   <Switch>
   <Route exact path='/' component={LoginPage}></Route>
   <Route exact path='/RegisterPage' component={RegisterPage}></Route>
   <Route exact path='/HomePage' component={HomePage}></Route>
   <Route exact path='/Planting_machines' component={Planting_machines}></Route>
   <Route exact path='/Irrigation_page' component={Irrigation_page}></Route>
   <Route exact path='/Harvest_page' component={Harvest_page}></Route>
   <Route exact path='/Cultivation_page' component={Cultivation_page}></Route>
   <Route exact path='/Miscellaneous_page' component={Miscellaneous_page}></Route>
   <Route exact path='/About_page' component={About_page}></Route>
   <Route exact path='/Contact_page' component={Contact_page}></Route>
   <Route exact path='/Payment_page' component={Payment_page}></Route>
   <Route exact path='/Calendar' component={Calendar}></Route>
   </Switch>
 </Router>  
 <StripeProvider apiKey="pk_test_TYooMQauvdEDq54NiTphI7jx">
        <div className="example">
          <Elements>
            <CheckoutForm />
          </Elements>
        </div>
      </StripeProvider>
      </div>
    );
  }
}

export default App;