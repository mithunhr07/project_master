import React, { Component } from 'react';
import axios from 'axios';
import './LoginPage.css'

class Forgetpassword extends Component {

  constructor(props) {
    super(props);
    this.state = {
      _id: '',
      password: ''
    }
  }

  handlechange = (e) => {
    debugger
    this.setState({ password: e.target.value })
  }
  changepassw = () => {
    debugger
    const payload = {
      email: sessionStorage.getItem('change'),
      password: this.state.password
    }
    console.log(payload)

    axios.put(`http://localhost:8008/reset`, payload)
      .then(console.log('update'))
      .catch(err => console.log(err))
    window.location.reload();
  }

  render() {
    return (
      <div className="forgetbackground">
        <div className="frgtpassw">
          <label id="forgetpassword">New Password</label><br />
          <input type="text" onChange={this.handlechange} placeholder="enter new password"></input><br /><br />
          <button onClick={this.changepassw} name="password" class="btn btn-danger">change password</button>
        </div>
      </div>
    );
  }
}

export default Forgetpassword;