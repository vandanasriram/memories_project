import React from "react";
import { createRoot } from 'react-dom/client';
import {Provider} from 'react-redux';
import {applyMiddleware, compose} from 'redux';
import { legacy_createStore as createStore} from 'redux'
import configureStore from '@reduxjs/toolkit'
import thunk from 'redux-thunk'
import reducers from './reducers'

import App from "./App";

const store = createStore(reducers, compose(applyMiddleware(thunk)))

const container = document.getElementById('root');
const root = createRoot(container); // createRoot(container!) if you use TypeScript
root.render(
    <Provider store={store}>
        <App />
    </Provider>
);