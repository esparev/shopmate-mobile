import {StyleSheet} from 'react-native';
import color from '../../styles/color';
import font from '../../styles/font';

/**
 * Purchases screen styles
 */
const purchases = StyleSheet.create({
  screen: {
    height: '100%',
    rowGap: 20,
    paddingBottom: 28,
    backgroundColor: color.white_100,
  },
  header: {
    rowGap: 20,
    paddingTop: 28,
    backgroundColor: color.green_100,
  },
  main: {
    paddingHorizontal: 28,
    backgroundColor: color.green_100,
  },
  title: {
    textTransform: 'capitalize',
    fontFamily: font.manrope.extraBold,
    fontSize: 24,
    color: color.black,
  },
  info: {
    rowGap: 8,
    paddingVertical: 16,
  },
  month: {
    textTransform: 'capitalize',
    fontFamily: font.manrope.bold,
    fontSize: 20,
    color: color.black,
  },
  total: {
    flexDirection: 'row',
    alignContent: 'center',
  },
  totalTxt: {
    fontFamily: font.inter.regular,
    fontSize: 14,
    color: color.black,
  },
  totalNum: {
    fontFamily: font.manrope.bold,
    fontSize: 16,
    color: color.black,
  },
});

export default purchases;
