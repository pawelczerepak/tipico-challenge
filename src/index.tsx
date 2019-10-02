import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import { Provider } from 'react-redux';
import configureStore from './store';
import GlobalStyle from './components/GlobalStyle';

ReactDOM.render(
    <Provider store={configureStore()}>
        <GlobalStyle/>
        <App/>
    </Provider>,
    document.getElementById('root'),
);
