import React from 'react';
import {StatusBar} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import NavigationTab from './src/navigation/NavigationTab';

/**
 * App component for the app entry point
 * @returns JSX.Element
 */
const App = (): JSX.Element => {
  return (
    <>
      <StatusBar backgroundColor="white" barStyle="dark-content" />

      <NavigationContainer>
        <NavigationTab />
      </NavigationContainer>
    </>
  );
};

export default App;
