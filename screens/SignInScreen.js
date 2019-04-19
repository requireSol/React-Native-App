
import React from 'react';
import SplashScreen from "react-native-splash-screen";
import {Button, StyleSheet, View, TextInput} from "react-native";
import AsyncStorage from "@react-native-community/async-storage";
import { Input } from 'react-native-elements';
import InputCustom from './components/InputCustom';
export default class SignInScreen extends React.Component {
    componentDidMount() {
        SplashScreen.hide()
    }

    constructor(props) {
        super(props);
        this.state = { text: 'Useless Placeholder' };
    }

    static navigationOptions = {
        title: 'Please sign in',
        headerStyle: {
            backgroundColor: '#2A001A',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
            fontWeight: 'bold',
        },
        shadowColor: '#fff',

    };

    render() {
        return (
            <View style={styles.container}>
                <Input
                    placeholder='Username'
                    inputStyle={
                        styles.input
                    }
                    inputContainerStyle ={
                        styles.inputContainer
                    }
                />
                <Button title="Sign in!" onPress={this._signInAsync}/>
            </View>
        );
    }

    _signInAsync = async () => {
        await AsyncStorage.setItem('userToken', 'abc');
        this.props.navigation.navigate('App');
    };
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#2A001A'
    },
    input:{
        color:'black',
        backgroundColor:'white',
        width: 40,
        fontSize:14
    },
    inputContainer:{
        marginRight: 50,
        marginLeft: 50,
        height: 10,
        paddingBottom: 20,
    }
});