import React, { Component } from 'react';
import {
    AppRegistry,
    Text,View,
    Button
} from 'react-native';
import {Provider} from 'react-redux';
import configureStore from './stores/configureStore';
const store=configureStore();//获取store
import { StackNavigator } from 'react-navigation';
import Login from './components/login';
import Register from './components/register';
import PswdFind from './components/pswdFind';
import Reset from './components/reset';
import Home from './components/home';
// import WelcomeScreen from './components/welcome';

const SimpleApp = StackNavigator({
    // Welcome: { screen: WelcomeScreen },
    Home:{screen: Home},
    Login:{ screen: Login },
    Register: {screen: Register},
    PswdFind: {screen: PswdFind},

    Reset: {screen: Reset},
},{
     headerMode:'none'
});

export default class k12 extends Component {
    render (){
        return (
            <Provider store={store}>
                <SimpleApp />
            </Provider>
        )
    }
}

AppRegistry.registerComponent('k12', () => k12);