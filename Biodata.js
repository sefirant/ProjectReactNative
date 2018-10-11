import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View,Image} from 'react-native';
import Judul from './Components/judul';
import { createStackNavigator } from 'react-navigation';

export default class Biodata extends Component {
  render() {
    return (
      <View style={styles.container}>
      
      <Judul judul="BIODATA"/>
      <Judul judul="LOGIN"/>
      <Judul judul="FORM"/>
      
        <Text style={styles.welcome}>Nama : Sefira Arianti</Text>
        <Text style={styles.instructions}>No : 35</Text>
        <Text style={styles.instructions}>Kelas : XI RPL 1</Text>
        <Image style={styles.gambar}
        source={require('./pict/hai.jpg')} 
        style={{width : 200, height : 200}}
        />

        
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#AA0C0C',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
    color:'black',
    fontFamily: 'PenguinAttack',
  },
  instructions: {
    textAlign: 'center',
    color: 'black',
    fontFamily: 'PenguinAttack',
    marginBottom: 5,
    fontSize: 20,
  },
  gambar:{
    width : 400,
    height : 500,
  }
});
