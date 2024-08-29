import {Appearance, StyleSheet} from 'react-native';

import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
// import AppStyles from '../../AppStyles';
import colors from '../../constant/colors';

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
    marginTop: hp('2%'),
    width: wp('100%'),
    alignSelf: 'center',
  },
  containertop: {
    flex: 10,
  },
  toptxt: {
    borderBottomColor: colors.gray,
    borderBottomWidth: 0.5,
  },
  containerbottom: {
    flex: 1,
    backgroundColor: colors.cream,
    flexDirection: 'row',
  },
  checkBox: {
    flexDirection: 'row',
    // marginTop: hp('2%'),
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
    // fontSize:hp('3'),
    // color:colors.cream
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
    padding: hp('2'),
  },
  lastcheckBox:{
    flexDirection: 'row',
    // marginTop: hp('2%'),
    alignItems: 'center',
    padding: wp('2'),
    paddingBottom:wp('5'),
  },
   typeView: {
    width: wp('100'),
    flexDirection: 'row',
    marginTop: 20,
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  typeBtn: {
    width: wp('28'),
    height:hp('5'),
    borderRadius: 10,
    flexDirection: 'row',
    paddingLeft: 10,
    alignItems: 'center',
    marginLeft:wp('4')
  },
  radio: {
    width: 24,
    height: 24,
  },
  radioText: {marginLeft: 10},
});

export default styles;
