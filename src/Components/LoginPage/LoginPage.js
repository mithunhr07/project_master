import React, { Component } from 'react';
import { connect } from 'react-redux';
import BrowserHistory from '../Utils/BrowserHistory'
import { loginHandle } from '../../Action/Login_action';
import './LoginPage.css'
class LoginPage extends Component {
    constructor(props) {
        super(props);
        this.state = {

            email: '',
            password: '',
            uerr: '',
            perr: '',



        };
    }
    onHandleChange = (event) => {

        this.setState({ [event.target.name]: event.target.value });

    }
    onHandleClicks = (e) => {

        BrowserHistory.push('/RegisterPage');

    }

    onHandleClicksCancel = (e) => {

        BrowserHistory.push('/LoginPage');

    }


    onHandleClick = (e) => {
        debugger;
        e.preventDefault();
        const payload = {
            email: this.state.email,
            password: this.state.password,

        }
        // signup(reqst).then(res => {
        // if (res.data === "User Created Succesfully") {
        // alert("UserCreated Successfully")
        // BrowserHistory.push('/login')
        // }

        // })

        if (this.state.email.length === 0 && this.state.password.length === 0) {
            this.setState({

                uerr: "Email is required",
                perr: "Password is required",


            })
        }

        else if (this.state.email.length === 0) {
            this.setState({ uerr: "Username is required" })
        }
        else if (this.state.password.length === 0) {
            this.setState({ perr: "Password is required" })
        }


        else if (!this.state.email.match(/^[a-zA-Z0-9]+@+[a-zA-Z0-9]+.+[A-z]$/)) {
            this.setState({ uerr: "Please enter the valid email" })
        }
        else if (!this.state.password.match(/^[@#][A-Za-z0-9]{5,11}$/)) {
            this.setState({ perr: "Please enter the valid password" })
        }

        // else {
        // BrowserHistory.push('/LoginForm')
        // this.Loginaction.props.success("Register Successfully")
        // }
        this.props.loginHandle(payload);
        // BrowserHistory.push('/Payment_page')
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
    confirmmail = (e) => {
        sessionStorage.setItem('change', this.state.email)
        BrowserHistory.push('/forget');
    }

    render() {
        return (
            <div className="loginpagewidth">
                <div>
                    <div class="row">
                        <div class="col-sm-2 col-lg-2 col-md-2 col-xs-2"></div>
                        <div class="col-sm-6 col-lg-6 col-md-6 col-xs-6">
                            <h1 className="Signtext">Signin</h1>
                            <div className="regcont">


                                <div><label className="etext"><b>Email</b></label><br /></div>
                                <div><input type="text" name="email" className="inputwidth" onChange={this.onHandleChange} /><br /></div>
                                <div> <p className="error_color">{this.state.uerr}</p></div>
                                <div><label className="etext"><b>Password</b></label><br /></div>
                                <div> <input type="password" name="password" className="inputwidth" onChange={this.onHandleChange} /><br /></div>
                                <div> <p className="error_color">{this.state.perr}</p></div>

                            </div>
                            <a onClick={this.confirmmail} id="forgetpassword">Forget Password</a>
                            <button onClick={this.onHandleClick} className="btn1align"><b>Signin</b></button>
                            <p className="etext1">If not registered, Register know</p>
                            <button onClick={this.onHandleClicks} className="btn1align"><b>Register</b></button>
                            <a href="" onClick={this.onHandleClicksCancel} className="cancelbtn">Cancel</a>
                        </div>
                        <div class="col-sm-2 col-lg-2 col-md-2 col-xs-2">
                        </div>
                    </div>
                </div>

            </div>
        );
    }
}
const mapStateToProps = (state) => {
    const { email, password } = state.Login_reducer
    return { email, password }
}
export default connect(mapStateToProps, { loginHandle })(LoginPage);