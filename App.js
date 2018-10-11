import React from 'react';
import { Button, View, Text } from 'react-native';
import { createStackNavigator } from 'react-navigation'; // Version can be specified in package.json
import Biodata from './Biodata';
import Login from './Login';
const RootStack = createStackNavigator(
  {
    Home: Biodata,
    Details: Login,
  },
  {
    initialRouteName: 'Details',
  }
);

export default class App extends React.Component {
  render() {
    return <RootStack />;
  }
}
