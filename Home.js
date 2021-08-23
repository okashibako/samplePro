import { StatusBar } from 'expo-status-bar';
import React, { Component } from 'react';
import { StyleSheet, View, Button } from 'react-native';
import MapView, { Overlay } from 'react-native-maps';
import {  Center, NativeBaseProvider, Container } from "native-base"

class Home extends Component {
  render() {
    return (
      <View style={styles.container}>
        <StatusBar style="auto" />
        <Button
          onPress={() => this._handlePress()}
          title="Press Me"
        >
        </Button>
        <MapView
          initialRegion={{
            latitude: 34.78825,
            longitude: 137.4324,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
          }}
          style={styles.map} 
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
  },
  map: {
    width: "100%",
    height: "100%",
  },
  button: {
    elevation: Platform.OS === 'android' ? 10 : 0,
    position: 'absolute',
    top: 160,
    right: 10,
  },
});

export default Home;