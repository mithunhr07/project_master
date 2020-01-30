import React, { Component } from 'react';
import BrowserHistory from "../Utils/BrowserHistory";
import { questionHandle } from '../../Action/Admin_action';
import './Admintable.css';
import { connect } from 'react-redux'
import Cookies from 'js-cookie'

class Admintable extends Component {
    constructor(props) {
        super(props);
        this.state = {
            SIno: '',
            UserName: '',
            UserAddress: '',
            Machinery_Name: '',
            Hours: '',
            Price: '',
            Rent_On_Date: '',
            email_id: '',
            MobileNo: ''

        }
    }
    handleChange = (e) => {
        this.setState({ [e.target.name]: e.target.value });
    }

    onChangeSIno = (e) => {
        this.setState({
            SIno: e.target.value
        })
    }

    onChangeUserName = (e) => {
        this.setState({
            UserName: e.target.value
        })
    }
    onChangeUserAddress = (e) => {
        this.setState({
            UserAddress: e.target.value
        })
    }
    onChangeMachinery_Name = (e) => {
        this.setState({
            Machinery_Name: e.target.value
        })
    }
    onChangeHours = (e) => {
        this.setState({
            Hours: e.target.value
        })
    }
    onChangePrice = (e) => {
        this.setState({
            Price: e.target.value
        })
    }
    onChangeRent_On_Date = (e) => {
        this.setState({
            Rent_On_Date: e.target.value
        })
    }
    onChangeDrivers = (e) => {
        this.setState({
            Drivers: e.target.value
        })
    }
    onChangeemail_id = (e) => {
        this.setState({
            email_id: e.target.value
        })
    }
    onChangeMobileNo = (e) => {
        this.setState({
            MobileNo: e.target.value
        })
    }

    onSubmit = (e) => {
        debugger
        e.preventDefault();
        const payload = {
            SIno: this.state.SIno,
            UserName: this.state.UserName,
            UserAddress: this.state.UserAddress,
            Machinery_Name: Cookies.get('Machinery_Name'),
            Hours: Cookies.get('Hours'),
            Price: Cookies.get('Price'),
            Rent_On_Date: Cookies.get('date'),
            Drivers: this.state.Drivers,
            email_id: this.state.email_id,
            MobileNo: this.state.MobileNo

        };

        this.props.questionHandle(payload);

    }
    render() {
        return (
            <div >

                <div>
                    <form onSubmit={this.onSubmit}>

                        <div>
                            <h1 className="billingtext">Billing_Form</h1><br />
                            <label className="empnum1">SIno </label>
                            <input type="number"
                                className="empnum2"
                                value={this.state.SIno}
                                onChange={this.onChangeSIno}
                            />
                        </div><br />

                        <div>
                            <label className="empnum1"> UserName</label>
                            <input type="text"
                                className="empnum01"
                                value={this.state.UserName}
                                onChange={this.onChangeUserName}
                            />
                        </div><br />

                        <div>
                            <label className="empnum1"> UserAddress</label>
                            <input type="text"
                                className="empnum3"
                                value={this.state.UserAddress}
                                onChange={this.onChangeUserAddress}
                            />
                        </div><br />
                         <div>
                            <label className="empnum1"> email_id</label>
                            <input type="text"
                                className="empnum8"
                                value={this.state.email_id}
                                onChange={this.onChangeemail_id}
                            />
                        </div><br />

                        <div>
                            <label className="empnum1"> MobileNo</label>
                            <input type="text"
                                className="empnum9"
                                value={this.state.MobileNo}
                                onChange={this.onChangeMobileNo}
                            />
                        </div><br />

                        <div className="form-group">
                            <button type="submit" value="send" id="sendbttn" onClick={this.onSubmit} class="btn btn-primary">Send</button>
                            <button type="submit" id="resetbttn" class="btn btn-info">Reset</button>
                        </div>
                    </form>
                </div>
            </div>
        )
    }
}
const mapStateToProps = (state) => {
    const { SIno } = state.Admin_reducer
    const { UserName } = state.Admin_reducer
    const { UserAddress } = state.Admin_reducer
    const { email_id } = state.Admin_reducer
    const { MobileNo } = state.Admin_reducer

    return { SIno, UserName, UserAddress, email_id, MobileNo }
}
export default connect(mapStateToProps, { questionHandle })(Admintable);