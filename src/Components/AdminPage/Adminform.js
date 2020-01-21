import React, { Component } from 'react';
import axios from 'axios';
import Adminrow from './Adminrow';


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
return <Adminrow obj={object} key={i} />;
});
}
render() {
return (

<div>
<p>Employee List</p>
<table className="table" style={{ marginTop: 50 }}>
<tr>
<th>SIno</th>
<th>EmpId</th>
<th>FirstName</th>
<th>LastName</th>
<th>Date_of_Birth</th>
<th>Sex</th>
<th>JoiningDate</th>
<th>email_id</th>
<th>MobileNo</th>
<th colSpan="2">Action</th>
</tr>
{this.tabRow()}
</table>

</div>
);
}
}

export default Adminform;