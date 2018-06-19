import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import styles from './styles/main.scss';

import LetterDistribution from './reducers/LetterDistribution'

const store = createStore(LetterDistribution)

import App from './App'

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>, 
    document.getElementById('index')
);