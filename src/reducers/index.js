import { combineReducers } from 'redux'
import User from './user'
import Register from './register'
import PswdFind from './pswdFind'

let rootReducer = combineReducers({
    User,
    Register,
    PswdFind
});

export default rootReducer