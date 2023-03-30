import React from 'react';
import {View, Text} from 'react-native';
import Header from '../components/Header';
import purchases from './styles/purchases';

const Purchases = () => {
  return (
    <View style={purchases.screen}>
      <View style={purchases.header}>
        <Header isMain={false} isCartActive={false} />
        <View>
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
