const LOGIN_CLICK = 'LOGIN_CLICK'
const CHANGE_USERNAME = 'CHANGE_USERNAME'
const CHANGE_PASSWORD = 'CHANGE_PASSWORD'
const FAILED_LOGIN = 'FAILED_LOGIN'
const LOGIN_LOADER = 'LOGIN_LOADER'

export const loginClick = (item) => {
    return {
        type: LOGIN_CLICK,
        item
    }
}

export const changeUserName = (item) => {
    return {
        type: CHANGE_USERNAME,
        item
    }
}

export const changePassword = (item) => {
    return {
        type: CHANGE_PASSWORD,
        item
    }
}

export const failedToLogin = (item) => {
    return {
        type: FAILED_LOGIN,
        item
    }
}

export const loginLoader = (item) => {
    return {
        type: LOGIN_LOADER,
        item
    }
}