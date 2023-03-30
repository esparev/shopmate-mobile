import React from 'react';
import {StatusBar, View, Text} from 'react-native';
import Header from '../components/Header';
import OrderList from '../components/Lists/OrderList';
import color from '../styles/color';
import orders from './styles/orders';
import ordersMock from '../mocks/orders';

/**
 * Orders Screen
 * @returns {JSX.Element} JSX.Element
 */
const Orders = (): JSX.Element => {
  let ordersTotal = 0;

  ordersMock.forEach(order => {
    ordersTotal += order.total;
  });

  return (
    // Screen
    <View style={orders.screen}>
      {/* StatusBar */}
      <StatusBar backgroundColor={color.green_100} barStyle="dark-content" />
      {/* Header */}
      <View style={orders.header}>
        <Header isMain={false} isCartActive={false} />
        <View>
          {/* Title, Month & Total */}
          <View style={orders.main}>
            <Text style={orders.title}>Your orders</Text>
            <View style={orders.info}>
              <Text style={orders.month}>November</Text>
              <View style={orders.total}>
                <Text style={orders.totalTxt}>Total: </Text>
                <Text style={orders.totalNum}>
                  ${' '}
                  {ordersTotal.toLocaleString('en-US', {
                    maximumFractionDigits: 2,
                    minimumFractionDigits: 2,
                  })}
                </Text>
              </View>
            </View>
          </View>
        </View>
      </View>
      {/* OrderList */}
      <OrderList orders={ordersMock} />
    </View>
  );
};

export default Orders;
