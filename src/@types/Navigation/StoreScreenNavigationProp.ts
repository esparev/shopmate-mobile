import {BottomTabNavigationProp} from '@react-navigation/bottom-tabs';
import {CompositeNavigationProp} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import type StoreStackParamList from './StoreStackParamList';

/**
 * StoreScreenNavigationProp is a type that represents the navigation prop of the StoreScreen.
 */
type StoreScreenNavigationProp = CompositeNavigationProp<
  BottomTabNavigationProp<StoreStackParamList, 'Stores'>,
  StackNavigationProp<StoreStackParamList>
>;

export default StoreScreenNavigationProp;
