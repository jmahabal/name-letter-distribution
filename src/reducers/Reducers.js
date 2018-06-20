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

const loggedIn = (state = {}, action) => {
    console.log(action, state)
    switch (action.type) {
        case 'LOG_IN':
            return Object.assign({}, state, {
                loggedIn: true
            })
        case 'LOG_OUT':
            return Object.assign({}, state, {
                loggedIn: false
            })
        default:
            return state
    }
}

const LetterDistribution = combineReducers({
    LoginUsername,
    LoginPassword,
    loggedIn
})

export default LetterDistribution