import AsyncStorage from "@react-native-community/async-storage";
import {ActivityIndicator, Button, StatusBar, View} from "react-native";
import {createStackNavigator} from "react-navigation";

class AuthLoadingScreen extends React.Component {
    constructor() {
        super();
        this._bootstrapAsync();
    }

    // Fetch the token from storage then navigate to our appropriate place
    _bootstrapAsync = async () => {
        const userToken = await AsyncStorage.getItem('userToken');

        // This will switch to the App screen or Auth screen and this loading
        // screen will be unmounted and thrown away.
        this.props.navigation.navigate(userToken ? 'App' : 'Auth');
    };

    // Render any loading content that you like here
    render() {
        return (
            <View style={styles.container}>
                <Button title="Actually, sign me out :)" onPress={this._signOutAsync}/>
                <ActivityIndicator/>
                <StatusBar barStyle="default"/>
            </View>
        );
    }
}
