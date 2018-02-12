import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import LoginScreen from './src/pages/Login';
import HomeScreen from './src/pages/Home';
import RegistrationScreen from './src/pages/Registration';
// import {
//   StackNavigator,
// } from 'react-navigation';

import {Router, Route, Schema, Animations, TabBar,Stack,Scene, Actions} from 'react-native-router-flux'
export default class App extends React.Component {

  constructor(props){
    super(props)
  }
  render() {
    return (
          <Router>
            <Stack key="root">
            <Scene key="login" component={LoginScreen}/>
            <Scene key="register" component={RegistrationScreen} title="Register" />
            <Scene key="home" component={HomeScreen} />
            </Stack>
          </Router>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },

});

