import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  NavigatorIOS,
  TouchableHighlight,
} from 'react-native';

import Home from './app/components/Home';

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
