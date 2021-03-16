import * as React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {Login} from '../screens/login';

const MainStack = createStackNavigator();

const MainStackNavigator = () => {
  return (
    <MainStack.Navigator>
      <MainStack.Screen name="Login" component={Login} />
    </MainStack.Navigator>
  );
};

export default MainStackNavigator;
