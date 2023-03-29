import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {HomeStackNavigator} from './StackNavigator';

const Tab = createBottomTabNavigator();

/**
 * NavigationTab component for bottom tab navigation
 * @returns JSX.Element
 */
const NavigationTab = (): JSX.Element => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={HomeStackNavigator} options={{headerShown: false}} />
      {/* <Tab.Screen name="Stores" component={Stores} />
      <Tab.Screen name="History" component={History} />
      <Tab.Screen name="Profile" component={Profile} /> */}
    </Tab.Navigator>
  );
};

export default NavigationTab;
