import React from 'react';
import {StatusBar, View, Text} from 'react-native';
import Header from '../components/Header';
import color from '../styles/color';
import purchases from './styles/purchases';

const Purchases = () => {
  return (
    // Screen
    <View style={purchases.screen}>
      {/* StatusBar */}
      <StatusBar backgroundColor={color.green_100} barStyle="dark-content" />
      <View style={purchases.header}>
        {/* Header */}
        <Header isMain={false} isCartActive={false} />
        <View>
          {/* Title, Month & Total */}
          <View style={purchases.main}>
            <Text style={purchases.title}>Your purchases</Text>
            <View style={purchases.info}>
              <Text style={purchases.month}>November</Text>
              <View style={purchases.total}>
                <Text style={purchases.totalTxt}>Total: </Text>
                <Text style={purchases.totalNum}>$ 3590.94</Text>
              </View>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};

export default Purchases;
