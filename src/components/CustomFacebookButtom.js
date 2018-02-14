import React from 'react';
import {Text, View, TouchableOpacity, Image} from 'react-native';


//make a compontent
const CustomFbButton = ({props,onPress}) =>{
   return (
        <TouchableOpacity style={styles.button} onPress={onPress}>
            <Image style={{width: 50, height: 50, bottom:10}} source={{uri:"https://www.thetechy.com/wp-content/uploads/2017/11/facebook_logos_PNG19753.png"}}/>
            <Text style={{color:'#fff',left:20}}>Sign In With Facebook</Text>
        </TouchableOpacity>
   );

};


const styles = {
    button: {
        margin:30,
        height:50,
        flexDirection:'row',
        backgroundColor: '#3b5998',
        borderRadius: 35,
        padding: 10,
        marginBottom: 20,
      },
}
//make the component available to other parts of the app
export default CustomFbButton;