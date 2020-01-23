import React, { Component } from 'react';
import { connect } from 'react-redux';
import './LoginPage.css';
import background from '../Images/background.jpeg';
import BrowserHistory from '../Utils/BrowserHistory';
import { loginHandle } from '../../Action/Login_action';
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
      username: '',
      // ferr: '',
      // lerr: '',
      // uerr: '',
      perr: '',
      // cperr: '',
      usererr: ''
  


    };
  }
  onHandleChange = (event) => {

    this.setState({ [event.target.name]: event.target.value });
    console.log(event.target.value)
  }

  onHandleClicks = (e) => {

    BrowserHistory.push('/RegisterPage');

  }
  onHandleClicksCancel = (e) => {

    BrowserHistory.push('/LoginForm');

  }


  onHandleClick = (e) => {
    // debugger;
    // BrowserHistory.push('/Calendar')
    e.preventDefault();
    const payload = {
      username: this.state.username,
      // Lastname: this.state.Lastname,
      // email: this.state.email,
      password: this.state.password,
      
      // Confirmpassword: this.state.Confirmpassword,
      // Mobnum: this.state.Mobnum

    }
    // console.log(payload)
    // BrowserHistory.push('/login')
    // signup(reqst).then(res => {
    // if (res.data === "User Created Succesfully") {
    // alert("UserCreated Successfully")
    // BrowserHistory.push('/login')
    // }

    // })

    if (this.state.password.length === 0 && this.state.username.length === 0) {
      this.setState({
        // ferr: "Firstname is required", 
        // lerr: "Lastname is required",
        // uerr: "Email is required",
        perr: "Password is required",
        // cperr: "ConrimPassword is required",
        usererr: "Username is required"

      })
    }



    else if (this.state.password.length === 0) {
      this.setState({ perr: "Password is required" })
    }

    else if (this.state.username.length === 0) {
      this.setState({ usererr: "username is required" })
    }



    // else if (!this.state.password.match(/^[@#][A-Za-z0-9]{9,11}$/)) {
    // this.setState({ perr: "Please enter the valid password" })
    // }

    else if (!this.state.username.match(/^[A-Za-z]{5,15}$/)) {
      this.setState({ usererr: "Please enter the valid name" })
    }

    // else {
    //   // BrowserHistory.push('/LoginForm')
    //   // this.Loginaction.props.success("Register Successfully")

    //   // this.props.loginHandle(payload);

      const url = "http://localhost:8008/Signin"
      return axios({
        method: 'POST',
        url,
        data: payload
      }).then(async (res) => {
        console.log(res);
        sessionStorage.setItem('authentication', res.data.token)

        BrowserHistory.push('/Calendar')
      })

    // }
  }

  render() {
   
     
      return (
        <div>
        
          <div>
            <div class="row">
              <div class="col-sm-4 col-lg-4 col-md-4 col-xs-4 "></div>
              <div class="col-sm-2 col-lg-2 col-md-2 col-xs-2" id="signup_container">
                <h1>Login</h1>
                <div>

                  <div> <label ><b>User Name</b></label><br /></div>
                  <div> <input type="text" name="username" onChange={this.onHandleChange} /><br /><br /></div>
                  <div><p className="error_color">{this.state.usererr}</p></div>
                  <div><label ><b>Password</b></label><br /></div>
                  <div> <input type="password" name="password" onChange={this.onHandleChange} /><br /><br /></div>
                  <div> <p className="error_color">{this.state.perr}</p></div>
                </div>
                <button onClick={this.onHandleClick} className="btn_width"><b>Login</b></button>
                <button onClick={this.onHandleClicks} className="btn_align"><b>Register</b></button><br></br>
                <a href="/" onClick={this.onHandleClicksCancel} id="cancel_btn">Cancel</a>
              </div>
              <div class="col-sm-4 col-lg-4 col-md-4 col-xs-4">
              </div>
            </div>
          
          </div>
 
        </div>
      );
    }
  }
  const mapStateToProps = (state) => {
    const { password, username } = state.Login_reducer
    return { password, username }
  }
  export default connect(mapStateToProps, { loginHandle }) (LoginPage);
