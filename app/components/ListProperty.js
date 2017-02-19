import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  Image,
  View,
  ListView,
  AlertIOS,
} from 'react-native';

const REQUEST_URL = 'http://www.akshatpaul.com/list-all-properties';

export default class ListProperty extends Component {
  constructor(props) {
    super(props);
    let ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    this.state = {
      dataSource: ds,
      loaded: false,
    };
  }

  componentDidMount() {
    this.fetchData();
  }

  fetchData() {
    fetch(REQUEST_URL)
      .then(response => response.json())
      .then(responseData => {
        console.log(responseData);
        this.setState({
          house: responseData,
          dataSource: this.state.dataSource.cloneWithRows(responseData),
          loaded: true,
        })
      })
      .catch(error => {
        AlertIOS.alert('No Donut for you!');
        this.setState({
          loaded: true,
        });
      })
      .done();
  }

  render() {
    if (!this.state.loaded) {
      return this.renderLoadingView();
    }

    return (
      <ListView
        dataSource={this.state.dataSource}
        renderRow={this.renderProperty}
        style={styles.listView}
      />
    )
  }

  renderProperty(property) {
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

  renderLoadingView() {
    return (
      <View style={styles.container}>
        <Text>
          Loading houses...
        </Text>
      </View>
    );
  }
}

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
  },
  listView: {
    paddingTop: 70,
    backgroundColor: "#F5FCFF",
  },
});
