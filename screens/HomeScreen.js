import React from 'react';
import SplashScreen from "react-native-splash-screen";
import {Button, StyleSheet, View} from "react-native";
import AsyncStorage from "@react-native-community/async-storage";
export default class HomeScreen extends React.Component {
    componentDidMount() {
        SplashScreen.hide()
    }
    static navigationOptions = {
        title: 'Welcome to the app!',
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
                <Button title="Show me more of the app" />
                <Button
                    title="Outline button"
                    type="outline"
                    onPress={this._showMoreApp}
                />
                <Button title="Actually, sign me out :)" onPress={this._signOutAsync}/>
            </View>
        );
    }

    _showMoreApp = () => {
        this.props.navigation.navigate('Other');
    };

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
