// import { Appearance, StyleSheet } from 'react-native';
// import AppStyles from '../../AppStyles';

// const colorScheme = Appearance.getColorScheme();

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: AppStyles.colorSet[colorScheme].mainThemeBackgroundColor,
//   },
// });

// export default styles;

import {Appearance, StyleSheet} from 'react-native';

import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
// import AppStyles from '../../AppStyles';

// const colorScheme = Appearance.getColorScheme();

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'red',
  },
  insideview: {
    width: wp('85%'),
    height: hp('85%'),
    backgroundColor: 'transparent',
    // backgroundColor: 'green',
  },
  insideviewsecond: {
    width: wp('85%'),
    height: hp('45%'),
    backgroundColor: 'transparent',
    // backgroundColor: 'yellow',
    top: hp('35%'),
  },
  insideviewthird: {
    width: wp('85%'),
    height: hp('17%'),
    backgroundColor: 'transparent',
    // backgroundColor: 'blue',
    justifyContent: 'space-between',
    marginTop: hp('13%'),
  },
  textstyle: {
    color: 'white',
    fontSize: 25,
    fontWeight: 'bold',
    letterSpacing: 2,
    // lineHeight: 35,
  },
  text: {
    color: 'white',
    fontSize: 24,
    // lineHeight: 84,
    // fontWeight: 'bold',
    letterSpacing: 1,
    fontFamily: 'Gilroy-Bold',
    
    // textAlign: 'center',
    // backgroundColor: '#000000c0',
  },
  textbottom: {
    color: 'black',
    fontSize: 13,
    // lineHeight: 84,
    // fontWeight: 'bold',
    marginTop: hp('1%'),
    textAlign: 'center',
  },
  buttonone: {
    height: 40,
    backgroundColor: '#2f4f4f',
    justifyContent: 'center',
    top: 10,
  },
  buttontwo: {
    // marginTop:hp('2%'),
    height: 40,
    backgroundColor: '#2f4f4f',
    justifyContent: 'center',
  },
  textsignup: {
    color: 'black',
    fontSize: 18,
    // lineHeight: 84,
    fontWeight: 'bold',
    textAlign: 'center',
    padding: 2,
  },
});

export default styles;
