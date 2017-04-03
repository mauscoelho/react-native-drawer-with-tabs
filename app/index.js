import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View
} from 'react-native';
import { StackNavigator } from 'react-navigation';

class HomeScreen extends React.Component {
  static navigationOptions = {
    title: 'Welcome',
    header: {
      titleStyle: {
        textAlign: 'center',
        color: 'white'
      },
      style: {
        backgroundColor: '#757575',
      },
    }
  };
  render() {
    return <Text>Hello, Navigation!</Text>;
  }
}

const App = StackNavigator({
  Home: { screen: HomeScreen },
});

export default App;
