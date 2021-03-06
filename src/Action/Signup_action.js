import axios from 'axios'
import BrowserHistory from '../Components/Utils/BrowserHistory'

export function registerHandle(payload) {
  const options = {
    url: 'http://localhost:8008/Signup',
    method: 'POST',
    data: payload
  };
  return function (dispatch) {
    axios(options)
      .then(response => {
        console.log(response.status);
        // BrowserHistory.push('./login')
      });
    dispatch({ type: 'REGISTER', payload: payload });
  }
}

export function GetUserDetailsById(UserId) {
  const options = {
    url: `http://localhost:8008/User/${UserId}`,
    method: 'GET',
    data: ''
  };
  return function (dispatch) {
    axios(options)
      .then(response => {
        console.log("registeraction");
        dispatch({ type: 'FETCHUSERDETAILS', payload: response.data });
        BrowserHistory.push('/LoginPage')
      });
  }
}