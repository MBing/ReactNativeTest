import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  Image,
  View,
} from 'react-native';

const MOCK_DATA = [
  {
    name: "Mr. Johns Conch house",
    address: "12th Street, Neverland",
    images: {
      thumbnail: "http://hmp.me/ol5"
    }
  }
];

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  thumbnail: {
    width: 53,
    height: 81,
  },
  rightContainer: {
    flex: 1,
  },
  name: {
    fontSize: 20,
    marginBottom: 8,
    textAlign: 'center',
  },
  address: {
    textAlign: 'center',
  }
});

export default class ListProperty extends Component {
  render() {
    let property = MOCK_DATA[0];
    return (
      <View style={styles.container}>
        <Image
          source={{uri: property.images.thumbnail}}
          style={styles.thumbnail} />
        <View style={styles.rightContainer}>
          <Text style={styles.name}>{property.name}</Text>
          <Text style={styles.address}>{property.address}</Text>
        </View>
      </View>
    );
  }
}
