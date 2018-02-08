import React, { Component } from 'react';

import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
} from 'react-native';

import { Rating } from 'react-native-elements';
import MapView from 'react-native-maps';

class HotelDetailScreen extends Component {

  constructor(props) {
    super(props);
    this.state = {
      hotel: props.navigation.state.params.hotel
    };
  }

  static navigationOptions = ({ navigation }) => ({
    title: `${navigation.state.params.hotel.name}`,
    headerTitleStyle : {
        textAlign: 'left',
        alignSelf:'center',
        color: 'black',
        fontWeight: 'bold'
    },
    headerStyle:{
        backgroundColor:'white',
    },
});

  render() {
    return(
        <View style={styles.containerStyle}>
          <View style={ { height: 350, margin: 5, backgroundColor: 'white' } }>
              <View style={{ padding: 10, backgroundColor: 'white', flexDirection: 'column' }}>
                <View style={{ flexDirection: 'column'}}>
                  <Text style={styles.titleStyle} >
                      {this.state.hotel.name}
                  </Text>
                  <Rating
                    onFinishRating={this.ratingCompleted}
                    imageSize={20}
                    startingValue={this.state.hotel.rating}
                    readonly={true}
                    style={{ paddingVertical: 5, height: 50, width: 100 }}/>
                </View>
                <View style={{ flexDirection: 'row'}}>
                  <ImageBackground
                    style={{ width: 30, height: 30}}
                    source={require('almundo/src/img/marker.png')}
                  />
                  <Text style={styles.addressStyle}>
                    {this.state.hotel.address}
                  </Text>
                </View>
                <View style={{height: 200, width: undefined, marginVertical: 5}}>
                  <MapView
                    style={styles.map}
                    initialRegion={ {
                      latitude: this.state.hotel.latLong.latitude,
                      longitude: this.state.hotel.latLong.longitude,
                      latitudeDelta: this.state.hotel.latLong.latitudeDelta,
                      longitudeDelta: this.state.hotel.latLong.longitudeDelta,
                    }}>
                    <MapView.Marker
                        coordinate={  {
                          latitude: this.state.hotel.latLong.latitude,
                          longitude: this.state.hotel.latLong.longitude,
                          latitudeDelta: this.state.hotel.latLong.latitudeDelta,
                          longitudeDelta: this.state.hotel.latLong.longitudeDelta,
                        }}
                      />
                  </MapView>
                </View>
              </View>
          </View>
        </View>
    )
  }
}

const styles = {
  containerStyle: {
    flex: 1,
    flexDirection: 'column'
  },
  titleStyle: {
    fontSize: 20,
    color: 'black',
    fontWeight: 'bold'
  },
  addressStyle: {
    fontSize: 15,
    color: '#ccc',
    alignSelf: 'center',
    marginLeft: 10,
    fontWeight: 'bold'
  },
  imageStyle: {
    width: 40,
    height: 40,
    backgroundColor: '#ccc',
    overflow: 'hidden',
    alignSelf: 'stretch'
  },
  map: {
    ...StyleSheet.absoluteFillObject,
  }
}

export default HotelDetailScreen;
