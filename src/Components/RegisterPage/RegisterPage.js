import React, { Component } from 'react';
import { connect } from 'react-redux';
import './Register.css';
import BrowserHistory from '../Utils/BrowserHistory'

import { registerHandle } from '../../Action/Signup_action';


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

		BrowserHistory.push('/LoginPage'); 

}
	onHandleClicksCancel = (e) => {

		BrowserHistory.push('/RegisterPage'); 

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
		// signup(reqst).then(res => {
		// if (res.data === "User Created Succesfully") {
		// alert("UserCreated Successfully")
		// BrowserHistory.push('/login')
		// }

		// })
  var a=0;
		if (this.state.username.length === 0 && this.state.Lastname.length === 0 && this.state.email.length === 0 && this.state.password.length === 0 && this.state.Confirmpassword.length === 0 && this.state.Mobnum.length === 0) {
			this.setState({
				ferr: "Firstname is required",
				lerr: "Lastname is required",
				uerr: "Email is required",
				perr: "Password is required",
				cperr: "ConrimPassword is required",
				phnerr: "Phonumber is required"

			})
		}
		else if (this.state.username.length === 0) {
			this.setState({ ferr: "Firstname is required" })
		}
		else if (this.state.Lastname.length === 0) {
			this.setState({ lerr: "Lastname is required" })
		}
		else if (this.state.email.length === 0) {
			this.setState({ uerr: "Username is required" })
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
			this.setState({ ferr: "Please enter the valid fname" })
		}
		else if (!this.state.Lastname.match(/^[A-Za-z]{5,15}$/)) {
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

		// else {
		// BrowserHistory.push('/LoginForm')
		// this.Loginaction.props.success("Register Successfully")
		// }
		this.props.registerHandle(payload);
		// BrowserHistory.push('/login')
		// const url = "http://localhost:4013/Signup"
		// return axios({
		// method: 'POST',
		// url,
		// data: reqst
		// }).then(async (res) => {
		// console.log(res);

		// })

	}


	render() {
		return (
			<div className="register">
					<div class="row">
						<div class="col-sm-4 col-lg-4 col-md-4 col-xs-4"></div>
						<div class="col-sm-4 col-lg-4 col-md-4 col-xs-4">
							<h1 className="Signupcolor">Signup</h1>
							<div className="regcont">
								<div  className="textcolor"><label><b>First Name</b></label></div>
								<div><input type="text" name="username" className="one" onChange={this.onHandleChange} /><br /></div>
								<div><p >{this.state.ferr}</p></div>
								<div  className="textcolor"><label><b>Last Name</b></label><br /></div>
								<div><input type="text" name="Lastname" className="one" onChange={this.onHandleChange} /><br /></div>
								<div> <p >{this.state.lerr}</p></div>

								<div  className="textcolor"><label ><b>Email</b></label><br /></div>
								<div> <input type="text" name="email" className="one" onChange={this.onHandleChange} /><br /></div>
								<div> <p >{this.state.uerr}</p></div>
								<div  className="textcolor"><label ><b>Password</b></label><br /></div>
								<div> <input type="password" name="password" className="one" onChange={this.onHandleChange} /><br /></div>
								<div> <p >{this.state.perr}</p></div>
								<div  className="textcolor"> <label ><b>Confirmpassword</b></label><br /></div>
								<div> <input type="password" name="Confirmpassword" className="one" onChange={this.onHandleChange} /><br /></div>
								<div> <p >{this.state.cperr}</p></div>
								<div  className="textcolor"> <label ><b>Mobilenumber</b></label><br /></div>
								<div> <input type="text" name="Mobnum" className="one" onChange={this.onHandleChange} /><br /></div>
							</div>
							<p onClick={this.onHandleClicks} className="logintext">Already do you have an account</p>
							<p >{this.state.phnerr}</p>
							<button onClick={this.onHandleClick} className="registerbtn"><b>Register</b></button>
							<a href=""  onClick={this.onHandleClicksCancel} className="canbtn">Cancel</a>
							
							
						</div>
						<div class="col-sm-4 col-lg-4 col-md-4 col-xs-4"></div>
					</div>
					</div>
		);
	}
}
const mapStateToProps = (state) => {
	const { Firstname, Lastname, email, password, Confirmpassword, Mobnum } = state.RegisterReducer
	return { Firstname, Lastname, email, password, Confirmpassword, Mobnum }
}
export default connect(mapStateToProps, { registerHandle })(RegisterPage);