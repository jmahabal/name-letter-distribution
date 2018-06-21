import { combineReducers } from 'redux'

const Login = (state = { username: "", password: "" }, action) => {
    switch (action.type) {
        case 'UPDATE_USERNAME':
            return Object.assign({}, state, {
                username: action.username
            })
        case 'UPDATE_PASSWORD':
            return Object.assign({}, state, {
                password: action.password
            })
        case 'LOG_OUT':
            return Object.assign({}, state, {
                password: "",
                username: ""
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
    Login,
    loggedInState
})

export default Reducers