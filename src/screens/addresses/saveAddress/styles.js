import {Appearance, StyleSheet} from 'react-native';

import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
// import AppStyles from '../../AppStyles';
import colors from '../../../constant/colors';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.cream,
  },
  scroll: {
    backgroundColor: colors.creame,
  },
  main: {
    backgroundColor: colors.cream,
    width: wp('100%'),
    alignSelf: 'center',
  },
  containertop: {
    flex: 10,
  },
  homeaddress: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  toptxt: {
    borderBottomColor: colors.gray,
    borderBottomWidth: 0.5,
    backgroundColor: colors.white,
  },
  containerbottom: {
    flex: 1,
    backgroundColor: colors.cream,
    flexDirection: 'row',
  },
  checkBox: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: wp('2'),
  },
  checkBox2: {
    marginLeft: wp('10'),
  },
  lasttxt: {
    marginLeft: wp('2'),
    color: colors.gray,
  },
  cancle: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  save: {
    flex: 1,
    backgroundColor: colors.gray,
    justifyContent: 'center',
    alignItems: 'center',
  },
  cancledone: {
    fontSize: hp('2.5'),
    color: colors.black,
  },
  savedone: {
    fontSize: hp('2.5'),
    color: colors.white,
  },
  line: {
    fontSize: hp('2'),
    color: colors.gray,
    alignSelf: 'flex-start',
    marginTop: hp('1'),
  },
  textinline: {
    fontSize: hp('2'),
    color: colors.primary,
    alignSelf: 'flex-start',
  },
  middelview: {
    height: hp('4'),
    borderLeftColor: colors.gray,
    borderLeftWidth: 0.5,
  },
  lastcheckBox: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: wp('2'),
    paddingBottom: wp('5'),
  },
});

export default styles;
