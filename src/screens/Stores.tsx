import React from 'react';
import {StatusBar, View, Text} from 'react-native';
import Header from '../components/Header';
import color from '../styles/color';
import stores from './styles/stores';
import storesMock from '../mocks/stores';

/**
 * Stores Screen
 * @returns {JSX.Element} JSX.Element
 */
const Stores = (): JSX.Element => {
  return (
    // Screen
    <View style={stores.screen}>
      {/* StatusBar */}
      <StatusBar backgroundColor={color.white_100} barStyle="dark-content" />
      {/* Header */}
      <Header isCartActive={false} />
      <View>
        <Text style={stores.title}>Stores</Text>
      </View>
    </View>
  );
};

export default Stores;
