import React, { Component } from 'react';
import { Text, View } from 'react-native';
window.navigator.userAgent = "react-native";
import io from 'socket.io-client/dist/socket.io';

export default class HelloWorldApp extends Component {
  constructor(props) {
    super(props);
    console.log("Socket io connected");
    // Creating the socket-client instance will automatically connect to the server.
    this.socket = io('localhost:3000', {jsonp: false});
  }
  render() {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <Text>Hello, world!</Text>
      </View>
    );
  }
} 