import React, { Component } from 'react';
import axios from 'axios';
import Adminrow1 from './Adminrow1';
import Navbar from '../Navbar/Navbar';
import FooterPage from '../Footer/Footer';
import './Admintable.css'


class Adminform extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Users: []
    };
  }
  componentDidMount() {
    debugger;
    axios.get('http://localhost:8008/Admin')
      .then(response => {
        debugger
        this.setState({ Users: response.data });
      })
      .catch(function (error) {
        console.log(error);
      })
  }
  tabRow() {
    return this.state.Users.map(function (object, i) {
      return <Adminrow1 obj={object} key={i} />;
    });
  }
  render() {
    return (

      <div>
        <Navbar />
        <table className="table" style={{ marginTop: 50 }}>
          <tr>
            <th>SIno</th>
            <th>UserName</th>
            <th>UserAddress</th>
            <th>Machinery_Name</th>
            <th>Hours</th>
            <th>Price</th>
            <th>Rent_On_Date</th>
            <th>Drivers</th>
            <th>email_id</th>
            <th>MobileNo</th>
            <th colSpan="2">Action</th>
          </tr>
          {this.tabRow()}
        </table>
        <FooterPage />
      </div>
    );
  }
}

export default Adminform;