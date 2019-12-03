import React, {Component} from 'react';
import {AppRegistry, Text, View, Navigator} from 'react-native';

import Component4 from './app/components/Component4/Component4'

export default class myapp extends Component {
  // renderScene(route, Navigator) {
  //   switch(route.id) {
  //     case 'component5':
  //       return (<Component5 navigator = {navigator} title = "component5" />)
  //     case 'component6':
  //       return (<Component6 navigator = {navigator} title = "component6" />)
  //   }
  // }

  // render() {
  //   return(
  //     <Navigator 
  //       initialRoute = {{id: 'component5'}} 
  //       renderScene = {this.renderScene}
  //       configureScreen = {(route, routeStack) => Navigator.SceneConfigs.FloatFromBottom}
  //     />
  //   );
  // }
  render() {
    return(
      <View>
        <Component4 />
      </View>
    );
  }
}

AppRegistry.registerComponent('myapp', () => myapp);