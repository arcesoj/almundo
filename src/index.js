import React, { Component } from 'react';
import Expo from 'expo';
import { Provider } from 'react-redux';
import store from './store';
import { AppNavigator } from './config/router';

class AppScreen extends Component {

    render() {
        return(
            <Provider store={store}>
                <AppNavigator/>
            </Provider>
        )
    }

}

export default AppScreen;
Expo.registerRootComponent(AppScreen);
