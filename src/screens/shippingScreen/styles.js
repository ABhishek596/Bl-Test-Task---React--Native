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
    flex: 1,
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
  smalltxtone: {
    alignSelf: 'flex-start',
    color: colors.gray,
    fontSize: hp('1.7%'),
    marginTop: hp('2%'),
  },
  smalltxt: {
    alignSelf: 'flex-start',
    color: colors.gray,
    fontSize: hp('1.7%'),
    marginTop: hp('1%'),
  },
  button: {
    marginBottom: hp('8%'),
  },
  resister: {
    alignSelf: 'center',
  },
  containerbottom: {
    flexDirection: 'row',
    marginTop: hp('2%'),
    alignItems: 'center',
    // alignSelf:'center'
  },
  lasttxt:{
    color: colors.gray,
  }
});

export default styles;
