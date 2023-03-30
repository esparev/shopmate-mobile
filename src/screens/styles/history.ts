import {StyleSheet} from 'react-native';
import color from '../../styles/color';
import font from '../../styles/font';

/**
 * History screen styles
 */
const history = StyleSheet.create({
  screen: {
    height: '100%',
    paddingTop: 28,
    paddingBottom: 28,
    rowGap: 20,
    backgroundColor: color.white_100,
  },
  title: {
    paddingLeft: 28,
    paddingRight: 28,
    textTransform: 'capitalize',
    fontFamily: font.manrope.extraBold,
    fontSize: 24,
    color: color.black,
  },
});

export default history;
