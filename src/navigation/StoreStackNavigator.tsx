import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Stores from '../screens/Stores';
// import Store from '../screens/Store';
// import Search from '../screens/Search';
// import Products from '../screens/Products';
// import OpeningHours from '../screens/OpeningHours';
import StoreStackParamList from '../@types/Navigation/StoreStackParamList';

const Stack = createStackNavigator<StoreStackParamList>();

/**
 * StoreStackNavigator component for stack navigation
 * @returns JSX.Element
 */
const StoreStackNavigator = (): JSX.Element => {
  const options = {headerShown: false};

  return (
    <Stack.Navigator>
      <Stack.Screen name="Stores" component={Stores} options={options} />
      {/* <Stack.Screen name="Search" component={Search} options={options} /> */}
      {/* <Stack.Screen name="Products" component={Products} options={options} /> */}
      {/* <Stack.Screen name="OpeningHours" component={OpeningHours} options={options} /> */}
    </Stack.Navigator>
  );
};

export default StoreStackNavigator;
