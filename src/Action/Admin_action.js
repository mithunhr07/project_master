import axios from 'axios'
import BrowserHistory from "../Components/Utils/BrowserHistory";

export function questionHandle(payload) {
debugger
const options = {
url: 'http://localhost:8008/Admin',
method: 'POST',

data: payload
};

return function (dispatch) {
axios(options)
.then(response => {
console.log(response.status);
BrowserHistory.push('./Adminform');
});
dispatch({ type: 'REGISTER', payload: payload });
}
}
