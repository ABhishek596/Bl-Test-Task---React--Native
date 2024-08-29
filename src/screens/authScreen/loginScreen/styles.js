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
  },
  main: {
    backgroundColor: 'colors.cream',
    marginTop:hp('1.5%'),
    width: wp('100%'),
    height: hp('100%'),
  },
  containermain: {
    top: hp('3%'),
    // flex: 1,
    // justifyContent: 'center',
    // marginHorizontal: 16,
    width: wp('90%'),
    height: hp('70%'),
    alignSelf: 'center',
    backgroundColor: 'colors.cream',
    // backgroundColor: 'green',
    // marginBottom: hp('5%'),
    flexDirection: 'column',
    // gap: 22,
  },
  title: {
    color: colors.black,
    fontWeight: 'bold',
    fontSize: hp('3%'),
    fontFamily: 'Merriweather-Black',
    alignSelf: 'flex-start',
  },
  text: {
    fontFamily: 'Merriweather-Black',
    fontSize: hp('2%'),
    color: 'red',
  },
  textd: {
    marginTop: hp('2%'),
    alignSelf:'flex-start',
    color:colors.gray,
    fontSize:14
  },
  passwordtxt:{
    alignSelf:'flex-start',
    color:colors.gray,
    fontSize:14
  },
  flexone: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    height: hp('5%'),
    marginTop: hp('3%'),
    // backgroundColor: 'yellow',
  },
  buttonstyle: {
    marginTop: hp('4%'),
  },
  secondbuttonstyle: {
    marginTop: hp('1.5%'),
  },
  input: {
    fontFamily: 'Merriweather-Black',
    backgroundColor: '#fff',
    borderColor: '#fff',
    width: '100%',
    borderWidth: 1,
    // borderRadius: 10,
    // padding: 10,
    // width: wp('85%')
  },
  toggleSwitch: {
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignItems: 'center',
    alignContent: 'center',
  },
  texte: {
    // justifyContent:'center'
  },
  texta: {
    fontFamily: 'Merriweather-Black',
    alignSelf:'flex-start',
    color:colors.gray,
    fontSize:14
    // width: hp('25%'),
  },
  textbstyle: {
    justifyContent: 'center',
  },
  textb: {
    fontFamily: 'Merriweather-Black',
    alignSelf:'flex-start',
    color:colors.gray,
    fontSize:14
    // alignContent:'center'
    // justifyContent:'center',
    // alignSelf:"center"
    // width: hp('3%'),
  },
  lasttext: {
    height: hp('6%'),
    justifyContent: 'center',
    marginTop: hp('3%'),
  },
  textc: {
    fontFamily: 'Merriweather-Bold',
    fontWeight: 'bold',
    fontSize: hp('3%'),
    textAlign: 'center',
    color: colors.black,
  },
});

export default styles;
