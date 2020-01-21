import axios from 'axios';
import BrowserHistory from '../Components/Utils/BrowserHistory';
export function loginHandle(payload){
debugger
const options = {
url: 'http://localhost:8008/Signin',
method: 'POST',

data: payload
};

return function(dispatch)
{
axios(options)
.then(response => {
console.log(response.status);
sessionStorage.setItem('authentication', response.data.token)
BrowserHistory.push('/HomePage')
});
dispatch({type:'LOGIN',payload:payload});
}
}
// const url = "http://localhost:8008/Signin"
    //   return axios({
    //     method: 'POST',
    //     url,
    //     data: payload
    //   }).then(async (res) => {
    //     console.log(res);
    //     BrowserHistory.push('/HomePage')
    //   })