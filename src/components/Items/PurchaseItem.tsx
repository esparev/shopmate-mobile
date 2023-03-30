import React from 'react';
import {TouchableOpacity, View, Text, Image} from 'react-native';
import moment from 'moment';
import icon from '../../styles/icon';
import purchaseItem from './styles/purchaseItem';
import PurchaseItemProps from '../../@types/Items/PurchaseItemProps';

const chevron = '../../assets/icons/chevron-right.png';

const PurchaseItem = (props: PurchaseItemProps) => {
  const {purchase} = props;

  return (
    <TouchableOpacity style={purchaseItem.item}>
      {/* Date & Location */}
      <View>
        <Text style={purchaseItem.date}>
          {moment(purchase.date).format('MMMM DD, YYYY')}
        </Text>
        <Text style={purchaseItem.store}>
          {purchase.store} {purchase.location}
        </Text>
      </View>
      {/* Total */}
      <View style={purchaseItem.info}>
        <View style={purchaseItem.netTotal}>
          <Text style={purchaseItem.paymentNet}>{purchase.paymentNetwork}</Text>
          <Text style={purchaseItem.total}>
            ${' '}
            {purchase.total.toLocaleString('en-US', {
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

export default PurchaseItem;
