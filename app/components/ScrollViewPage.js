import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  Image,
  View,
  ScrollView
} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  scrollView: {
    paddingTop: 20,
    paddingBottom: 20,
    backgroundColor: "#48BBEC",
  }
});

export default class ScrollViewPage extends Component {
  constructor() {
    super();
    let values = [1, 2, 3, 4];
    this.state = {
      values: values
    }
  }

  _renderRow(value, index) {
    return (
      <View
        style={styles.container}
        key={index} >
        <Text>{value + " <----- Slide the row "}</Text>
      </View>
    )
  }

  render() {
    return (
      <View style={styles.container}>
        <ScrollView
          horizontal={true}
          directionalLockEnabled={true}
          style={styles.scrollView}>
          {this.state.values.map(this._renderRow, this)}
        </ScrollView>
      </View>
    )
  }
}