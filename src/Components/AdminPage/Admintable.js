import React, { Component } from 'react';
// import Footer from '../Footer/Footer'
// import Navbar from '../Navbar/Navbar';
import BrowserHistory from "../Utils/BrowserHistory";
import { questionHandle } from '../../Action/Admin_action';
// import './Admintable.css';
import { connect } from 'react-redux'

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
Machinery_Name: this.state.Machinery_Name,
Hours: this.state.Hours ,
Price: this.state.Price,
Rent_On_Date: this.state.Rent_On_Date,
email_id: this.state.email_id,
MobileNo: this.state.MobileNo
};

this.props.questionHandle(payload);
BrowserHistory.push('./Adminform');
}
render() {
return (
<div >
<div>
<form onSubmit={this.onSubmit}>

<div>
<label className="empnum1">SIno </label>
<input type="number"
className="empnum2"
value={this.state.SIno}
onChange={this.onChangeSIno}
/>
</div>

<div>
<label className="empnum3"> UserName</label>
<input type="text"
className="empnum4"
value={this.state.UserName}
onChange={this.onChangeUserName}
/>
</div>

<div>
<label className="empnum5"> UserAddress</label>
<input type="text"
className="empnum6"
value={this.state.UserAddress}
onChange={this.onChangeUserAddress}
/>
</div>

<div>
<label className="empnum7"> Machinery_Name</label>
<input type="text"
className="empnum8"
value={this.state.Machinery_Name}
onChange={this.onChangeMachinery_Name}
/>
</div>

<div>
<label className="empnum9"> Hours</label>
<input type="text"
className="empnum17"
value={this.state.Hours}
onChange={this.onChangeHours}
/>
</div>

<div>
<label className="empnum10"> Price</label>
<input type="text"
className="empnum11"
value={this.state.Price}
onChange={this.onChangePrice}
/>
</div>

<div>
<label className="empnum12"> Rent_On_Date</label>
<input type="text"
className="empnum13"
value={this.state.Rent_On_Date}
onChange={this.onChangeRent_On_Date}
/>
</div>

<div>
<label className="empnum14"> email_id</label>
<input type="text"
className="empnum15"
value={this.state.email_id}
onChange={this.onChangeemail_id}
/>
</div>

<div>
<label className="empnum20"> MobileNo</label>
<input type="text"
className="empnum16"
value={this.state.MobileNo}
onChange={this.onChangeMobileNo}
/>
</div>

<div className="form-group">
<button type="submit" value="send" id="sendbttn" onClick={this.onSubmit}>Send</button>
<button type="submit" className="resetbttn">Reset</button>
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
const { Machinery_Name } = state.Admin_reducer
const { Hours } = state.Admin_reducer
const { Price } = state.Admin_reducer
const { Rent_On_Date } = state.Admin_reducer
const { email_id } = state.Admin_reducer
const { MobileNo } = state.Admin_reducer

return { SIno, UserName, UserAddress, Machinery_Name, Hours, Price, Rent_On_Date, email_id, MobileNo }
}
export default connect(mapStateToProps, { questionHandle })(Admintable);