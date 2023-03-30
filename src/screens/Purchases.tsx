import React from 'react';
import {StatusBar, View, Text} from 'react-native';
import Header from '../components/Header';
import PurchaseList from '../components/Lists/PurchaseList';
import color from '../styles/color';
import purchases from './styles/purchases';
import purchasesMock from '../mocks/purchases';

const Purchases = () => {
  let purchasesTotal = 0;

  purchasesMock.forEach(purchase => {
    purchasesTotal += purchase.total;
  });

  return (
    // Screen
    <View style={purchases.screen}>
      {/* StatusBar */}
      <StatusBar backgroundColor={color.green_100} barStyle="dark-content" />
      {/* Header */}
      <View style={purchases.header}>
        <Header isMain={false} isCartActive={false} />
        <View>
          {/* Title, Month & Total */}
          <View style={purchases.main}>
            <Text style={purchases.title}>Your purchases</Text>
            <View style={purchases.info}>
              <Text style={purchases.month}>November</Text>
              <View style={purchases.total}>
                <Text style={purchases.totalTxt}>Total: </Text>
                <Text style={purchases.totalNum}>
                  ${' '}
                  {purchasesTotal.toLocaleString('en-US', {
                    maximumFractionDigits: 2,
                    minimumFractionDigits: 2,
                  })}
                </Text>
              </View>
            </View>
          </View>
        </View>
      </View>
      {/* PurchaseList */}
      <PurchaseList purchases={purchasesMock} />
    </View>
  );
};

export default Purchases;
