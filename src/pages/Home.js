import React from 'react';
import { StyleSheet, Text, View,Button } from 'react-native';

import {Actions} from 'react-native-router-flux';
class HomeScreen extends React.Component {
    static navigationOptions = {
        title: 'HomePage',
        //header: null,
      };

      _handlePress(){
        Actions.register()
      }
  render() {
    return (
      <View style={styles.container}>
        <Text>This is Home Page....!!</Text>
        <Button title="clickme..!!" onPress={this._handlePress}/>
      </View>
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

export default HomeScreen;