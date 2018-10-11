import React, { Component } from 'react';
import {  StyleSheet,  Text,  View,  Image, TextInput, TouchableOpacity, ImageBackground} from 'react-native';
import { createStackNavigator } from 'react-navigation';
export default class Login extends Component {
  render() {
    return (
    	<ImageBackground source={require('./zal.jpg')}
         style={styles.container}>
        
        <View style={styles.inner}>
    	<Image d
    	style={{width:100,height:100}}
    	source={require('./value.png')} />
    	<TextInput
    	style = {styles.inputBox}
    	placeholder="Phone number or Email"
    	/>
    	<TextInput
    	style = {styles.inputBox}
    	placeholder="Password"
    	secureTextEntry={true}
    	/>
    	<TouchableOpacity style={styles.button}
        onPress={() => this.props.navigation.navigate('Home')}
        >
    	<Text style={styles.buttonText}> LOGIN </Text>
    	</TouchableOpacity>

    	<TouchableOpacity>
    	<Text>Forgot password?</Text>
    	</TouchableOpacity>
        </View>
    	</ImageBackground>    	
    )
  }
}

const styles = StyleSheet.create({
  	container: {
	    flex: 1,
	    
	    
        
	},
    inner:{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },

	inputBox:{
		width: 250,
		fontSize: 13,
        backgroundColor: '#fff'
        
	},

	button:{
		width: 250,
		height: 40,
		alignItems: 'center',
		justifyContent: 'center',
		backgroundColor: '#3B5998',
		marginVertical: 10,
		paddingHorizontal: 80,
        
	},

	buttonText:{
		fontSize:13,
		color:'#f7f7f7'
        
	},
  
})