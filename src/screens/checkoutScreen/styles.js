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
    // justifyContent: 'space-between',       //add
  },
  containerbottom: {
    flex: 1,
    backgroundColor: colors.cream, //add
  },
  flatlist: {
    flex: 1,
    backgroundColor: colors.cream,

    // justifyContent: 'center',        //add
  },
  details: {
    // flex: 1,
    backgroundColor: colors.cream,
    height: hp('45%'),

    // justifyContent: 'center',      //add
  },
  detailsincenter: {
    width: wp('90%'),
    alignSelf: 'center',
    backgroundColor: colors.cream,
  },
  price: {
    flex: 1,
    backgroundColor: colors.green,

    // justifyContent: 'center',      //add
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
    height: hp('15%'),
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
    height: hp('10%'),
    width: wp('18%'),
    borderRadius: 10,
  },
  increse: {
    fontSize: 16,
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
    marginTop: hp('1%'),
  },
  bottomtxt: {
    color: colors.gray,
    alignSelf: 'flex-start',
    fontSize: 12,
    marginTop: hp('1%'),
  },
  activity: {
    flexDirection: 'row',
    // marginTop: hp('3%'),

    // alignContent:'flex-start'
    // justifyContent
  },
  minus: {
    justifyContent: 'center',
    marginRight: wp('1'),
  },
  plus: {
    justifyContent: 'center',
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
    marginBottom: hp('1%'),
    // backgroundColor: 'yellow',
  },
  totalfixamount: {
    fontSize: 16,
    color: colors.gray,
  },
  finalprice: {
    fontSize: 18,
    color: colors.black,
  },
  flatlistcontainer: {
    // height: hp('20%'),
  },
  submit: {
    flex: 1,
  },
  button: {
    // marginTop:hp('1%')   //add
  },
  Quantity: {
    fontSize: 14,
    color: colors.black,
  },
  cut: {
    alignSelf: 'flex-end',
    bottom: hp('9.5%'),
  },
  billing: {
    borderBottomWidth: 3,
    borderBottomColor: colors.black,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  billingtxt: {
    paddingBottom: hp('3%'),
  },
  txtstyle: {
    fontSize: 16,
    color: colors.gray,
    marginTop: hp('1%'),
    alignSelf:'flex-start'

  },
  txtstyleprice:{
    fontSize: 16,
    color: colors.gray,
    marginTop: hp('1%'),
    alignSelf:'flex-end'
  },
  totalamt:{
    flexDirection: 'row',
    justifyContent: 'space-between',

  },
  shippingmethod:{
    fontSize: 18,
    color: colors.black,
    marginTop: hp('4%'),
    alignSelf:'flex-start'
  },
  formInputfield:{
    marginTop: hp('1.5%'),

  },
  addressView: {
    width: wp('90'),
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    alignSelf:'center',
  },
  title: {
    fontSize: wp('4.5'),
    // marginLeft: 20,
    marginTop: hp('5'),
    color: '#000',
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
});

export default styles;
