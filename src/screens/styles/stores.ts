import {StyleSheet} from 'react-native';
import color from '../../styles/color';
import font from '../../styles/font';

/**
 * Stores screen styles
 */
const stores = StyleSheet.create({
  screen: {
    height: '100%',
    rowGap: 20,
    paddingVertical: 28,
    backgroundColor: color.white_100,
  },
  title: {
    paddingHorizontal: 28,
    textTransform: 'capitalize',
    fontFamily: font.manrope.extraBold,
    fontSize: 24,
    color: color.black,
  },
});

export default stores;
