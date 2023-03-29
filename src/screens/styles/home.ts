import {StyleSheet} from 'react-native';
import color from '../../styles/color';
import font from '../../styles/font';

/**
 * Home screen styles
 */
const home = StyleSheet.create({
  screen: {
    height: '100%',
    padding: 28,
    rowGap: 20,
    position: 'relative',
    backgroundColor: color.white_100,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  welcome: {
    columnGap: 8,
    flexDirection: 'row',
    alignItems: 'center',
  },
  welcomeProfile: {
    width: 40,
    height: 40,
    borderRadius: 50,
    textAlign: 'center',
    textAlignVertical: 'center',
    fontFamily: font.inter.semiBold,
    color: color.white_100,
    backgroundColor: color.green_200,
  },
  welcomeName: {
    fontFamily: font.inter.medium,
    fontSize: 16,
    color: color.white_100,
  },
  foreground: {
    height: 180,
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    zIndex: -5,
    position: 'absolute',
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    backgroundColor: color.green_300,
  },
});

export default home;
