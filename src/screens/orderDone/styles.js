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
    // marginTop: StatusBar.currentHeight || 0,
  },
  header: {
    width: wp('90%'),
    height: hp('10%'),
    // backgroundColor: 'red',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    justifyContent: 'space-between',
  },
  wishlisttxtview: {
    marginLeft: wp('2%'),
  },
  icon: {
    justifyContent: 'center',
  },
  iconntext: {
    flexDirection: 'row',
  },
  textstyle: {
    fontSize: 18,
    alignSelf: 'flex-start',
    color: colors.black,
  },
  textstylebottomtxt: {
    fontSize: 12,
    alignSelf: 'flex-start',
    color: colors.gray,
  },
  item: {
    backgroundColor: '#f9c2ff',
    padding: 14,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 14,
  },
  tinyLogo: {
    width: 150,
    height: 150,
  },
  imagecontainer: {
    width: wp('95%'),
    alignSelf: 'center',
    // backgroundColor:'red'
  },
  bagtxtview: {

    // borderWidth: 0.5,
    // borderColor: colors.gray,
    borderTopColor:colors.gray,

    marginTop: hp('2%'),
    borderTopWidth: 0.5,
  },
  lefticon: {
    marginTop: hp('1%'),
    marginRight: wp('1%'),
  },
  nowishlist:{
    marginTop: hp('38%'),
// backgroundColor:'red'
  },
  button:{
    // marginTop: hp('25%'),

  },
  containertop:{
    flex:4
  },
  containerbottom:{
    flex:1
  },
});

export default styles;
