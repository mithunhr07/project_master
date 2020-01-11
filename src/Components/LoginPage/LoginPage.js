import React, { Component } from 'react';
import { connect } from 'react-redux';
// import './Register.css';
import BrowserHistory from '../Utils/BrowserHistory';
import {loginHandle} from  '../../Action/Login_action';
import FooterPage from '../Footer/Footer';
import Navbar from '../Navbar/Navbar';


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

}
onHandleClicks = (e) => {

BrowserHistory.push('/LoginForm'); 

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



else if (!this.state.password.match(/^[@#][A-Za-z0-9]{9,11}$/)) {
this.setState({ perr: "Please enter the valid password" })
}

else if (!this.state.Mobnum.match(/^[0-9]{10}$/)) {
this.setState({ phnerr: "Please enter the valid number" })
}

else {
BrowserHistory.push('/LoginForm')
this.Loginaction.props.success("Register Successfully")
}
this.props.loginHandle(payload);

// const url = "http://localhost:4013/Signup"
// return axios({
// method: 'POST',
// url,
// data: reqst
// }).then(async (res) => {
// console.log(res);
// BrowserHistory.push('/login')
// })

}


render() {
return (
  <div>
    <Navbar/>
<div className="register">
<div class="container">
<div class="row">
<div class="col-sm-4 col-lg-4 col-md-4 col-xs-4"></div>
<div class="col-sm-4 col-lg-4 col-md-4 col-xs-4 frm">
<h1>Signup</h1>
<div className="regcont">

<div><label ><b>Password</b></label><br /></div>
<div> <input type="password" name="password" className="one" onChange={this.onHandleChange} /><br /><br /></div>
<div> <p >{this.state.perr}</p></div>

<div> <label ><b>Mobilenumber</b></label><br /></div>
<div> <input type="text" name="Mobnum" className="one" onChange={this.onHandleChange} /><br /><br /></div>
</div>
<a href="/HomePage" onClick={this.onHandleClicks}>you have already account</a>
<p >{this.state.phnerr}</p>
<button onClick={this.onHandleClick} className="btn1"><b>Login</b></button><a href="" onClick={this.onHandleClicksCancel}>Cancel</a>
</div>
<div class="col-sm-4 col-lg-4 col-md-4 col-xs-4">
</div>
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
