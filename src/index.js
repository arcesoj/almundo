import React, { Component } from 'react';

import { Provider } from 'react-redux';
import store from './store';
import { AppNavigator } from 'almundo/src/config/router';

export class AppScreen extends Component {

    render() {
        return(
            <Provider store={store}>
                <AppNavigator/>
            </Provider>
        )
    }

}

export default AppScreen;
