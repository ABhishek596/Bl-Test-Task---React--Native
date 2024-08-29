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
    // backgroundColor: 'yellow',
    // marginTop: StatusBar.currentHeight || 0,
  },
  contain: {
    flex: 5,
    // top: hp('31%'),
    // width: wp('90%'),
    // height: hp('81.6%'),
    backgroundColor: colors.cream,
    // flexDirection: 'row',
    // justifyContent: 'center',
    // alignItems: 'center',
    // alignSelf: 'center',
    // justifyContent: 'space-between',
  },
  image: {
    flex: 1,
    justifyContent: 'center',
  },
  middle: {
    flexDirection: 'row',
    justifyContent: 'center',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: wp('90%'),
    alignSelf: 'center',
    marginTop: hp('2%'),
    height: hp('8%'),
  },
  mycarttxt: {
    // justifyContent: 'center',
    // alignItems: 'center',
  },
  mycart: {
    fontSize: 18,
    color: colors.black,
    // justifyContent: 'center',
  },
  items: {
    fontSize: 14,
    color: colors.gray,
  },

  //flat list view
  listitem: {
    height: hp('28%'),
    width: wp('90%'),
    // justifyContent: 'center',
    borderTopColor: colors.inputBorderColor,
    borderTopWidth: 1,
    alignSelf: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  imagecontain: {
    height: hp('25%'),
    width: wp('35%'),
  },
  increse: {
    fontSize: 14,
    color: colors.black,
    marginRight: wp('4'),
  },
  txtimage: {
    flexDirection: 'row',
  },
  txtcontainer: {
    marginLeft: wp('5%'),
    // justifyContent: 'center',
  },
  toptxt: {
    color: colors.black,
    fontSize: 16,
    fontWeight:'bold'
  },
  middletxt: {
    alignSelf: 'flex-start',
    color: colors.black,
    fontSize: 14,
    marginTop:hp('0.5%')

  },
  bottomtxt: {
    color: colors.gray,
    alignSelf: 'flex-start',
    fontSize: 12,
    marginTop:hp('0.5%')

  },
  activity: {
    flexDirection: 'row',
    marginTop:hp('3%')

    // alignContent:'flex-start'
    // justifyContent
  },
  minus: {
    justifyContent: 'center',
    marginRight: wp('4'),
    backgroundColor:colors.black,
    padding:1,
    borderRadius:5
  },
  plus: {
    justifyContent: 'center',
    backgroundColor:colors.black,
    padding:1,
    borderRadius:5
  },
  totalamtext: {
    height: hp('8%'),
    width: wp('90%'),
    justifyContent: 'center',
    borderTopColor: colors.black,
    borderTopWidth: 4,
    alignSelf: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom:hp('1%')
    // backgroundColor: 'yellow',
  },
  totalfixamount: {
    fontSize: 16,
    color:colors.gray
  },
  finalprice: {
    fontSize: 18,
    color:colors.black

  },
  flatlistcontainer:{
    // height: hp('20%'),

  },
  submit:{
    flex:1
  },
  button:{
    marginTop:hp('1%')
  },
  Quantity:{
    fontSize:14,
    color:colors.black
  },
  cut:{
    alignSelf:'flex-end',
    bottom:hp('9.5%')
  },
  //   wishlisttxtview: {
  //     marginLeft: wp('2%'),
  //   },
  //   icon: {
  //     justifyContent: 'center',
  //   },
  //   iconntext: {
  //     flexDirection: 'row',
  //   },
  //   textstyle: {
  //     fontSize: 18,
  //     alignSelf: 'flex-start',
  //     color: colors.black,
  //   },
  activity: {
    flexDirection: 'row',
    marginTop: hp('3%'),
    // alignContent:'flex-start'
    // justifyContent
  },
  minus: {
    justifyContent: 'center',
    marginRight: wp('4'),
    backgroundColor: colors.black,
    padding: 1,
    borderRadius: 5,
  },
  plus: {
    justifyContent: 'center',
    backgroundColor: colors.black,
    padding: 1,
    borderRadius: 5,
    marginLeft: wp('4'),
  },
  increse:{
    color:colors.black
  },
  noItems: {
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default styles;
