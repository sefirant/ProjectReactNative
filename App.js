/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View,Image} from 'react-native';
import Judul from './Components/judul';


export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>
      <Judul/>
        <Text style={styles.welcome}>Nama : Sefira Arianti</Text>
        <Text style={styles.instructions}>No : 35</Text>
        <Text style={styles.instructions}>Kelas : XI RPL 1</Text>
        <Image style={styles.gambar}
        source={require('./pict/sef.jpg')} 
        style={{width : 400, height : 450}}
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
    backgroundColor: 'grey',
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
