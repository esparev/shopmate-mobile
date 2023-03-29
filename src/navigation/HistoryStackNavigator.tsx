import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import History from '../screens/History';

const Stack = createStackNavigator();

/**
 * HistoryStackNavigator component for stack navigation
 * @returns JSX.Element
 */
const HistoryStackNavigator = (): JSX.Element => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="History"
        component={History}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};

export default HistoryStackNavigator;
