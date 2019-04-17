
import React from 'react'
import {Button, StatusBar, StyleSheet, View} from "react-native";
import AsyncStorage from "@react-native-community/async-storage";
export default class OtherScreen extends React.Component {
    static navigationOptions = {
        title: 'Lots of features here',
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
                <Button title="I'm done, sign me out" onPress={this._signOutAsync}/>
                <StatusBar barStyle="default"/>
            </View>
        );
    }

    _signOutAsync = async () => {
        await AsyncStorage.clear();
        this.props.navigation.navigate('Auth');
    };
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#2A001A'
    },
});