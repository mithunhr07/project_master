import axios from 'axios'
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
});
dispatch({type:'REGISTER',payload:payload});
}
}