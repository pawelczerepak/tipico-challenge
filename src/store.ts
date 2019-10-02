import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducers/rootReducer';
import axiosMiddleware from 'redux-axios-middleware';
import client from './apiClient';

export default function configureStore() {
    return createStore(
        rootReducer,
        applyMiddleware(thunk, axiosMiddleware(client)),
    );
}
