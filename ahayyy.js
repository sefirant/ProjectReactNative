/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';



export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>
       
        <Text style={styles.welcome}>Nama : Sefira Arianti</Text>
        <Text style={styles.instructions}>No : 35</Text>
        <Text style={styles.instructions}>Kelas : XI RPL 1</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'yellow',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
    color:'blue',
    fontFamily: 'PenguinAttack',
  },
  instructions: {
    textAlign: 'center',
    color: 'blue',
    fontFamily: 'PenguinAttack',
    marginBottom: 5,
    fontSize: 20,
  },
});
