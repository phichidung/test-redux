import React, { Component } from 'react';
import Main from './Main';
import { Provider } from 'react-redux';
import store from './store';

export default class App extends Component {

    render() {
        return (
            <Provider store={store}>
                <Main/>
            </Provider>
        );
    }
}
