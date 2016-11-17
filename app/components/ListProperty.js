import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  Image,
  View,
  ListView
} from 'react-native';

const MOCK_DATA = [
  {
    name: "Mr. Johns Conch house",
    address: "12th Street, Neverland",
    images: {
      thumbnail: "http://hmp.me/ol5"
    }
  },
  {
    name: "Mr. Pauls Mansion",
    address: "625, sec-5, Ingsoc",
    images: {
      thumbnail: "http://hmp.me/ol6"
    }
  },
  {
    name: "Mr. Nalwayas Villa",
    address: "11, Heights, Oceania",
    images: {
      thumbnail: "http://hmp.me/ol6"
    }
  },
  {
    name: "Mr. Johns Conch house",
    address: "12th Street, Neverland",
    images: {
      thumbnail: "http://hmp.me/ol5"
    }
  },
  {
    name: "Mr. Pauls Mansion",
    address: "625, sec-5, Ingsoc",
    images: {
      thumbnail: "http://hmp.me/ol6"
    }
  },
  {
    name: "Mr. Nalwayas Villa",
    address: "11, Heights, Oceania",
    images: {
      thumbnail: "http://hmp.me/ol6"
    }
  },
  {
    name: "Mr. Johns Conch house",
    address: "12th Street, Neverland",
    images: {
      thumbnail: "http://hmp.me/ol5"
    }
  },
  {
    name: "Mr. Pauls Mansion",
    address: "625, sec-5, Ingsoc",
    images: {
      thumbnail: "http://hmp.me/ol6"
    }
  },
  {
    name: "Mr. Nalwayas Villa",
    address: "11, Heights, Oceania",
    images: {
      thumbnail: "http://hmp.me/ol6"
    }
  },
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
  },
  listView: {
    paddingTop: 20,
    backgroundColor: "#F5FCFF",
  }
});

export default class ListProperty extends Component {
  constructor(props) {
    super(props);
    let ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    this.state = {
      dataSource: ds.cloneWithRows(MOCK_DATA),
    };
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

  render() {
    return (
      <ListView
        dataSource={this.state.dataSource}
        renderRow={this.renderProperty}
        style={styles.listView} />
    )
  }
}
