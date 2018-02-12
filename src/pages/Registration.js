import React from 'react';
import { StyleSheet, Text, View,Button } from 'react-native';
import {Actions} from 'react-native-router-flux';

import Header from '../components/Header';
class RegistrationScreen extends React.Component {
    static navigationOptions = {
        title: 'Registration Page',
        //header: null,
      };

    _handlePress = () => {
       // this.props.navigation.navigate('Home');
        Actions.login();
    }
  render() {
    return (
        <View style={{flex:1}}>
            {/* <Header header="Login"/> */}
            <View style={styles.container}>
                <Text>This is Login Page....!!</Text>
                <Button title="go to Login..!!" onPress={this._handlePress}/>
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

export default RegistrationScreen;