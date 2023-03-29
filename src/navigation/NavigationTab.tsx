import React from 'react';
import {Image} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {HomeStackNavigator} from './StackNavigator';
import HistoryStackNavigator from './HistoryStackNavigator';
import color from '../styles/color';
import font from '../styles/font';
import icon from '../styles/icon';

const homeInactive = '../assets/icons/home.png';
const homeActive = '../assets/icons/home-filled.png';
const storeInactive = '../assets/icons/store.png';
const storeActive = '../assets/icons/store-filled.png';
const historyInactive = '../assets/icons/history.png';
const historyActive = '../assets/icons/history-filled.png';
const profileInactive = '../assets/icons/user.png';
const profileActive = '../assets/icons/user-filled.png';

const Tab = createBottomTabNavigator();
const options = {
  headerShown: false,
  tabBarActiveTintColor: color.black,
  tabBarInactiveTintColor: color.gray_300,
  tabBarStyle: {height: 80, paddingTop: 12, paddingBottom: 12},
  tabBarLabelStyle: {fontFamily: font.inter.medium, fontSize: 12},
};

/**
 * NavigationTab component for bottom tab navigation
 * @returns JSX.Element
 */
const NavigationTab = (): JSX.Element => {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Home"
        component={HomeStackNavigator}
        options={{
          ...options,
          tabBarIcon: ({focused}: {focused: boolean}) => {
            return (
              <Image
                style={icon.size}
                source={focused ? require(homeActive) : require(homeInactive)}
              />
            );
          },
        }}
      />
      <Tab.Screen
        name="Stores"
        component={HomeStackNavigator}
        options={{
          ...options,
          tabBarIcon: ({focused}: {focused: boolean}) => {
            return (
              <Image
                style={icon.size}
                source={focused ? require(storeActive) : require(storeInactive)}
              />
            );
          },
        }}
      />
      <Tab.Screen
        name="History"
        component={HistoryStackNavigator}
        options={{
          ...options,
          tabBarIcon: ({focused}: {focused: boolean}) => {
            return (
              <Image
                style={icon.size}
                source={
                  focused ? require(historyActive) : require(historyInactive)
                }
              />
            );
          },
        }}
      />
      <Tab.Screen
        name="Profile"
        component={HomeStackNavigator}
        options={{
          ...options,
          tabBarIcon: ({focused}: {focused: boolean}) => {
            return (
              <Image
                style={icon.size}
                source={
                  focused ? require(profileActive) : require(profileInactive)
                }
              />
            );
          },
        }}
      />
    </Tab.Navigator>
  );
};

export default NavigationTab;
