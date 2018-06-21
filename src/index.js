import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

import styles from './styles/main.scss';
import Reducers from './reducers/Reducers';

const store = createStore(Reducers);

import App from './App';

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>, 
    document.getElementById('index')
);