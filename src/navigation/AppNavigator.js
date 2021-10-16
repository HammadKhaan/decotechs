import React from 'react';
import {View} from 'react-native';
// import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Landing from '../screen/Landing';
import Home from '../screen/Home';
import UIServices from '../screen/UIServices';
import WebServices from '../screen/WebServices';
import MobileServices from '../screen/MobileServices';
import ITServices from '../screen/ITServices';
import GraphicServices from '../screen/GraphicServices';
import SEOServices from '../screen/SEOServices';
import {createStackNavigator} from '@react-navigation/stack';

const Stack = createStackNavigator();
const AppNavigator = () => {
  return (
    <Stack.Navigator initialRouteName="Landing" headerMode="none">
      <Stack.Screen name="Landing" component={Landing} />
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="UI" component={UIServices} />
      <Stack.Screen name="Web" component={WebServices} />
      <Stack.Screen name="Mobile" component={MobileServices} />
      <Stack.Screen name="IT" component={ITServices} />
      <Stack.Screen name="Graphic" component={GraphicServices} />
      <Stack.Screen name="SEO" component={SEOServices} />
    </Stack.Navigator>
  );
};

export default AppNavigator;
