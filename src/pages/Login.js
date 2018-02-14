import React from 'react';
import { StyleSheet, Text, View,Button, ScrollView,Image,TouchableOpacity } from 'react-native';
import {Actions} from 'react-native-router-flux';

 import {Header,Input,CustomFbButton} from '../components';

class LoginScreen extends React.Component {
  constructor(props){
      super(props);
      this.state={
        username:'',
        password:''
      }
  }
    static navigationOptions = {
        title: 'Login Page',
         header: null,
      };

    _handlePress = () => {
        alert("hello");
    }
  render() {
    return (
      
        <View style={styles.container}>
            <Header headerText="Login Page"/>
            <ScrollView style={{height:200, top:100}}>
                <Input 
                    placeholder="Please Enter your Username"
                    value={this.state.username}
                    onChangeText={text=>this.setState({username:text})}
                />
                <Input 
                    placeholder="Please Enter your password"
                    value={this.state.password}
                    onChangeText={text=>this.setState({password:text})}
                />
                <Input 
                    placeholder="Please Enter your Username"
                    value={this.state.username}
                    onChangeText={text=>this.setState({username:text})}
                />
                <Input 
                    placeholder="Please Enter your password"
                    value={this.state.password}
                    onChangeText={text=>this.setState({password:text})}
                />
                <Input 
                    placeholder="Please Enter your Username"
                    value={this.state.username}
                    onChangeText={text=>this.setState({username:text})}
                />
                <Input 
                    placeholder="Please Enter your password"
                    value={this.state.password}
                    onChangeText={text=>this.setState({password:text})}
                />
            </ScrollView>
            {/* <View style={{bottom:40,width:300, alignSelf:'center'}}>
                <Button style={{}} title="Login" onPress={this._handlePress}/>
            </View> */}
            <CustomFbButton onPress={this._handlePress} />


      </View>
      
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  
});

export default LoginScreen;