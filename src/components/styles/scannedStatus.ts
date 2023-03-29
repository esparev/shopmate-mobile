import {StyleSheet} from 'react-native';
import color from '../../styles/color';
import font from '../../styles/font';

/**
 * Scanned status component styles
 */
const scannedStatus = StyleSheet.create({
  card: {
    height: 166,
    rowGap: 12,
    padding: 16,
    borderRadius: 20,
    backgroundColor: color.white_100,
    shadowColor: color.black,
    shadowOpacity: 0.25,
    elevation: 8,
  },
  statusMessage: {
    fontFamily: font.manrope.semiBold,
    fontSize: 14,
    color: color.black,
  },
  line: {
    width: '100%',
    alignSelf: 'stretch',
    borderBottomWidth: 2,
    borderStyle: 'dashed',
    borderBottomColor: color.green_200,
  },
  buttons: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-evenly',
  },
  button: {
    width: 100,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonTitle: {
    textAlign: 'center',
    fontFamily: font.inter.medium,
    fontSize: 14,
    color: color.gray_300,
  },
});

export default scannedStatus;
