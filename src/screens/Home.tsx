import React from 'react';
import {View, Text, Image, StatusBar} from 'react-native';
import ScannedStatus from '../components/ScannedStatus';
import icon from '../styles/icon';
import home from './styles/home';

const shoppingCartInactive = '../assets/icons/shopping-cart-white-inactive.png';

/**
 * Home component of the app
 * @returns JSX.Element
 */
const Home = (): JSX.Element => {
  return (
    // Screen
    <View style={home.screen}>
      {/* StatusBar */}
      <StatusBar backgroundColor="#00373E" barStyle="light-content" />
      {/* Header */}
      <View style={home.header}>
        {/* Welcome message */}
        <View style={home.welcome}>
          {/* <Image source={require('')} /> */}
          <Text style={home.welcomeProfile}>GM</Text>
          <Text style={home.welcomeName}>Hello, Gwen</Text>
        </View>
        {/* Cart */}
        <View>
          <Image source={require(shoppingCartInactive)} style={icon.size} />
        </View>
      </View>
      {/* Scanned Status */}
      <ScannedStatus />
      {/* Foreground */}
      <View style={home.foreground}></View>
    </View>
  );
};

export default Home;
