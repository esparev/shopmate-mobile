import React from 'react';
import {View, Image, TouchableOpacity} from 'react-native';
import icon from '../styles/icon';
import header from './styles/header';
import HeaderProps from '../@types/HeaderProps';

const backArrowBlack = '../assets/icons/back-arrow-black.png';
const backArrowWhite = '../assets/icons/back-arrow-white.png';
const cartBlackInactive = '../assets/icons/shopping-cart-black-inactive.png';
const cartBlackActive = '../assets/icons/shopping-cart-black-active.png';
const cartWhiteInactive = '../assets/icons/shopping-cart-white-inactive.png';
const cartWhiteActive = '../assets/icons/shopping-cart-white-active.png';

/**
 * Header component for the app screens with back arrow and cart icon
 * @param {boolean} isMain - is the screen main screen. Default is true
 * @param {boolean} isWhite - is the screen white. Default is true
 * @param {boolean} isCartActive - is the cart icon active. Default is false
 * @returns JSX.Element
 */
const Header = (props: HeaderProps): JSX.Element => {
  const {isMain = true, isWhite = true, isCartActive = false} = props;

  const backArrow = isWhite ? require(backArrowBlack) : require(backArrowWhite);
  const cartInactive = isWhite ? require(cartBlackInactive) : require(cartWhiteInactive);
  const cartActive = isWhite ? require(cartBlackActive) : require(cartWhiteActive);
  const cart = isCartActive ? cartActive : cartInactive;

  return (
    <View style={header.container}>
      {/* Back Arrow */}
      {isMain ? null : (
        <TouchableOpacity style={header.arrowIcon}>
          <Image style={icon.size} source={backArrow} />
        </TouchableOpacity>
      )}
      {/* Cart */}
      <TouchableOpacity style={header.cartIcon}>
        <Image style={header.cart} source={cart} />
      </TouchableOpacity>
    </View>
  );
};

export default Header;
