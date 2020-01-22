import React, { Component } from 'react';
import axios from 'axios';



class Adminrow extends Component {
constructor(props) {
super(props);
this.delete = this.delete.bind(this);
this.state = {
item: []
}

}
delete = (id) => {
debugger;
axios.delete(`http://localhost:8008/Admin/${this.props.obj._id}`)
.then(console.log('Deleted'))
.catch(err => console.log(err))
window.location.reload();
}

render() {
return (
<tr>
<td className="tab2">
{this.props.obj.SIno}
</td>

<td className="tab3">
{this.props.obj.UserName}
</td>

<td className="tab4">
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

<td className="tab9">
{this.props.obj.email_id}
</td>

<td className="tab10">
{this.props.obj.MobileNo}
</td>

{/* <td>
<button onClick={this.edit} className="btn btn-primary">Edit</button>
</td> */}

<td className="tab11">
<button className="btn btn-danger" onClick={this.delete.bind(this.id)}>Delete</button>
</td>

</tr>
);
}
}
export default Adminrow;



