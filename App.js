import React from 'react';
import {
    ActivityIndicator,
    Button,
    StatusBar,
    StyleSheet,
    View,
    Platform
} from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
import {createStackNavigator, createSwitchNavigator, createAppContainer} from 'react-navigation';
import SplashScreen from 'react-native-splash-screen';

const instructions = Platform.select({
    ios: 'Press Cmd+R to reload,\n' +
        'Cmd+D or shake for dev menu',
    android: 'Double tap R on your keyboard to reload,\n' +
        'Shake or press menu button for dev menu',
});

import HomeScreen from './screens/HomeScreen';
import OtherScreen from './screens/OtherScreen';
import SignInScreen from './screens/SignInScreen';
import AuthLoadingScreen from './screens/AuthLoadingScreen';

const AppStack = createStackNavigator({Home: HomeScreen, Other: OtherScreen});
const AuthStack = createStackNavigator({SignIn: SignInScreen});

export default createAppContainer(
                createSwitchNavigator(
    {
        AuthLoading: AuthLoadingScreen,
        App: AppStack,
        Auth: AuthStack,
    },
    {
        initialRouteName: 'AuthLoading',
    }
));