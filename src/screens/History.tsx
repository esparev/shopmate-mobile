import React from 'react';
import {StatusBar, View, Text} from 'react-native';
import history from './styles/history';
import historyMock from '../mocks/history';
import HistoryList from '../components/Lists/HistoryList';

const History = (): JSX.Element => {
  return (
    <View style={history.screen}>
      <StatusBar backgroundColor="white" barStyle="dark-content" />

      <View>
        <Text style={history.title}>Your history</Text>
        <HistoryList history={historyMock}/>
      </View>
    </View>
  );
};

export default History;
