import React from 'react';
import {TouchableOpacity, View, Text, Image} from 'react-native';
import moment from 'moment';
import icon from '../../styles/icon';
import orderItem from './styles/orderItem';
import OrderItemProps from '../../@types/Items/OrderItemProps';

const chevron = '../../assets/icons/chevron-right.png';

const OrderItem = (props: OrderItemProps) => {
  const {order} = props;

  return (
    <TouchableOpacity style={orderItem.item}>
      {/* Date & Location */}
      <View>
        <Text style={orderItem.date}>
          {moment(order.date).format('MMMM DD, YYYY')}
        </Text>
        <Text style={orderItem.store}>
          {order.store} {order.location}
        </Text>
      </View>
      {/* Total */}
      <View style={orderItem.info}>
        <View style={orderItem.netTotal}>
          <Text style={orderItem.paymentNet}>{order.paymentNetwork}</Text>
          <Text style={orderItem.total}>
            ${' '}
            {order.total.toLocaleString('en-US', {
              maximumFractionDigits: 2,
              minimumFractionDigits: 2,
            })}
          </Text>
        </View>
        <Image source={require(chevron)} style={icon.size} />
      </View>
    </TouchableOpacity>
  );
};

export default OrderItem;
