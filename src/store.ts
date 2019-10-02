import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducers/rootReducer';
import axiosMiddleware from 'redux-axios-middleware';
import client from './apiClient';
import { composeWithDevTools } from 'redux-devtools-extension';

export default function configureStore() {
    return createStore(
        rootReducer,
        composeWithDevTools(applyMiddleware(thunk, axiosMiddleware(client))),
    );
}
