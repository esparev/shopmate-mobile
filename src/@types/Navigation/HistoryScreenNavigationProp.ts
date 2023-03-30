import {BottomTabNavigationProp} from '@react-navigation/bottom-tabs';
import {CompositeNavigationProp} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import type HistoryStackParamList from './HistoryStackParamList';

/**
 * HistoryScreenNavigationProp is a type that represents the navigation prop of the HistoryScreen.
 */
type HistoryScreenNavigationProp = CompositeNavigationProp<
  BottomTabNavigationProp<HistoryStackParamList, 'History'>,
  StackNavigationProp<HistoryStackParamList>
>;

export default HistoryScreenNavigationProp;
