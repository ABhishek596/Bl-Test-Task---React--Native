import {Appearance, StyleSheet} from 'react-native';

import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
// import AppStyles from '../../AppStyles';
import colors from '../../../constant/colors';
// const colorScheme = Appearance.getColorScheme();

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'colors.cream',
  },
  txtHighlight: {
    color: colors.black,
    fontSize: wp('7%'),
    width: wp('70%'),
    fontFamily: 'Merriweather-BoldItalic',
    alignSelf: 'flex-start',
    // letterSpacing: 0.1,
    // lineHeight: 19,
  },
  header: {
    width: wp('100%'),
    height: hp('7%'),
    backgroundColor: 'colors.cream',
    // backgroundColor: 'green',
  },
  responsivebox: {
    width: wp('100%'),
    // height: hp('100%'),
    // height: hp('100%'),
    backgroundColor: 'colors.cream',
    // marginTop: hp('1.5%'),
    // backgroundColor: 'yellow',
    // top: hp('35%'),
  },
  bottom: {
    width: wp('90%'),
    height: hp('81%'),
    alignSelf: 'center',
    backgroundColor: 'colors.cream',
    // backgroundColor: 'blue',
    // backgroundColor: 'transparent',
    // justifyContent: 'space-between',
    marginTop: hp('2%'),
    marginBottom: hp('0%'),
    flex:1
  },
  textstyle: {
    color: 'white',
    fontSize: 25,
    fontWeight: 'bold',
    letterSpacing: 2,
    // lineHeight: 35,
  },
  text: {
    color: '#000000',
    fontSize: 24,
    // lineHeight: 84,
    // fontWeight: 'bold',
    letterSpacing: 1,
    fontFamily: 'Merriweather-Bold',

    // textAlign: 'center',
    // backgroundColor: '#000000c0',
  },
  toptext: {
    width: wp('90%'),
    height: hp('5%'),
  },
  resister: {
    width: wp('90%'),
    height: hp('68%'),
    alignSelf: 'center',
    backgroundColor: 'colors.cream',
    flexDirection:'column',
    gap:10
    // backgroundColor: 'red',
  },
  input: {
    top: hp('4%'),
  },
  inputb: {
    top: hp('5%'),
  },
  MyButton: {
    top: hp('5%'),
    //   bottom:hp('5%'),
  },
  endtxt: {
    width: hp('100%'),
    height: wp('10%'),
    backgroundColor: 'colors.cream',

    // backgroundColor: 'green',
    // flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    // marginTop:hp('86.4%')
    // marginBottom:hp('%')
  },
});

export default styles;
