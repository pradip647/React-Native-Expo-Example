import React from 'react';
import { StyleSheet, Text, View,Button } from 'react-native';
import {Actions} from 'react-native-router-flux';

 import {Header,Input} from '../components';

class LoginScreen extends React.Component {
    static navigationOptions = {
        title: 'Login Page',
         header: null,
      };

    _handlePress = () => {
        Actions.home();
    }
  render() {
    return (
        <View style={{flex:1}}>
            <Header headerText="Login"/>
            <Input placeholder="Please Enter your Username"/>
            <View style={styles.container}>
                <Text>This is Login Page....!!</Text>
                <Button title="clickme..!!" onPress={this._handlePress}/>
            </View>
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

export default LoginScreen;