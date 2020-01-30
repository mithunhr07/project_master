import axios from 'axios'
import Cookies from 'js-cookie'
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
          const LoginDet = JSON.stringify({ 'token': response.data.token, 'userId': response.data.userId });
          sessionStorage.setItem('LOGINDETAILS', LoginDet);
          sessionStorage.setItem('role', response.data.role);
          Cookies.set("role", response.data.role)
          console.log(response.data.role)
          if ("admin" === sessionStorage.getItem('role'))
            BrowserHistory.push('/Adminform')
          else {
            BrowserHistory.push('/payment_page')
          }
        }
      })
      .catch(error => {
        window.alert(error.response.data.message)
      })

  }
}