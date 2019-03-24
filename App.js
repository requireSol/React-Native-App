import React, { Component } from 'react';
import { Text, View } from 'react-native';
window.navigator.userAgent = "react-native";
var io = require('socket.io-client/socket.io');

export default class HelloWorldApp extends Component {
  constructor(props) {
    super(props);
  
    // Creating the socket-client instance will automatically connect to the server.
    this.socket = SocketIOClient('http://localhost:19001');
  }
  render() {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <Text>Hello, world!</Text>
      </View>
    );
  }
} 