import React, {Component} from 'react';
import {Text} from 'react-native';

class Judul extends Component {
	render() {
		return (
			<Text style={salon.Judul}>BIODATA</Text>
		)
	}
}
const salon = {
	Judul: {
		color : '#fff',
		fontSize: 50,
		fontWeight : 'bold',
		backgroundColor : '#C60E0E'
	}
}
export default Judul;