
import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  StatusBar,
  Button
} from 'react-native';
import { createStackNavigator, createAppContainer  , StackActions,
    NavigationActions} from "react-navigation";


import SplashScreen from 'react-native-splash-screen';



const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' +
      'Cmd+D or shake for dev menu',
  android: 'Double tap R on your keyboard to reload,\n' +
      'Shake or press menu button for dev menu',
});
class HomeScreen extends Component {
    componentDidMount() {
        SplashScreen.hide()
    }
  render() {
      return (
          <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
              <Text>Home Screen</Text>
              <Button
                  title="Go to Details"
                  onPress={() => {
                      this.props.navigation.dispatch(StackActions.reset({
                          index: 0,
                          actions: [
                              NavigationActions.navigate({ routeName: 'Details' })
                          ],
                      }))
                  }}
              />
          </View>
      );
  }
}

class DetailsScreen extends React.Component {
    render() {
        return (
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                <Text>Details Screen</Text>
            </View>
        );
    }
}

const AppNavigator = createStackNavigator({
    Home: {
        screen: HomeScreen,
    },
    Details: {
        screen: DetailsScreen,
    },
}, {
    initialRouteName: 'Home',
});

export default createAppContainer(AppNavigator);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#2A001A',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
    color: '#F5FCFF',
  },
  instructions: {
    textAlign: 'center',
    color: '#F5FCFF',
    marginBottom: 5,
  },
});