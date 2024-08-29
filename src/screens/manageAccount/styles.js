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
    flex: 7,
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
    backgroundColor: colors.cream,
    justifyContent: 'center',
    alignItems: 'center',
    borderTopColor: colors.gray,
    borderTopWidth: 1,
  },
  mainscrollview: {
    width: wp('80%'),
    alignSelf: 'center',
    
  },
  toptxtview: {
    width: wp('80%'),
    height: hp('14%'),
    flexDirection: 'row',
    // justifyContent: 'center',
    justifyContent: 'space-between',
    borderWidth: 1,
    borderColor: colors.gray,
    marginTop: hp('3%'),
    alignItems: 'center',
  },
  leftcontent: {
    marginLeft: wp('3%'),
   
  },
  rightcontenr: {
    marginRight: wp('6'),
  },
});

export default styles;
