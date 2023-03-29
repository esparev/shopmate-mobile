import React from 'react';
import {StatusBar, View, Text} from 'react-native';
import Header from '../components/Header';
import HistoryList from '../components/Lists/HistoryList';
import history from './styles/history';
import historyMock from '../mocks/history';

const History = (): JSX.Element => {
  return (
    <View style={history.screen}>
      <StatusBar backgroundColor="white" barStyle="dark-content" />

      <Header isCartActive={true} />
      <View>
        <Text style={history.title}>Your history</Text>
        <HistoryList history={historyMock} />
      </View>
    </View>
  );
};

export default History;
