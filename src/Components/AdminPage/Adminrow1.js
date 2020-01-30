import React, { Component } from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import Modal from 'react-modal';
import { updateHandle } from '../../Action/Admin_action';
import BrowserHistory from '../Utils/BrowserHistory';
import '../AdminPage/Adminrow.css'

class TableRow extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isExpanded: false,
            modalIsOpen: false,
            SIno: '',
            UserName: '',
            UserAddress: '',
            email_id: '',
            MobileNo: '',
            _id: '',
            Drivers: ''

        };
        this.delete = this.delete.bind(this);

    }
    handleChangeg = (e) => {
        this.setState({ [e.target.name]: e.target.value });
    }

    onChangeSIno = (e) => {
        this.setState({
            SIno: e.target.value
        });
    }

    onChangeUserName = (e) => {
        console.log(e.target.value)
        this.setState({
            UserName: e.target.value
        })
    }

    onChangeUserAddress = (e) => {
        this.setState({
            UserAddress: e.target.value
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

    delete() {
        axios.delete(`http://localhost:8008/Admin/${this.props.obj._id}`)
            .then(console.log('Deleted'))
            .catch(err => console.log(err))
        window.location.reload();
    }
    openModal = () => {
        this.setState({ SIno: this.props.obj.SIno })
        this.setState({ UserName: this.props.obj.UserName })
        this.setState({ UserAddress: this.props.obj.UserAddress })
        this.setState({ email_id: this.props.obj.email_id })
        this.setState({ MobileNo: this.props.obj.MobileNo })
        this.setState({ Drivers: this.props.obj.Drivers })
        this.setState({ _id: this.props.obj._id })

        this.setState({ modalIsOpen: true });
        console.log("hi", this.state)
    }

    closeModal = () => {
        this.setState({ modalIsOpen: false });
    }

    componentDidMount() {
        const LoginDetails = (localStorage.getItem('LOGINDETAILS'));
        const LogDet = JSON.parse(LoginDetails);

    }

    handleChangeg = (e) => {
        this.setState({ [e.target.name]: e.target.value });
    }

    onSubmit = (e) => {
        e.preventDefault();
        const payload = {
            _id: this.state._id,
            SIno: this.state.SIno,
            UserName: this.state.UserName,
            UserAddress: this.state.UserAddress,
            Drivers: this.state.Drivers,
            // Driver_Email: this.state.Driver_Email,
            email_id: this.state.email_id,
            MobileNo: this.state.MobileNo,
        };
        console.log(payload);
        this.props.updateHandle(payload);
    }

    onHandleClicksCancel() {
        BrowserHistory.push('./Adminform');
    }

    render() {
        const { UserDetails } = this.props;

        return (
            <tr>
                <td>
                    {this.props.obj.SIno}
                </td>
                <td>
                    {this.props.obj.UserName}
                </td>
                <td>
                    {this.props.obj.UserAddress}
                </td>
                <td className="tab5">
                    {this.props.obj.Machinery_Name}
                </td>

                <td className="tab6">
                    {this.props.obj.Hours}
                </td>

                <td className="tab7">
                    {this.props.obj.Price}
                </td>

                <td className="tab8">
                    {this.props.obj.Rent_On_Date}
                </td>

                <td className="tab8">
                    {this.props.obj.Drivers}
                </td>

                <td>
                    {this.props.obj.email_id}
                </td>
                <td>
                    {this.props.obj.MobileNo}
                </td>
                <td>
                    <button onClick={this.openModal} className="btn btn-primary">Edit</button>
                    <Modal className="modelbodymisdes"
                        isOpen={this.state.modalIsOpen}
                        onRequestClose={this.closeModal}
                        contentLabel="Register Modal"
                    >
                        <form onSubmit={this.onSubmit} className="tablerowmisdes">
                            <div>
                                <label className="name">SIno:</label>
                                <input
                                    type="text"
                                    className="rdwidth1"
                                    defaultValue={this.props.obj.SIno}
                                    onChange={this.onChangeSIno}
                                />
                            </div>
                            <div>
                                <label className="name">UserName: </label>
                                <input type="text"
                                    className="rdwidth2"
                                    defaultValue={this.props.obj.UserName}
                                    onChange={this.onChangeUserName}
                                />
                            </div>
                            <div>
                                <label className="name">UserAddress: </label>
                                <input type="text"
                                    className="rdwidth3"
                                    defaultValue={this.props.obj.UserAddress}
                                    onChange={this.onChangeUserAddress}
                                />
                            </div>

                            <div>
                                <label className="name">Drivers: </label>
                                <input type="text"
                                    className="rdwidth3"
                                    defaultValue={this.props.obj.Drivers}
                                    onChange={this.onChangeDrivers}
                                />
                            </div>
                            <div>
                                <label className="name"> Driver_Email:</label>
                                <input type="text"
                                    className="rdwidth4"
                                    defaultValue={this.props.obj.Driver_Email}
                                    onChange={this.onChangeDriver_Email}
                                />
                            </div>

                            <div>
                                <label className="name"> email_id:</label>
                                <input type="text"
                                    className="rdwidth4"
                                    defaultValue={this.props.obj.email_id}
                                    onChange={this.onChangeemail_id}
                                />
                            </div>
                            <div>
                                <label className="name"> MobileNo</label>
                                <input type="text"
                                    className="rdwidth5"
                                    defaultValue={this.props.obj.MobileNo}
                                    onChange={this.onChangeMobileNo}
                                />
                            </div>
                            <div className="form-group">
                                <button type="submit" value="send" className="rmdsendbta" onClick={this.onSubmit}>Update</button>
                                <button onClick={this.onHandleClicksCancel} type="button" className="rmdresetbta">Cancel</button>
                            </div>
                        </form>

                    </Modal>

                </td>
                <td>
                    <button onClick={this.delete} className="btn btn-danger">Delete</button>
                </td>
            </tr>

        );
    }

}

const mapStateToProps = (state) => {
    const { UserDetails } = state.Admin_reducer
    return { UserDetails }
}
export default connect(mapStateToProps, { updateHandle })(TableRow);