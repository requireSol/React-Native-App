
import React from 'react';

import SplashScreen from "react-native-splash-screen";
import { Input } from 'react-native-elements';
import {StyleSheet} from "react-native";
export default class InputCustom extends React.Component {


    render() {
        return (
            <Input
                placeholder={this.props.name}
                inputStyle={
                    styles.input
                }
                inputContainerStyle={
                    styles.inputContainer
                }
            />
        );
    }

}

const styles = StyleSheet.create({

    input:{
        color:'black',
        backgroundColor:'white',
        width: 40,
        fontSize:14,
        borderRadius: 4,
        borderWidth: 0.5,
        borderColor: '#d6d7da',
        //opacity: 0.5,
    },
    inputContainer:{
        marginRight: 50,
        marginLeft: 50,
        height: 20,
        marginBottom :20,
        opacity: 0.5,
    }
});