import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  Image,
  View,
  ListView,
  AlertIOS,
  TextInput,
  TouchableHighlight,
} from 'react-native';

export default class AddProperty extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: '',
      address: '',
    };
  }

  render() {
    return (
      <View style={styles.container}>
        <TextInput
          style={styles.textBox}
          placeholder="name"
          onChangeText={name => this.setState({name})}
          value={this.state.name}
        />
        <TextInput
          style={styles.textBox}
          placeholder="address"
          onChangeText={address => this.setState({address})}
          value={this.state.address}
        />
        <TouchableHighlight
          style={styles.button}
          onPress={this._onPressButtonPost}
          underlayColor="#99d9f4"
        >
          <Text style={styles.buttonText}>Add House</Text>
        </TouchableHighlight>
      </View>
    )
  }

  _onPressButtonPOST() {
    fetch("http://www.akshatpaul.com/properties", {
      method: "POST",
      body: JSON.stringify({
        property: {
          name: this.state.name,
          address: this.state.address,
        }
      })
    })
    .then(responseData => {
      AlertIOS.alert("Created");
    })
    .done();
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#F5FCFF',
  },
  textBox: {
    width: 300,
    height: 60,
    borderColor: 'gray',
    borderWidth: 1,
    alignSelf: 'stretch',
    justifyContent: 'center',
    marginTop: 10,
  },
  button: {
    height: 60,
    backgroundColor: '#48BBEC',
    borderColor: '#48BBEC',
    borderWidth: 1,
    borderRadius: 8,
    alignSelf: 'stretch',
    justifyContent: 'center',
    margin: 10,
  },
  buttonText: {
    fontSize: 18,
    color: 'white',
    alignSelf: 'center',
  },
});
