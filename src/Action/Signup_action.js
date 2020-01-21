import axios from 'axios'
import BrowserHistory from '../Components/Utils/BrowserHistory';
export function registerHandle(payload){
debugger
const options = {
url: 'http://localhost:8008/Signup',
method: 'POST',

data: payload
};

return function(dispatch)
{
axios(options)
.then(response => {
console.log(response.status);
    BrowserHistory.push('./LoginPage')
});
dispatch({type:'REGISTER',payload:payload});
}
}