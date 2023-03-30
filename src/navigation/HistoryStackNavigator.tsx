import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import History from '../screens/History';
import Purchases from '../screens/Purchases';
import HistoryStackParamList from '../@types/Navigation/HistoryStackParamList';

const Stack = createStackNavigator<HistoryStackParamList>();

/**
 * HistoryStackNavigator component for stack navigation
 * @returns JSX.Element
 */
const HistoryStackNavigator = (): JSX.Element => {
  const options = {headerShown: false};

  return (
    <Stack.Navigator>
      <Stack.Screen name="History" component={History} options={options} />
      <Stack.Screen name="Purchases" component={Purchases} options={options} />
    </Stack.Navigator>
  );
};

export default HistoryStackNavigator;
