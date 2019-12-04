import React, {Component} from 'react';
import {AppRegistry, Text, View, Button} from 'react-native';

export default class Component6 extends Component {
  
  render() {
    return(
      <View>
        <Button onPress = {() => {this.props.navigation.navigate('Component5')}} title = "Go Back" />
      </View>
    );
  }
}

AppRegistry.registerComponent('Component6', () => Component6);