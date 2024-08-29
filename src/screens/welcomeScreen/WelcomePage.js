import React from 'react';
import {
  View,
  SafeAreaView,
  Text,
  StyleSheet,
  StatusBar,
  Image,
  ImageBackground,
  TouchableOpacity,
} from 'react-native';
import colors from '../../constant/colors';
import {Mytxt, SubmitBtn} from '../../constant/file';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
const WelcomePage = ({navigation}) => {
  return (
    <>
      {/* <StatusBar
        barStyle="light-content"
        translucent
        backgroundColor="transparent"
      /> */}

      <ImageBackground
        style={{flex: 1}}
        source={require('../../../assets/images/second.png')}>
        <View style={{top: hp('4.5'), left: wp('5%'), alignSelf: 'flex-start'}}>
          {/* <Mytxt
            style={{
              color: colors.white,
              fontSize: 26,
              fontFamily: 'Merriweather-BlackItalic',
              alignSelf: 'flex-start',
              letterSpacing: 1,
              backgroundColor:'trensparent'
    // lineHeight: 1,
            }}
            txt={'SAM'}
          /> */}
          <Mytxt style={styles.txtHeding} txt={'Luxury'} />
          <Mytxt style={styles.txtDes} txt={'Fashion'} />
        </View>
        <View style={{top: hp('0'), right: wp('5%'), alignSelf: 'flex-end'}}>
          {/* <Mytxt
            style={{
              color: colors.white,
              fontSize: 26,
              fontFamily: 'Merriweather-BlackItalic',
              alignSelf: 'flex-start',
              letterSpacing: 1,
              backgroundColor:'trensparent'
    // lineHeight: 1,
            }}
            txt={'SAM'}
          /> */}
          {/* <Mytxt style={styles.txtHeding} txt={'SAM'} /> */}
          <TouchableOpacity onPress={() => navigation.navigate('SignupScreen')}>
            <Mytxt style={styles.txtsignup} txt={'Sign Up'} />
          </TouchableOpacity>
        </View>
        <View style={{marginLeft: wp('6'), marginTop: hp('40%')}}>
          {/* <Mytxt style={styles.txtHighlight} txt={'Exceptional Modern Clothings'} /> */}
          {/* <Mytxt style={styles.txtHighlight} txt={'SExceptional'} />
        <Mytxt style={{...styles.txtHighlight,...{left:wp('32%')}}} txt={'Modern'} />
        <Mytxt style={{...styles.txtHighlight, ...{left:wp('42%')}}} txt={'Clothings'} /> */}
          <Mytxt
            style={styles.txtHighlight}
            txt={'Shop your favourite brands'}
          />
        </View>
        <View
          style={{
            height: hp('1%'),
            width: wp('95%'),
            backgroundColor: colors.mainColor,
            marginTop: hp('1%'),
          }}
        />
        <Mytxt
          style={styles.txtHighlightDes}
          txt={
            'Browse and search your new style from our Premium and designer brands.'
          }
        />
        <View
          style={{flex: 1, justifyContent: 'flex-end', marginBottom: hp('6')}}>
          <SubmitBtn
            style={{}}
            onPress={() => navigation.navigate('LoginScreen')}
            label={'Log In'}
          />
        </View>
      </ImageBackground>
    </>
  );
};

const styles = StyleSheet.create({
  txtHeding: {
    fontFamily: 'Merriweather-BlackItalic',
    color: colors.white,
    fontSize: hp('3.4%'),
    // width: 90,
    alignSelf: 'flex-start',
    letterSpacing: 0.1,
    // lineHeight: 19,
  },
  txtDes: {
    color: colors.white,
    fontSize: hp('3.4%'),
    fontFamily: 'Merriweather-Light',
    alignSelf: 'flex-start',
    letterSpacing: 0.1,
    // lineHeight: 19,
  },
  txtsignup: {
    color: colors.white,
    fontSize: hp('2%'),
    fontFamily: 'Merriweather-Light',
    alignSelf: 'flex-start',
    letterSpacing: 0.1,
    // lineHeight: 19,
  },
  txtHighlightDes: {
    color: colors.white,
    fontSize: hp('2%'),
    width: wp('90%'),
    fontFamily: 'Merriweather-Light',
    alignSelf: 'center',
    marginTop: hp('1%'),
    lineHeight: 20,
  },
  txtHighlight: {
    color: colors.white,
    fontSize: hp('5'),
    width: wp('70%'),
    fontFamily: 'Merriweather-BoldItalic',
    alignSelf: 'flex-start',
    // letterSpacing: 0.1,
    // lineHeight: 19,
  },
});

export default WelcomePage;
