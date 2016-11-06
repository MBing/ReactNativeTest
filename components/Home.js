import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableHighlight
} from 'react-native';

export default class Home extends Component {
  handleListProperty() {
    console.log('Button clicked successfully');
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.topBox}>
          <Image source={require('../img/home/home.png')} style={styles.image} />
        </View>
        <View style={styles.centerBox}></View>
        <View style={styles.bottomBox}>
          <TouchableHighlight style={styles.button} onPress={this.handleListProperty} underlayColor='#99D9F4'>
            <Text style={styles.buttonText}>Add House</Text>
          </TouchableHighlight>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
  },
  welcome: {
    fontSize: 25,
    textAlign: 'center',
  },
  button: {
    flex: 1,
    backgroundColor: '#48BBEC',
    borderColor: '#48BBEC',
    borderWidth: 1,
    borderRadius: 8,
    alignSelf: 'stretch',
    justifyContent: 'center',
    margin: 10
  },
  buttonText: {
    fontSize: 18,
    color: 'white',
    alignSelf: 'center'
  },
  topBox: {
    flex: 1,
    backgroundColor: '#E9D460'
  },
  centerBox: {
    flex: 1,
    backgroundColor: '#F2784B',
    alignItems: 'center',
    justifyContent: 'center'
  },
  bottomBox: {
    flex: 1,
    backgroundColor: '#019875'
  },
  image: {
    marginTop: 50,
    width: 58,
    height: 58
  }

});