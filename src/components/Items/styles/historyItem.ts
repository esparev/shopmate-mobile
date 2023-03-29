import {StyleSheet} from 'react-native';
import color from '../../../styles/color';
import font from '../../../styles/font';

const historyItem = StyleSheet.create({
  item: {
    paddingTop: 16,
    paddingBottom: 16,
    paddingLeft: 28,
    paddingRight: 28,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderBottomWidth: 1,
    borderBottomColor: color.gray_200,
  },
  info: {
    flexDirection: 'row',
    columnGap: 4,
  },
  month: {
    textTransform: 'uppercase',
    fontFamily: font.inter.semiBold,
    fontSize: 16,
    color: color.black,
  },
  year: {
    paddingTop: 16,
    paddingLeft: 28,
    paddingRight: 28,
    fontFamily: font.inter.semiBold,
    fontSize: 16,
    color: color.gray_300,
  },
  total: {
    fontFamily: font.manrope.medium,
    fontSize: 16,
    color: color.gray_300,
  },
});

export default historyItem;
