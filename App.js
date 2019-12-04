import React, {Component} from 'react';
import {AppRegistry, Text, View} from 'react-native';
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';

import Component5 from './app/components/Component5/Component5';
import Component6 from './app/components/Component6/Component6';

const routeConfig = {
  Component5: {
    screen: Component5
  },
  Component6: {
    screen: Component6
  },
};

const navigatorConfig = {
  headerMode: 'none',
};

const navigator = createStackNavigator(routeConfig, navigatorConfig);

const App = createAppContainer(navigator);

export default App;