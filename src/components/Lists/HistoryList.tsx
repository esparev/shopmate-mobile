import React, {useState, useCallback} from 'react';
import {ScrollView, View, Text, FlatList, RefreshControl} from 'react-native';
import HistoryItem from '../Items/HistoryItem';
import historyItem from '../Items/styles/historyItem';
import HistoryArrayProps from '../../@types/Lists/HistoryArrayProps';
import groupHistory from '../../utils/functions/groupHistory';
import sortByYear from '../../utils/functions/sortByYear';

const HistoryList = (props: HistoryArrayProps): JSX.Element => {
  const [refreshing, setRefreshing] = useState(false);

  const groupedHistory = groupHistory(props);
  const sortedGroupedHistory = sortByYear(groupedHistory);

  const onRefresh = useCallback(() => {
    setRefreshing(true);
    setTimeout(() => {
      setRefreshing(false);
    }, 1500);
  }, []);

  return (
    <ScrollView
      refreshControl={
        <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
      }>
      {Object.values(sortedGroupedHistory).map(item => (
        <View key={item.year}>
          <Text style={historyItem.year}>{item.year}</Text>
          <FlatList
            data={groupedHistory[item.year].history}
            showsVerticalScrollIndicator={false}
            keyExtractor={history => String(history.id)}
            renderItem={({item}) => <HistoryItem history={item} />}
          />
        </View>
      ))}
    </ScrollView>
  );
};

export default HistoryList;
