import React, { Component } from 'react';
import Home from './components/Home';
import {
          AppRegistry,
          StyleSheet,
          NavigatorIOS,
        } from 'react-native';

export default class MainView extends Component {
  render() {
    return (
      <NavigatorIOS barTintColor="#48BBEC" titleTextColor="#FFFFFF"
        style={styles.navigator} initialRoute={{
          title: 'House Share',
          component: Home
        }}
      />
    );
  }
}

const styles = StyleSheet.create({
  navigator: {
    flex: 1
  }
});

AppRegistry.registerComponent('newReactNativeApp', () => MainView);
