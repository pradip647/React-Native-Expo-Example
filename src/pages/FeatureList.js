import React from 'react';
import { StyleSheet, Text, View,Button, TouchableOpacity, ListView } from 'react-native';

import {Actions} from 'react-native-router-flux';

import { List, ListItem,Card } from 'react-native-elements'
//https://github.com/djchie/react-native-star-rating
const list = [
    {
      name: 'Amy Farha',
      avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg',
      subtitle: 'Vice President'
    },
    {
      name: 'Chris Jackson',
      avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg',
      subtitle: 'Vice Chairman'
    }
  ]
class FeatureList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          starCount: 3.5
        };
      }
      onStarRatingPress(rating) {
        this.setState({
          starCount: rating
        });
      }

    static navigationOptions = {
        title: 'List Page',
        //header: null,
      };

      onPressTitle(){
    //Actions.register()
    alert("clicked..!!")
    }

    openAlert(){
        alert("open alert");
    }
    render() {
        return (
        <View style={styles.container}>
            <List containerStyle={{marginBottom: 20}}>  
                <ListItem
                    style={{alignSlef:'center'}}
                    title="Login"
                    onPress={this.openAlert}
                />
            </List>
            {/* <Button title="clickme..!!" onPress={this._handlePress}/> */}
        </View>
        );
    }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    //alignItems: 'center',
    //justifyContent: 'center',
  },
});

export default FeatureList;