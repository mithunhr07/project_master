import React, { Component } from 'react';
import { connect } from 'react-redux';
import './Register.css';
import BrowserHistory from '../Utils/BrowserHistory';
import {registerHandle} from  '../../Action/Signup_action'
import FooterPage from '../Footer/Footer';
import Navbar from '../Navbar/Navbar';
import axios from "axios";

class RegisterPage extends Component {
constructor(props) {
super(props);
this.state = {
username: '',
Lastname: '',
email: '',
password: '',
Confirmpassword: '',
Mobnum: '',
ferr: '',
lerr: '',
uerr: '',
perr: '',
cperr: '',
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
username: this.state.username,
Lastname: this.state.Lastname,
email: this.state.email,
password: this.state.password,
Confirmpassword: this.state.Confirmpassword,
Mobnum: this.state.Mobnum

}
// BrowserHistory.push('/login')
// signup(reqst).then(res => {
// if (res.data === "User Created Succesfully") {
// alert("UserCreated Successfully")
// BrowserHistory.push('/login')
// }

// })

if (this.state.username.length === 0 && this.state.Lastname.length === 0 && this.state.email.length === 0 && this.state.password.length === 0 && this.state.Confirmpassword.length === 0 && this.state.Mobnum.length === 0) {
this.setState({
usererr: "username is required", 
lerr: "Lastname is required",
uerr: "Email is required",
perr: "Password is required",
cperr: "ConrimPassword is required",
phnerr: "Phonumber is required"

})
}
else if (this.state.username.length === 0) {
this.setState({ usererr: "Username is required" })
}
else if (this.state.Lastname.length === 0) {
this.setState({ lerr: "Lastname is required" })
}
else if (this.state.email.length === 0) {
this.setState({ uerr: "mail address is required" })
}
else if (this.state.password.length === 0) {
this.setState({ perr: "Password is required" })
}
else if (this.state.Confirmpassword.length === 0) {
this.setState({ Cperr: "Password is required" })
}
else if (this.state.Mobnum.length === 0) {
this.setState({ phnerr: "Password is required" })
}

else if (!this.state.username.match(/^[A-Za-z]{5,15}$/)) {
this.setState({ ferr: "Please enter the valid username" })
}
else if (!this.state.Lastname.match(/^[A-Za-z]{1,15}$/)) {
this.setState({ lerr: "Please enter the valid lname" })
}
else if (!this.state.email.match(/^[a-zA-Z0-9]+@+[a-zA-Z0-9]+.+[A-z]$/)) {
this.setState({ uerr: "Please enter the valid email" })
}
else if (!this.state.password.match(/^[@#][A-Za-z0-9]{9,11}$/)) {
this.setState({ perr: "Please enter the valid password" })
}
else if (!this.state.Confirmpassword.match(/^[@#][A-Za-z0-9]{9,11}$/)) {
this.setState({ cperr: "Please enter the valid password" })
}
else if (!this.state.Mobnum.match(/^[0-9]{10}$/)) {
this.setState({ phnerr: "Please enter the valid number" })
}

else {
BrowserHistory.push('/LoginForm')
this.Loginaction.props.success("Register Successfully")
}
this.props.registerHandle(payload);

const url = "http://localhost:8008/Signup"
return axios({
method: 'POST',
url,
data: payload
}).then(async (res) => {
console.log(res);
// BrowserHistory.push('/login')
})

}


render() {
return (
  <div>
    <Navbar/>
<div class="row">
<div class="col-sm-4 col-lg-4 col-md-4 col-xs-4"></div>
<div class="col-sm-2 col-lg-2 col-md-2 col-xs-2 frm">
<h1>Signup</h1>
<div className="regcont">
<div><label ><b>User Name</b></label><br /></div>
<div><input type="text" name="username" className="one" onChange={this.onHandleChange} /><br /></div>
<div><p id="errclr">{this.state.usererr}</p></div>
<div><label><b>Last Name</b></label><br /></div>
<div><input type="text" name="Lastname" className="one" onChange={this.onHandleChange} /><br /></div>
<div> <p id="errclr" >{this.state.lerr}</p></div>

<div><label ><b>Email</b></label><br /></div>
<div> <input type="text" name="email" className="one" onChange={this.onHandleChange} /><br /></div>
<div> <p id="errclr">{this.state.uerr}</p></div>
<div><label ><b>Password</b></label><br /></div>
<div> <input type="password" name="password" className="one" onChange={this.onHandleChange} /><br /><br /></div>
<div> <p id="errclr">{this.state.perr}</p></div>
<div> <label ><b>Confirmpassword</b></label><br /></div>
<div> <input type="password" name="Confirmpassword" className="one" onChange={this.onHandleChange} /><br /><br /></div>
<div> <p id="errclr">{this.state.cperr}</p></div>
<div> <label ><b>Mobilenumber</b></label><br /></div>
<div> <input type="text" name="Mobnum" className="one" onChange={this.onHandleChange} /><br /><br /></div>
</div>
<a href="LoginPage" onClick={this.onHandleClicks}>you have already account</a>
<p id="errclr" >{this.state.phnerr}</p>
<button onClick={this.onHandleClick} className="btn1"><b>Register</b></button>
<a href="" onClick={this.onHandleClicksCancel} className="canbtn">Cancel</a>
</div>
<div class="col-sm-4 col-lg-4 col-md-4 col-xs-4">
</div>
</div>
<FooterPage/>
</div>
);
}
}
const mapStateToProps=(state)=>{
const {Firstname,Lastname,email,password,Confirmpassword,Mobnum }=state.RegisterReducer
return {Firstname,Lastname,email,password,Confirmpassword,Mobnum }
}
export default connect(mapStateToProps,{registerHandle}) (RegisterPage);
