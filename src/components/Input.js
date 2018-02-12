import React from 'react';
import {Text, View, TextInput} from 'react-native';


const CustomInput = ({lebel, value, onChangeText,placeholder})=> {
    const { containerStyle } = styles;
    return (
        <View style={containerStyle}>
            <TextInput
                placeholder={placeholder}
                autoCorrect={false}
                value={value}
                onChangeText={onChangeText}
                underlineColorAndroid = "transparent"
            />
        </View>
    )
}

const styles={
    containerStyle: {
       // height:40,
        //flex: 1,
        //width:300,
        backgroundColor:'#fff',
        margin: 6,
        height: 40,
        borderColor: '#b3b3cc',
        borderWidth: 1,
        marginLeft:20,
        marginRight:20
       //flexDirection :'row',
        //alignItems: 'center'
    }
}
export default CustomInput;