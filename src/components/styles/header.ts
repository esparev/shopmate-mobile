import {StyleSheet} from 'react-native';

/**
 * Header component styles
 */
const header = StyleSheet.create({
  container: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingLeft: 28,
    paddingRight: 28,
    overflow: 'visible',
  },
  arrowIcon: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-start',
  },
  cartIcon: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
  cart: {
    width: 32,
    height: 28,
  },
});

export default header;
