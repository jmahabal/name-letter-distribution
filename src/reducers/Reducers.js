import { combineReducers } from 'redux'

// FIXME: combine the username and password
const LoginUsername = (state = { username: "" }, action) => {
    switch (action.type) {
        case 'UPDATE_USERNAME':
            return Object.assign({}, state, {
                username: action.username
            })
        case 'LOG_OUT':
            return Object.assign({}, state, {
                username: ""
            })
        default:
            return state
    }
}

const LoginPassword = (state = { password: "" }, action) => {
    switch (action.type) {
        case 'UPDATE_PASSWORD':
            return Object.assign({}, state, {
                password: action.password
            })
        case 'LOG_OUT':
            return Object.assign({}, state, {
                password: ""
            })
        default:
            return state
    }
}

const loggedInState = (state = { isLoggedIn: false }, action) => {
    switch (action.type) {
        case 'LOG_IN':
            return Object.assign({}, state, {
                isLoggedIn: true
            })
        case 'LOG_OUT':
            return Object.assign({}, state, {
                isLoggedIn: false
            })
        default:
            return state
    }
}

const Reducers = combineReducers({
    LoginUsername,
    LoginPassword,
    loggedInState
})

export default Reducers