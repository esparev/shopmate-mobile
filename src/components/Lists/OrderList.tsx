import React from 'react';
import {FlatList} from 'react-native';
import OrderItem from '../Items/OrderItem';
import OrderArrayProps from '../../@types/Lists/OrderArrayProps';

const OrderList = (props: OrderArrayProps) => {
  const {orders} = props;

  return (
    <FlatList
      data={orders}
      showsVerticalScrollIndicator={false}
      keyExtractor={order => String(order.id)}
      renderItem={({item}) => <OrderItem order={item} />}
    />
  );
};

export default OrderList;
