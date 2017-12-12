/**
 * Created by shir.shaashua on 29/11/2017.
 */
const LOGIN_CLICK = 'LOGIN_CLICK'
const CHANGE_USERNAME = 'CHANGE_USERNAME'
const CHANGE_PASSWORD = 'CHANGE_PASSWORD'
const FAILED_LOGIN = 'FAILED_LOGIN'
const LOGIN_LOADER = 'LOGIN_LOADER'

const initState = {
    loginData: {
        userName: '',
        password: ''
    },
    errorMsg: '',
    loading: false,
    success: false
}

export default (state = initState, action) => {
    let newState = null
    switch (action.type) {
        case LOGIN_CLICK:
            newState.loginData = state
            break
        case CHANGE_USERNAME:
            newState = state
            newState.loginData.userName = action.item
            break
        case CHANGE_PASSWORD:
            newState = state
            newState.loginData.password = action.item
            break
        case LOGIN_LOADER:
            newState = state
            newState.loading = action.item.loading
            newState.success = action.item.success
            break
        case FAILED_LOGIN:
            newState = state
            if (action.item.code === 402) {
                newState.errorMsg = 'Sorry, your username and password are incorrect - Please try again'
            } else {
                newState.errorMsg = 'Sorry, something went wrong - Please try again'
            }
            break
        default:
            newState = state
            break
    }

    return Object.assign({}, state, newState)
}