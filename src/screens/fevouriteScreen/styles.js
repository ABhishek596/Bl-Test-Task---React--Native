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
    backgroundColor: 'white',

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
    // width: wp('95%'),
    // height:hp('90%'),
    // alignSelf: 'center',
    // backgroundColor:'red',
    // padding:10,
  },
  bagtxtview: {
    // borderWidth: 0.5,
    // borderColor: colors.gray,
    borderTopColor: colors.gray,

    marginTop: hp('2%'),
    borderTopWidth: 0.5,
  },
  lefticon: {
    marginTop: hp('1%'),
    marginRight: wp('1%'),
  },
  nowishlist: {
    marginTop: hp('18%'),
    // backgroundColor:'red'
  },
  MainContainer: {
    flex: 1,
    backgroundColor: colors.cream,
  },

  gridbox: {
    flex: 1,
    // height: 100,
    // margin: 1,
    backgroundColor: colors.cream,
    justifyContent: 'center',
    alignSelf: 'center',
    width: wp('95%'),
    marginLeft:wp('2'),
    paddingBottom:10
    // alignItems: 'center',
  },

  gridText: {
    fontSize: 24,
    color: 'white',
  },
  noItems: {
    width:  wp('100%'),
    height:  hp('100%'),
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default styles;
