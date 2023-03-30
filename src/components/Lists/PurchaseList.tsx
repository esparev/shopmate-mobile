import React from 'react';
import {FlatList} from 'react-native';
import PurchaseItem from '../Items/PurchaseItem';
import PurchaseArrayProps from '../../@types/Lists/PurchaseArrayProps';

const PurchaseList = (props: PurchaseArrayProps) => {
  const {purchases} = props;

  return (
    <FlatList
      data={purchases}
      showsVerticalScrollIndicator={false}
      keyExtractor={purchase => String(purchase.id)}
      renderItem={({item}) => <PurchaseItem purchase={item} />}
    />
  );
};

export default PurchaseList;
