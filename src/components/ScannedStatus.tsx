import React from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';
import icon from '../styles/icon';
import scannedStatus from './styles/scannedStatus';

const shoppingBag = '../assets/icons/shopping-bag-filled.png';
const store = '../assets/icons/store-filled.png';

/**
 * ScannedStatus component to display when the user is or is not scanning with ShopMate
 * @returns JSX.Element
 */
const ScannedStatus = (): JSX.Element => {
  return (
    <View style={scannedStatus.card}>
      <Text
        style={
          scannedStatus.statusMessage
        }>{`You're not scanning with ShopMate yet :(`}</Text>
      <View style={scannedStatus.line}></View>
      {/* Buttons */}
      <View style={scannedStatus.buttons}>
        <TouchableOpacity style={scannedStatus.button}>
          <Image source={require(shoppingBag)} style={icon.size} />
          <Text style={scannedStatus.buttonTitle}>Your purchases</Text>
        </TouchableOpacity>
        <TouchableOpacity style={scannedStatus.button}>
          <Image source={require(store)} style={icon.size} />
          <Text style={scannedStatus.buttonTitle}>Stores</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default ScannedStatus;
