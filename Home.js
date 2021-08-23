import { StatusBar } from 'expo-status-bar';
import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';
import MapView from 'react-native-maps';
import { Button } from "native-base"

class Home extends Component {
  render() {
    return (
      <View style={styles.container}>
        <StatusBar style="auto" />
        <View style={styles.button} >
          <Button onPress={() => console.log("hello world")}>PRIMARY</Button>
        </View>
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
    zIndex: 0,
  },
  button: {
    zIndex: 10,
    elevation: Platform.OS === 'android' ? 10 : 0,
    position: 'absolute',
    top: 40,
    right: 10,
  },
});

export default Home;