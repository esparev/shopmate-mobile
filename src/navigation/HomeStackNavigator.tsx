import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Home from '../screens/Home';

const Stack = createStackNavigator();

/**
 * HomeStackNavigator component for stack navigation
 * @returns JSX.Element
 */
const HomeStackNavigator = (): JSX.Element => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={Home}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};

export default HomeStackNavigator;
