import React from 'react';
import moment from 'moment';
import {TouchableOpacity, View, Text, Image} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import icon from '../../styles/icon';
import historyItem from './styles/historyItem';
import HistoryItemProps from '../../@types/Items/HistoryItemProps';
import type HistoryStackParamList from '../../@types/Navigation/HistoryScreenNavigationProp';

const chevron = '../../assets/icons/chevron-right.png';

const HistoryItem = (props: HistoryItemProps) => {
  const {history} = props;
  const navigation = useNavigation<HistoryStackParamList>();

  const isCurrentYear = moment().year() === history.year;

  return (
    <TouchableOpacity
      style={historyItem.item}
      onPress={() => navigation.push('Purchases')}>
      <Text style={historyItem.month}>
        {moment.monthsShort(history.month)}{' '}
        {isCurrentYear ? null : history.year.toString().substring(2)}
      </Text>
      <View style={historyItem.info}>
        <Text style={historyItem.total}>$ {history.total}</Text>
        <Image source={require(chevron)} style={icon.size} />
      </View>
    </TouchableOpacity>
  );
};

export default HistoryItem;
