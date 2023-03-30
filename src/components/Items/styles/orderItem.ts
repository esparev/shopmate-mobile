import {StyleSheet} from 'react-native';
import color from '../../../styles/color';
import font from '../../../styles/font';

const orderItem = StyleSheet.create({
  item: {
    width: '100%',
    paddingHorizontal: 28,
    paddingVertical: 16,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderBottomWidth: 1,
    borderBottomColor: color.gray_200,
  },
  date: {
    fontFamily: font.inter.regular,
    fontSize: 14,
    color: color.gray_300,
  },
  store: {
    fontFamily: font.manrope.bold,
    fontSize: 16,
    color: color.black,
  },
  info: {
    columnGap: 4,
    flexDirection: 'row',
    alignItems: 'center',
  },
  netTotal: {
    alignItems: 'flex-end',
  },
  paymentNet: {
    fontFamily: font.inter.regular,
    fontSize: 14,
    color: color.gray_300,
  },
  total: {
    fontFamily: font.manrope.extraBold,
    fontSize: 18,
    color: color.green_200,
  },
});

export default orderItem;
