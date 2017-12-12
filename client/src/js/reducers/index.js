import Login from './Login'
import preferences from './preferences'
import user from './user'

import {combineReducers} from 'redux'

const rootReducer = combineReducers({
    Login,
    preferences,
    user
})

export default rootReducer