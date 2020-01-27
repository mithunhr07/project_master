import axios from 'axios'
import BrowserHistory from '../Components/Utils/BrowserHistory'
export function loginHandle(payload) {
const options = {
url: 'http://localhost:8008/Signin',
method: 'POST',

data: payload
};

return function (dispatch) {
axios(options)
.then(response => {

if (response.data === "User does not exist") {
alert("User does not exist")
}
else if (response.data === "wrong password") {
alert("Incorrect password")
}

else {
const LoginDet = JSON.stringify({'token':response.data.token, 'userId': response.data.userId});
sessionStorage.setItem('LOGINDETAILS', LoginDet);
BrowserHistory.push('/Payment_page')
}
})
.catch(error=>{
    debugger
    // console.log("11111111111",error.response.data.message)
    window.alert(error.response.data.message)
})

}
}