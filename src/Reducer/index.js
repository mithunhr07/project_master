import RegisterReducer from './RegisterReducer'
import { combineReducers } from 'redux';
import Login_reducer from './Login_reducer';
import Admin_reducer from '../Reducer/Admin_reducer';

export default combineReducers({
    RegisterReducer,
    Login_reducer,
    Admin_reducer
})