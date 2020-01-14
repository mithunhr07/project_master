import React, { Component } from 'react';
import { connect } from 'react-redux';
import './LoginPage.css';
import background from '../Images/background.jpeg';
import BrowserHistory from '../Utils/BrowserHistory';
import {loginHandle} from  '../../Action/Login_action';
import FooterPage from '../Footer/Footer';
import Navbar from '../Navbar/Navbar';
import axios from "axios";


class LoginPage extends Component {
constructor(props) {
super(props);
this.state = {
// Firstname: '',
// Lastname: '',
// email: '',
password: '',
// Confirmpassword: '',
Mobnum: '',
// ferr: '',
// lerr: '',
// uerr: '',
perr: '',
// cperr: '',
phnerr: ''


};
}
onHandleChange = (event) => {

this.setState({ [event.target.name]: event.target.value });
console.log( event.target.value )
}

onHandleClicks = (e) => {

BrowserHistory.push('/RegisterPage'); 

}
onHandleClicksCancel = (e) => {

BrowserHistory.push('/LoginForm'); 

}


onHandleClick = (e) => {
debugger;
e.preventDefault();
const payload = {
// Firstname: this.state.Firstname,
// Lastname: this.state.Lastname,
// email: this.state.email,
password: this.state.password,
// Confirmpassword: this.state.Confirmpassword,
Mobnum: this.state.Mobnum

}
console.log(payload)
// BrowserHistory.push('/login')
// signup(reqst).then(res => {
// if (res.data === "User Created Succesfully") {
// alert("UserCreated Successfully")
// BrowserHistory.push('/login')
// }

// })

if ( this.state.password.length === 0 &&  this.state.Mobnum.length === 0) {
this.setState({
// ferr: "Firstname is required", 
// lerr: "Lastname is required",
// uerr: "Email is required",
perr: "Password is required",
// cperr: "ConrimPassword is required",
phnerr: "Phonumber is required"

})
}



else if (this.state.password.length === 0) {
this.setState({ perr: "Password is required" })
}

else if (this.state.Mobnum.length === 0) {
this.setState({ phnerr: "Password is required" })
}



// else if (!this.state.password.match(/^[@#][A-Za-z0-9]{9,11}$/)) {
// this.setState({ perr: "Please enter the valid password" })
// }

else if (!this.state.Mobnum.match(/^[0-9]{10}$/)) {
this.setState({ phnerr: "Please enter the valid number" })
}

else {
// BrowserHistory.push('/LoginForm')
// this.Loginaction.props.success("Register Successfully")

// this.props.loginHandle(payload);

const url = "http://localhost:8008/Signin"
return axios({
method: 'POST',
url,
data: payload
}).then(async (res) => {
console.log(res);
BrowserHistory.push('/HomePage')
})

}
}

render() {
return (
  <div >
    <Navbar/>
<div>
<div class="row">
<div class="col-sm-4 col-lg-4 col-md-4 col-xs-4 "></div>
<div class="col-sm-2 col-lg-2 col-md-2 col-xs-2" id="signup_container">
<h1>Login</h1>
<div>

<div> <label ><b>Mobilenumber</b></label><br /></div>
<div> <input type="text" name="Mobnum"  onChange={this.onHandleChange} /><br /><br /></div>
<div><p className="error_color">{this.state.phnerr}</p></div>
<div><label ><b>Password</b></label><br /></div>
<div> <input type="password" name="password"  onChange={this.onHandleChange} /><br /><br /></div>
<div> <p  className="error_color">{this.state.perr}</p></div>
</div>
<a href="/HomePage" onClick={this.onHandleClicks}>you have already account</a><br></br>
<button onClick={this.onHandleClick} className="btn_width"><b>Login</b></button>
<button onClick={this.onHandleClicks} className="btn_align"><b>Register</b></button><br></br>
<a href="" onClick={this.onHandleClicksCancel} id="cancel_btn">Cancel</a>
</div>
<div class="col-sm-4 col-lg-4 col-md-4 col-xs-4">
</div>
</div>
</div>
<FooterPage/>
</div>
);
}
}
const mapStateToProps=(state)=>{
const {password,Mobnum }=state.Login_reducer
return {password,Mobnum }
}
export default connect(mapStateToProps,{loginHandle}) (LoginPage);
