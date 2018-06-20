import { combineReducers } from 'redux'

const LoginUsername = (state = {}, action) => {
    switch (action.type) {
        case 'UPDATE_USERNAME':
            return Object.assign({}, state, {
                username: action.username
            })
        default:
            return state
    }
}

// TODO: re-use code for the two Login functions
const LoginPassword = (state = {}, action) => {
    switch (action.type) {
        case 'UPDATE_PASSWORD':
            return Object.assign({}, state, {
                username: action.password
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