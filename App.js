import React, { Component } from 'react';
import { StyleSheet, View, Text, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './Home';
import { extendTheme, NativeBaseProvider } from 'native-base';

const newColorTheme = {
  brand: {
    900: '#8287af',
    800: '#7c83db',
    700: '#b3bef6',
  },
};
const theme = extendTheme({ colors: newColorTheme });

class App extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const Stack = createNativeStackNavigator();
    return (
      <NativeBaseProvider theme={theme}>
        <NavigationContainer>
          <Stack.Navigator>
              <Stack.Screen name="Home">
                {props => <Home {...props} />}
              </Stack.Screen>
          </Stack.Navigator>
        </NavigationContainer>
      </NativeBaseProvider>
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

export default App;