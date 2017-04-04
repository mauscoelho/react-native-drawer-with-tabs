import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Button,
  Image,
  ScrollView,
  Animated
} from 'react-native';
import { DrawerNavigator, TabNavigator, TabView, StackNavigator } from 'react-navigation';


class MySetupScreen extends React.Component {
  static navigationOptions = {
    title: 'MySetupScreen',
    drawer: () => ({
      label: 'MySetupScreen',
      icon: ({ tintColor }) => (
        <Image
          source={require('./Play.png')}
          style={[styles.icon, {tintColor: tintColor}]}
        />
      ),
    }),
  }

  render() {
    return (
      <Button
        onPress={() => this.props.navigation.goBack()}
        title="Go back home"
      />
    );
  }
}

class MyHomeScreenTab extends React.Component {
  static navigationOptions = {
    title: 'HomeTab',
    tabBar: {
      title: 'HomeTab',
      label: 'HomeTab',      
      icon: ({ tintColor }) => (
        <Image
          source={require('./Play.png')}
          style={[styles.icon, {tintColor: tintColor}]}
        />
      ),
    },
  }

  render() {
    return (
      <Button
        onPress={() => this.props.navigation.navigate('NotificationsTab')}
        title="Go to notifications Tab"
      />
    );
  }
}

class MyNotificationsScreenTab extends React.Component {
static navigationOptions = {
    title: 'MyNotificationsScreenTab',
    header: ({state}) => {
          return {
            style: {
              position: 'absolute',
              top: (!state.params ? 0 : state.params.animatedValue),
              left: 0,
              right: 0,
              overflow: 'hidden',
            }
          }
        },
    tabBar: {
      label: 'NotificationsTab',
      icon: ({ tintColor }) => (
        <Image
          source={require('./Play.png')}
          style={[styles.icon, {tintColor: tintColor}]}
        />
      ),
    },
  }

  constructor(props) {
      super(props);
      
      this._animatedValue = new Animated.Value(0);
    }


    componentWillMount() {
      this.props.navigation.setParams({animatedValue: this._animatedValue.interpolate({
        inputRange: [0, 200],
        outputRange: [0, -80],
        extrapolate: 'clamp'
      })
    });
    }

  render() {
    return (
      <ScrollView
      onScroll={ Animated.event([{nativeEvent: {contentOffset: {y: this._animatedValue}}}]) }
            scrollEventThrottle={16}>
        <Text>Hello </Text>
        <Text>Hello </Text>
        <Text>Hello </Text>
        <Text>Hello </Text>
        <Text>Hello </Text>
        <Text>Hello </Text>
        <Text>Hello </Text>
        <Text>Hello </Text>
        <Text>Hello </Text>
        <Text>Hello </Text>
        <Text>Hello </Text>
        <Text>Hello </Text>
        <Text>Hello </Text>
        <Text>Hello </Text>
        <Text>Hello </Text>
        <Text>Hello </Text>
        <Text>Hello </Text>
        <Text>Hello </Text>
        <Text>Hello </Text>
        <Text>Hello </Text>
        <Text>Hello </Text>
        <Text>Hello </Text>
        <Text>Hello </Text>
        <Text>Hello </Text>
        <Text>Hello </Text>
        <Text>Hello </Text>
        <Text>Hello </Text>
        <Text>Hello </Text>
        <Text>Hello </Text>
        <Text>Hello </Text>
        <Text>Hello </Text>
        <Text>Hello </Text>
        <Text>Hello </Text>
        <Text>Hello </Text>
        <Text>Hello </Text>
        <Text>Hello </Text>
        <Text>Hello </Text>
        <Text>Hello </Text>
        <Text>Hello </Text>
        <Text>Hello </Text>
        <Text>Hello </Text>
        <Text>Hello </Text>
        <Text>Hello </Text>
        <Text>Hello </Text>
        <Text>Hello </Text>
        <Text>Hello </Text>
        <Text>Hello </Text>
        <Text>Hello </Text>
        <Text>Hello </Text>
        <Text>Hello </Text>
        <Text>Hello </Text>
        <Text>Hello </Text>
        <Text>Hello </Text>
        <Text>Hello </Text>
        <Text>Hello </Text>
        <Text>Hello </Text>
        <Text>Hello </Text>
        <Text>Hello </Text>
        <Text>Hello </Text>
        <Text>Hello </Text>
        <Text>Hello </Text>
        <Text>Hello </Text>
        <Text>Hello </Text>
        <Text>Hello </Text>
        <Text>Hello </Text>
        <Text>Hello </Text>
        <Text>Hello </Text>
        <Text>Hello </Text>
        <Text>Hello </Text>
        <Text>Hello </Text>
        <Text>Hello </Text>
        <Text>Hello </Text>
        <Text>Hello </Text>
        <Text>Hello </Text>
        <Text>Hello </Text>
        <Text>Hello </Text>
        <Text>Hello </Text>
        <Text>Hello </Text>
        <Text>Hello </Text>
        <Text>Hello </Text>
        <Text>Hello </Text>
        <Text>Hello </Text>
        <Text>Hello </Text>
        <Text>Hello </Text>
        <Text>Hello </Text>
        <Text>Hello </Text>
        <Text>Hello </Text>
        <Text>Hello </Text>
        <Text>Hello </Text>
        <Text>Hello </Text>
        <Text>Hello </Text>
        <Text>Hello </Text>
        <Text>Hello </Text>
        <Text>Hello </Text>
        <Text>Hello </Text>
        <Text>Hello </Text>
        <Text>Hello </Text>
        <Text>Hello </Text>        
      </ScrollView>      
    );
  }
}

const styles = StyleSheet.create({
  icon: {
    width: 24,
    height: 24,
  },
});

const MyTabs = TabNavigator({
  Home: {
    screen: MyHomeScreenTab,
  },
  Notifications: {
    screen: MyNotificationsScreenTab,
  },
}, {  
  tabBarPosition: 'top',
  swipeEnabled: true,
  tabBarComponent: TabView.TabBarTop,  
  tabBarOptions: {    
    activeTintColor: '#e91e63',
    style: {
    backgroundColor: '#EBEAEF',
  },
  },
});


const App = DrawerNavigator({
  Home: {
    screen: StackNavigator({
      HomeStack: {
        screen: MyTabs
      }
    }),
  },
  MySetupScreen: {
    screen: MySetupScreen,
  },
});

export default App;
