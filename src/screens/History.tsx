import React from 'react';
import {StatusBar, View, Text} from 'react-native';
import Header from '../components/Header';
import HistoryList from '../components/Lists/HistoryList';
import color from '../styles/color';
import history from './styles/history';
import historyMock from '../mocks/history';

const History = (): JSX.Element => {
  return (
    // Screen
    <View style={history.screen}>
      {/* StatusBar */}
      <StatusBar backgroundColor={color.white_100} barStyle="dark-content" />
      {/* Header */}
      <Header isCartActive={true} />
      <View>
        <Text style={history.title}>Your history</Text>
        <HistoryList history={historyMock} />
      </View>
    </View>
  );
};

export default History;
